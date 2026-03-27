describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have proper heading structure', () => {
    cy.get('h1, h2, h3, h4, h5, h6').should('exist');

    // Check heading hierarchy
    cy.get('h2').should('contain', 'Welcome!');
    cy.contains('Projects').click();
    cy.get('h2').should('contain', 'Notable Projects');
  });

  it('should have proper ARIA attributes', () => {
    // Check expansion panels have proper ARIA
    cy.get('mat-expansion-panel').each(($panel) => {
      cy.wrap($panel).should('have.attr', 'role', 'region');
    });

    // Check tab navigation
    cy.get('mat-tab-group').should('have.attr', 'role', 'tablist');
    cy.get('mat-tab').each(($tab) => {
      cy.wrap($tab).should('have.attr', 'role', 'tab');
    });
  });

  it('should support keyboard navigation', () => {
    // Test tab navigation through interactive elements
    cy.get('body').type('{tab}');
    cy.focused().should('exist');

    // Navigate through toolbar buttons
    cy.get('button').each(($btn) => {
      cy.wrap($btn).should('have.attr', 'type');
    });
  });

  it('should have proper alt text for images', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt');
    });
  });

  it('should have proper link attributes', () => {
    cy.get('a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href');
    });

    // External links should open in new tab
    cy.get('a[target="_blank"]').should('exist');
  });

  it('should maintain accessibility in dark mode', () => {
    cy.get('button').contains('Dark Mode').click();
    cy.get('h1, h2, h3').should('exist');
    cy.get('button').should('be.visible');
  });

  it('should have proper form controls', () => {
    // Check that all interactive elements have proper labeling
    cy.get('button').each(($btn) => {
      cy.wrap($btn).should('not.be.empty');
    });
  });

  it('should support screen reader navigation', () => {
    // Test that content is properly structured for screen readers
    cy.get('[aria-expanded]').should('exist');
    cy.get('[aria-label], [aria-labelledby]').should('exist');
  });

  it('should have sufficient touch target sizes on mobile', () => {
    cy.viewport('iphone-6');

    cy.get('button').each(($btn) => {
      cy.wrap($btn).invoke('outerHeight').should('be.gte', 44);
      cy.wrap($btn).invoke('outerWidth').should('be.gte', 44);
    });
  });

  it('should not have accessibility violations in expanded content', () => {
    cy.contains('About').click();
    cy.contains('Expand All').click();
    cy.contains('C#').should('be.visible');
  });
});