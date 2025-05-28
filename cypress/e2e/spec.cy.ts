describe('Navigation Test', () => {
  it('Visits the initial project page and navigates', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('About')
    cy.contains('Projects')

    cy.get('button').contains('Mode').then(($btn) => {
      if ($btn.text() === 'Dark Mode') {
        cy.get('.header > img').should('not.have.class', 'dark-img')
        cy.get('button').contains('Dark Mode').click()
        cy.get('body').should('have.class', 'dark-theme')
        cy.get('.header > img').should('have.class', 'dark-img')
        cy.get('button').contains('Light Mode').click()
        cy.get('body').should('not.have.class', 'dark-theme')
        cy.get('.header > img').should('not.have.class', 'dark-img')
      }
    else{
        cy.get('.header > img').should('have.class', 'dark-img')
        cy.get('button').contains('Light Mode').click()
        cy.get('body').should('not.have.class', 'dark-theme')
        cy.get('.header > img').should('not.have.class', 'dark-img')
        cy.get('button').contains('Dark Mode').click()
        cy.get('body').should('have.class', 'dark-theme')
        cy.get('.header > img').should('have.class', 'dark-img')
      }
    })

    cy.get('button').contains('Download Resume').should('exist')

    cy.get('mat-toolbar').should('exist')
    cy.get('app-about').invoke('height').should('gte', 700)
    cy.get('button').contains('Expand All').click()
    cy.get('app-about').invoke('height').should('gte', 1300)
    cy.get('button').contains('Collapse All').click()
    cy.get('app-about').invoke('height').should('lte', 1300)

    cy.get('mat-tab-header').contains('Projects').click()
    cy.get('app-projects').invoke('height').should('gte', 1000)
    cy.get('button').contains('Expand All').click()
    cy.get('app-projects').invoke('height').should('gte', 1500)
    cy.get('button').contains('Collapse All').click()
    cy.get('app-projects').invoke('height').should('lte', 1000)

    cy.get('*[class^="footer"]').should('exist')
    cy.get('[href="https://www.linkedin.com/in/daniel-teel-a6465017b"]').should('exist').should('have.attr', 'target', '_blank')
    cy.get('[href="https://github.com/TheManOfTeel"]').should('exist').should('have.attr', 'target', '_blank')
    cy.get('[href="#"]').should('exist')
  })
})
