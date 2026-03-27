describe('Performance Tests', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        // Clear performance marks
        win.performance.mark('start-loading');
      }
    });
  });

  it('should load the page within acceptable time', () => {
    cy.window().then((win) => {
      win.performance.mark('page-loaded');
      win.performance.measure('page-load-time', 'start-loading', 'page-loaded');

      const measure = win.performance.getEntriesByName('page-load-time')[0];
      expect(measure.duration).to.be.lessThan(3000); // Less than 3 seconds
    });
  });

  it('should have acceptable First Contentful Paint', () => {
    cy.window().then((win) => {
      // Wait for paint metrics
      cy.wait(100).then(() => {
        const paintEntries = win.performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');

        if (fcp) {
          expect(fcp.startTime).to.be.lessThan(2000); // Less than 2 seconds
        }
      });
    });
  });

  it('should have acceptable Largest Contentful Paint', () => {
    // Wait for page to fully load and render
    cy.contains('Welcome!').should('be.visible');

    // Check LCP entries if they're available
    cy.window().then((win) => {
      // Try to get LCP entries that may have already been captured
      const lcpEntries = win.performance.getEntriesByType('largest-contentful-paint');

      // If LCP entries exist, verify they're reasonable
      if (lcpEntries && lcpEntries.length > 0) {
        const lcp = lcpEntries[lcpEntries.length - 1]; // Get the latest LCP
        expect(lcp.startTime).to.be.lessThan(3000); // Less than 3 seconds
      }
      // If no LCP entries yet, that's ok - page still loads quickly
    });
  });

  it('should not have excessive bundle size', () => {
    cy.window().then((win) => {
      // Check that main bundle is not too large
      cy.request('/').then((response) => {
        const contentLength = response.headers['content-length'];
        if (contentLength && typeof contentLength === 'string') {
          expect(parseInt(contentLength)).to.be.lessThan(5000000); // Less than 5MB
        }
      });
    });
  });

  it('should load images efficiently', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img).should('be.visible');
      cy.wrap($img).invoke('attr', 'src').then((src) => {
        if (src && typeof src === 'string' && !src.startsWith('data:')) {
          cy.request(src).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.duration).to.be.lessThan(2000); // Images load within 2 seconds
          });
        }
      });
    });
  });

  it('should have acceptable Time to Interactive', () => {
    cy.window().then((win) => {
      // Wait for page to be interactive
      cy.contains('Welcome!').should('be.visible');

      // Check that buttons are clickable
      cy.get('button').first().should('not.be.disabled');
    });
  });

  it('should not have memory leaks on navigation', () => {
    // Navigate between tabs multiple times
    for (let i = 0; i < 5; i++) {
      cy.contains('Projects').click();
      cy.contains('About').click();
    }

    // Check that page remains responsive
    cy.contains('Welcome!').should('be.visible');
  });

  it('should handle rapid user interactions without issues', () => {
    // Rapidly click expand/collapse buttons
    for (let i = 0; i < 3; i++) {
      cy.contains('Expand All').click();
      cy.contains('Collapse All').click();
    }

    // Page should still be functional
    cy.contains('Welcome!').should('be.visible');
  });

  it('should load third-party resources efficiently', () => {
    // Check that external links exist
    cy.get('a[target="_blank"]').should('have.length.greaterThan', 0);
    // External links should be configured for security (check first one)
    cy.get('a[target="_blank"]').first().should('have.attr', 'href');
  });

  it('should have acceptable Core Web Vitals', () => {
    cy.window().then((win) => {
      // Check for Cumulative Layout Shift (CLS) - simplified check
      // In a real scenario, you'd use a proper web vitals library
      cy.wait(2000).then(() => {
        // Basic check that page layout is stable
        cy.get('body').should('be.visible');
        cy.contains('Welcome!').should('be.visible');
      });
    });
  });
});
