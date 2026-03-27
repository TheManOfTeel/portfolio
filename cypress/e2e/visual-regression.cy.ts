describe('Visual Regression Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should capture homepage visual snapshot', () => {
    cy.screenshot('homepage-initial');
  });

  it('should capture About section visual snapshot', () => {
    cy.contains('About').click();
    cy.screenshot('about-section');
  });

  it('should capture Projects section visual snapshot', () => {
    cy.contains('Projects').click();
    cy.screenshot('projects-section');
  });

  it('should capture expanded About section', () => {
    cy.contains('About').click();
    cy.contains('Expand All').click();
    cy.wait(500); // Wait for animations
    cy.screenshot('about-expanded');
  });

  it('should capture expanded Projects section', () => {
    cy.contains('Projects').click();
    cy.contains('Expand All').click();
    cy.wait(500); // Wait for animations
    cy.screenshot('projects-expanded');
  });

  it('should capture dark mode visual snapshot', () => {
    cy.get('button').contains('Dark Mode').click();
    cy.screenshot('dark-mode');
  });

  it('should capture mobile layout', () => {
    cy.viewport('iphone-6');
    cy.screenshot('mobile-layout');
  });

  it('should capture tablet layout', () => {
    cy.viewport('ipad-2');
    cy.screenshot('tablet-layout');
  });

  it('should capture desktop layout', () => {
    cy.viewport('macbook-15');
    cy.screenshot('desktop-layout');
  });

  it('should capture footer visual snapshot', () => {
    cy.get('.footer').screenshot('footer');
  });

  it('should capture toolbar visual snapshot', () => {
    cy.get('mat-toolbar').screenshot('toolbar');
  });
});