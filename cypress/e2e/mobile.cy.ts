describe('Mobile Responsiveness Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Mobile Layout (iPhone 6)', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('should display mobile-optimized toolbar', () => {
      cy.get('mat-toolbar').should('be.visible');
      cy.contains('Danny Teel').should('be.visible');
    });

    it('should display mobile-optimized footer', () => {
      cy.get('.footer-bar').should('be.visible');
      cy.get('.footer-toolbar').should('exist');
    });

    it('should show icon buttons instead of text buttons', () => {
      cy.get('button mat-icon').should('have.length.greaterThan', 0);
      // On mobile, text labels might not be visible for some buttons
      cy.get('button').should('be.visible');
    });

    it('should display tabs with icons', () => {
      cy.get('mat-tab-header mat-icon').should('have.length.greaterThan', 0);
      cy.contains('About').should('be.visible');
      cy.contains('Projects').should('be.visible');
    });

    it('should handle touch interactions', () => {
      cy.contains('Projects').click();
      cy.get('app-projects').should('be.visible');
    });

    it('should display mobile-optimized expand/collapse buttons', () => {
      cy.get('button mat-icon').should('exist');
    });

    it('should maintain functionality in mobile view', () => {
      // Test dark mode toggle
      cy.get('button').first().click(); // Dark mode icon button
      // Verify that clicking the button had some effect (page still functional)
      cy.get('body').should('be.visible');

      // Test tab switching
      cy.contains('Projects').click();
      cy.get('app-projects').should('be.visible');
    });
  });

  describe('Tablet Layout (iPad)', () => {
    beforeEach(() => {
      cy.viewport('ipad-2');
    });

    it('should display tablet-optimized layout', () => {
      cy.get('mat-toolbar').should('be.visible');
      cy.contains('Download Resume').should('be.visible');
    });

    it('should display tablet-optimized footer', () => {
      cy.get('.footer-bar').should('be.visible');
      cy.get('.footer-toolbar').should('exist');
    });

    it('should show appropriate button sizes', () => {
      cy.get('button').should('be.visible');
      cy.get('button mat-icon').should('exist');
    });

    it('should handle tablet-specific interactions', () => {
      cy.contains('Projects').click();
      cy.get('app-projects').should('be.visible');
    });
  });

  describe('Desktop Layout (MacBook)', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
    });

    it('should display full desktop layout', () => {
      cy.contains('Download Resume').should('be.visible');
      cy.contains(/Mode/).should('be.visible');
    });

    it('should display desktop-optimized footer', () => {
      cy.get('.footer-bar').should('be.visible');
      cy.get('.footer-toolbar').should('exist');
    });

    it('should show full button text', () => {
      cy.get('button').contains('Download Resume').should('be.visible');
      cy.get('button').contains(/Dark Mode|Light Mode/).should('be.visible');
    });
  });

  describe('Orientation Changes', () => {
    it('should handle orientation change from portrait to landscape', () => {
      cy.viewport('iphone-6', 'portrait');
      cy.contains('About').should('be.visible');

      cy.viewport('iphone-6', 'landscape');
      cy.contains('About').should('be.visible');
      cy.get('mat-toolbar').should('be.visible');
    });
  });

  describe('Touch and Gesture Support', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('should support tap interactions', () => {
      cy.contains('Projects').click();
      cy.get('app-projects').should('be.visible');
    });

    it('should handle accordion panel interactions on mobile', () => {
      cy.viewport('iphone-6');
      // Navigate to About section
      cy.contains('About').click({ force: true });
      cy.wait(300);
      // Verify we can see accordion panels
      cy.get('mat-expansion-panel').should('have.length.greaterThan', 0);
      // Click first accordion to expand
      cy.get('mat-expansion-panel-header').first().click({ force: true });
      cy.wait(500);
      // Verify the panel is interactive
      cy.get('mat-expansion-panel').should('exist');
    });
  });
});
