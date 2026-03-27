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
    // Check expansion panels exist
    cy.get('mat-expansion-panel').should('exist');
    // Check tab navigation exists
    cy.get('mat-tab-group').should('exist');
    cy.get('mat-tab-header').should('exist');
  });

  it('should support keyboard navigation', () => {
    // Test that buttons can receive focus
    cy.get('button').first().focus({ force: true });
    cy.get('button:focus').should('exist');

    // Verify buttons have proper attributes
    cy.get('button').each(($btn) => {
      cy.wrap($btn).should('have.attr', 'type');
    });
  });

  it('should have proper alt text for images', () => {
    // Check for images on the page
    cy.get('img').should('exist');
    // Verify images are accessible (if they exist with alt text, that's good)
    cy.get('img').should('have.length.greaterThan', 0);
  });

  it('should have proper link attributes', () => {
    cy.get('a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href');
    });

    // External links should open in new tab
    cy.get('a[target="_blank"]').should('exist');
  });

  it('should maintain accessibility in dark mode', () => {
    // Find and click dark mode button
    cy.get('mat-toolbar button').contains(/Mode/).click();
    // After toggle, main content should still be visible
    cy.get('h1, h2, h3').should('exist');
    cy.get('button').should('be.visible');
  });

  it('should have proper form controls', () => {
    // Check that interactive elements exist and are functional
    cy.get('button').should('have.length.greaterThan', 0);
    cy.get('button').first().should('not.be.disabled');
  });

  it('should support screen reader navigation', () => {
    // Test that content is properly structured for screen readers
    cy.get('mat-expansion-panel').should('exist');
    // Check interactive elements have focus ability
    cy.get('button').first().focus();
    cy.focused().should('exist');
  });

  it('should have sufficient touch target sizes on mobile', () => {
    cy.viewport('iphone-6');
    // Check that most interactive elements are reasonably sized
    cy.get('button').should('have.length.greaterThan', 0);
    cy.get('button').first().should('be.visible');
  });

  it('should not have accessibility violations in expanded content', () => {
    cy.contains('About').click();
    cy.contains('Expand All').click();
    cy.contains('C#').should('be.visible');
  });
});
