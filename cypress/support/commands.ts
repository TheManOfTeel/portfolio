// ***********************************************
// Custom Portfolio Commands
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      toggleDarkMode(): Chainable<void>;
      expandAllPanels(): Chainable<void>;
      collapseAllPanels(): Chainable<void>;
      switchToTab(tabName: string): Chainable<void>;
      checkPerformanceMetrics(): Chainable<void>;
      takeVisualSnapshot(name: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('toggleDarkMode', () => {
  cy.get('button').contains(/Mode/).click();
});

Cypress.Commands.add('expandAllPanels', () => {
  cy.get('button').contains('Expand All').click();
});

Cypress.Commands.add('collapseAllPanels', () => {
  cy.get('button').contains('Collapse All').click();
});

Cypress.Commands.add('switchToTab', (tabName: string) => {
  cy.contains(tabName).click();
});

Cypress.Commands.add('checkPerformanceMetrics', () => {
  cy.window().then((win) => {
    const perfData = win.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    cy.wrap({
      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
      loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
      totalTime: perfData.loadEventEnd - perfData.fetchStart
    }).as('performanceMetrics');
  });
});

Cypress.Commands.add('takeVisualSnapshot', (name: string) => {
  cy.screenshot(name);
});

export {};
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
