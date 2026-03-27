describe('Portfolio Application E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Initial Page Load', () => {
    it('should load the application successfully', () => {
      cy.url().should('include', '/');
      cy.get('app-root').should('exist');
      cy.get('main').should('exist');
    });

    it('should display the toolbar with proper branding', () => {
      cy.get('mat-toolbar').should('be.visible');
      cy.contains('Danny Teel').should('be.visible');
      cy.get('mat-toolbar img').should('be.visible');
    });

    it('should show About tab by default', () => {
      cy.get('mat-tab').first().should('have.class', 'mat-tab-active');
      cy.contains('Welcome!').should('be.visible');
    });

    it('should display footer with social links', () => {
      cy.get('.footer').should('be.visible');
      cy.get('.footer [href*="linkedin"]').should('exist');
      cy.get('.footer [href*="github"]').should('exist');
    });
  });

  describe('Navigation and Tabs', () => {
    it('should switch between About and Projects tabs', () => {
      // Start on About
      cy.contains('About').should('be.visible');
      cy.get('app-about').should('be.visible');

      // Switch to Projects
      cy.contains('Projects').click();
      cy.get('app-about').should('not.be.visible');
      cy.get('app-projects').should('be.visible');
      cy.contains('Notable Projects').should('be.visible');

      // Switch back to About
      cy.contains('About').click();
      cy.get('app-projects').should('not.be.visible');
      cy.get('app-about').should('be.visible');
    });

    it('should maintain tab state on page refresh', () => {
      // Switch to Projects tab
      cy.contains('Projects').click();
      cy.get('app-projects').should('be.visible');

      // Refresh page
      cy.reload();

      // Should still be on Projects tab
      cy.get('app-projects').should('be.visible');
    });
  });

  describe('Dark Mode Functionality', () => {
    it('should toggle dark mode correctly', () => {
      // Check initial state
      cy.get('body').then(($body) => {
        const hasDarkTheme = $body.hasClass('dark-theme');

        if (hasDarkTheme) {
          // Currently in dark mode
          cy.get('button').contains('Light Mode').click();
          cy.get('body').should('not.have.class', 'dark-theme');
          cy.get('button').contains('Dark Mode').should('be.visible');
        } else {
          // Currently in light mode
          cy.get('button').contains('Dark Mode').click();
          cy.get('body').should('have.class', 'dark-theme');
          cy.get('button').contains('Light Mode').should('be.visible');
        }
      });
    });

    it('should apply dark mode styling to images', () => {
      cy.get('button').contains('Dark Mode').click();
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.class', 'dark-img');
      });

      cy.get('button').contains('Light Mode').click();
      cy.get('img').each(($img) => {
        cy.wrap($img).should('not.have.class', 'dark-img');
      });
    });

    it('should persist dark mode preference', () => {
      cy.get('button').contains('Dark Mode').click();
      cy.get('body').should('have.class', 'dark-theme');

      // Refresh page
      cy.reload();

      // Should maintain dark mode (if browser supports it)
      cy.get('body').should('have.class', 'dark-theme');
    });
  });

  describe('About Section Functionality', () => {
    beforeEach(() => {
      cy.contains('About').click();
    });

    it('should display all required sections', () => {
      cy.contains('Welcome!').should('be.visible');
      cy.contains('Overview').should('be.visible');
      cy.contains('Summary').should('be.visible');
      cy.contains('Technical Skills').should('be.visible');
      cy.contains('Experience').should('be.visible');
      cy.contains('Education').should('be.visible');
    });

    it('should expand and collapse accordion panels', () => {
      // Test expand all
      cy.contains('Expand All').click();
      cy.contains('C#').should('be.visible');
      cy.contains('Rhyme').should('be.visible');

      // Test collapse all
      cy.contains('Collapse All').click();
      // Summary should remain expanded, others collapsed
      cy.contains('Full Stack Software Engineer').should('be.visible');
    });

    it('should display skills correctly', () => {
      cy.contains('Expand All').click();
      cy.contains('Languages: C#, Java, JavaScript, TypeScript, SQL, Python').should('be.visible');
      cy.contains('Frontend: Angular, React, Vue.js, HTML5, CSS3').should('be.visible');
    });

    it('should display experience with proper formatting', () => {
      cy.contains('Expand All').click();
      cy.contains('Software Engineer — July 2025 - Present').should('be.visible');
      cy.get('mat-expansion-panel ul li').should('have.length.greaterThan', 0);
    });

    it('should display education information', () => {
      cy.contains('Expand All').click();
      cy.contains('Bachelor of Science in Computer Science').should('be.visible');
      cy.contains('Oakland University').should('be.visible');
    });
  });

  describe('Projects Section Functionality', () => {
    beforeEach(() => {
      cy.contains('Projects').click();
    });

    it('should display projects header and description', () => {
      cy.contains('Notable Projects').should('be.visible');
      cy.contains('Below are notable projects').should('be.visible');
    });

    it('should display project panels', () => {
      cy.get('mat-expansion-panel').should('have.length.greaterThan', 0);
      cy.contains('Rhyme').should('be.visible');
    });

    it('should expand and collapse project panels', () => {
      cy.contains('Expand All').click();
      cy.contains('Portfolio').should('be.visible');
      cy.contains('EHS Insight').should('be.visible');

      cy.contains('Collapse All').click();
      // First panel should remain expanded
      cy.contains('Rhyme').should('be.visible');
    });

    it('should display project images', () => {
      cy.get('mat-expansion-panel img').should('exist');
      cy.get('mat-expansion-panel img').first().should('be.visible');
    });

    it('should have working repository links', () => {
      cy.contains('Expand All').click();
      cy.contains('Check it out!').should('have.attr', 'target', '_blank');
    });

    it('should display project status indicators', () => {
      cy.contains('Active').should('be.visible');
      cy.contains('Enterprise').should('be.visible');
    });
  });

  describe('Footer Functionality', () => {
    it('should display footer with proper links', () => {
      cy.get('.footer').should('be.visible');
      cy.get('.footer a').should('have.length', 2);
    });

    it('should have working LinkedIn link', () => {
      cy.get('.footer [href*="linkedin"]').should('have.attr', 'target', '_blank');
      cy.get('.footer [href*="linkedin"]').should('have.attr', 'href', 'https://www.linkedin.com/in/daniel-teel-a6465017b');
    });

    it('should have working GitHub link', () => {
      cy.get('.footer [href*="github"]').should('have.attr', 'target', '_blank');
      cy.get('.footer [href*="github"]').should('have.attr', 'href', 'https://github.com/TheManOfTeel');
    });

    it('should have scroll to top button', () => {
      cy.get('.footer button').should('exist');
      cy.get('.footer button mat-icon').should('contain', 'arrow_upward');
    });
  });

  describe('Responsive Design', () => {
    it('should work on mobile viewport', () => {
      cy.viewport('iphone-6');

      // Should show mobile-specific buttons
      cy.get('button mat-icon').should('exist');

      // Navigation should still work
      cy.contains('Projects').click();
      cy.get('app-projects').should('be.visible');
    });

    it('should work on tablet viewport', () => {
      cy.viewport('ipad-2');

      // Should show appropriate button layout
      cy.get('button').should('exist');
      cy.contains('About').should('be.visible');
      cy.contains('Projects').should('be.visible');
    });

    it('should work on desktop viewport', () => {
      cy.viewport('macbook-15');

      // Should show full button text
      cy.contains('Download Resume').should('be.visible');
      cy.contains(/Mode/).should('be.visible');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading structure', () => {
      cy.get('h1, h2, h3').should('exist');
      cy.get('h2').contains('Welcome!').should('exist');
      cy.get('h2').contains('Notable Projects').should('exist');
    });

    it('should have proper ARIA attributes', () => {
      cy.get('[role]').should('exist');
      cy.get('mat-expansion-panel').should('have.attr', 'role', 'region');
    });

    it('should support keyboard navigation', () => {
      cy.get('button').first().focus();
      cy.get('body').type('{tab}');
      cy.focused().should('exist');
    });
  });

  describe('Performance', () => {
    it('should load within acceptable time', () => {
      cy.visit('/', { timeout: 10000 });
      cy.contains('Welcome!').should('be.visible');
    });

    it('should not have console errors', () => {
      cy.window().then((win) => {
        cy.spy(win.console, 'error');
        cy.contains('Welcome!').should('be.visible');
        cy.window().its('console.error').should('not.be.called');
      });
    });
  });

  describe('Download Resume Functionality', () => {
    it('should trigger resume download', () => {
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen');
      });

      cy.contains('Download Resume').click();
      cy.get('@windowOpen').should('be.calledWith', 'assets/cv/Resume.pdf', '_blank');
    });
  });
});
