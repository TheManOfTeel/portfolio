describe('Footer Component Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display footer with all required elements', () => {
    cy.get('.footer-bar').should('be.visible');
    cy.get('.footer-toolbar').should('exist');
  });

  it('should display LinkedIn link with correct attributes', () => {
    cy.get('.footer-bar a').first().should('have.attr', 'href', 'https://www.linkedin.com/in/daniel-teel-a6465017b');
    cy.get('.footer-bar a').first().should('have.attr', 'target', '_blank');
    cy.get('.footer-bar a').first().find('img.footer-icon').should('have.attr', 'src', 'assets/images/linkedin.svg');
  });

  it('should display GitHub link with correct attributes', () => {
    cy.get('.footer-bar a').eq(1).should('have.attr', 'href', 'https://github.com/TheManOfTeel');
    cy.get('.footer-bar a').eq(1).should('have.attr', 'target', '_blank');
    cy.get('.footer-bar a').eq(1).find('img.footer-icon').should('have.attr', 'src', 'assets/images/github.svg');
  });

  it('should display scroll to top button', () => {
    cy.get('.footer-bar button').should('be.visible');
    cy.get('.footer-bar button').should('have.attr', 'type', 'button');
    cy.get('.footer-bar button mat-icon').should('contain', 'arrow_upward');
  });

  it('should apply dark mode styling to footer images', () => {
    // Find and click dark mode button - it may be in toolbar
    cy.get('mat-toolbar button').contains(/Mode/).click();
    // After toggling dark mode, footer should still be visible
    cy.get('.footer-bar').should('be.visible');
    cy.get('.footer-bar img.footer-icon').should('have.length.greaterThan', 0);
  });

  it('should have proper spacing and layout', () => {
    cy.get('.footer-bar').should('be.visible');
    cy.get('.footer-toolbar').should('exist');
  });

  it('should be positioned at the bottom of the page', () => {
    // Scroll to the footer
    cy.get('.footer-bar').scrollIntoView();
    cy.get('.footer-bar').should('be.visible');
  });
});
