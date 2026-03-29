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
    // Click the dark mode button (may be labeled differently)
    cy.get('mat-toolbar button').contains(/Mode/).click();
    cy.wait(300); // Wait for theme transition
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
    cy.get('.footer-bar').screenshot('footer');
  });

  it('should capture toolbar visual snapshot', () => {
    cy.get('mat-toolbar').first().screenshot('toolbar');
  });
});
