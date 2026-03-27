describe('Footer Component Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display footer with all required elements', () => {
    cy.get('.footer').should('be.visible');
    cy.get('.footer mat-toolbar').should('exist');
  });

  it('should display LinkedIn link with correct attributes', () => {
    cy.get('.footer a').first().should('have.attr', 'href', 'https://www.linkedin.com/in/daniel-teel-a6465017b');
    cy.get('.footer a').first().should('have.attr', 'target', '_blank');
    cy.get('.footer a').first().find('img').should('have.attr', 'src', 'assets/images/linkedin.svg');
  });

  it('should display GitHub link with correct attributes', () => {
    cy.get('.footer a').eq(1).should('have.attr', 'href', 'https://github.com/TheManOfTeel');
    cy.get('.footer a').eq(1).should('have.attr', 'target', '_blank');
    cy.get('.footer a').eq(1).find('img').should('have.attr', 'src', 'assets/images/github.svg');
  });

  it('should display scroll to top button', () => {
    cy.get('.footer button').should('be.visible');
    cy.get('.footer button').should('have.attr', 'type', 'button');
    cy.get('.footer button mat-icon').should('contain', 'arrow_upward');
  });

  it('should apply dark mode styling to footer images', () => {
    // Enable dark mode
    cy.get('button').contains('Dark Mode').click();

    cy.get('.footer img').each(($img) => {
      cy.wrap($img).should('have.class', 'dark-img');
    });

    // Disable dark mode
    cy.get('button').contains('Light Mode').click();

    cy.get('.footer img').each(($img) => {
      cy.wrap($img).should('not.have.class', 'dark-img');
    });
  });

  it('should have proper spacing and layout', () => {
    cy.get('.footer').should('have.css', 'position', 'relative');
    cy.get('.footer .divider').should('exist');
  });

  it('should be positioned at the bottom of the page', () => {
    cy.get('.footer').then(($footer) => {
      const footerTop = $footer.offset()?.top;
      cy.window().its('innerHeight').should('be.gte', footerTop);
    });
  });
});