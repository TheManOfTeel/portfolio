import { AboutComponent } from '../src/app/components/about/about.component';
import { StateService } from '../src/app/services/state/state.service';
import { BreakpointObserver } from '@angular/cdk/layout';

describe('AboutComponent', () => {
  beforeEach(() => {
    cy.mount(AboutComponent, {
      providers: [
        StateService,
        BreakpointObserver
      ]
    });
  });

  it('should mount successfully', () => {
    cy.get('app-about').should('exist');
  });

  it('should display welcome header with image and text', () => {
    cy.get('.header').within(() => {
      cy.contains('Welcome!').should('be.visible');
      cy.contains('My name is Danny Teel and I am a full stack software engineer').should('be.visible');
      cy.get('.about-img-center img').should('be.visible');
    });
  });

  it('should display overview section with expand/collapse buttons', () => {
    cy.contains('Overview').should('be.visible');
    cy.contains('Expand All').should('be.visible');
    cy.contains('Collapse All').should('be.visible');
  });

  it('should display summary panel with experience calculation', () => {
    cy.contains('Summary').should('be.visible');
    cy.contains('Full Stack Software Engineer').should('be.visible');
    cy.contains('years of experience').should('be.visible');
  });

  it('should display technical skills panel with categories', () => {
    cy.contains('Technical Skills').should('be.visible');
    cy.contains('Languages:').should('be.visible');
    cy.contains('Frontend:').should('be.visible');
    cy.contains('Backend:').should('be.visible');
    cy.contains('Databases:').should('be.visible');
    cy.contains('Cloud:').should('be.visible');
    cy.contains('Tools:').should('be.visible');
    cy.contains('Architectural Patterns:').should('be.visible');
  });

  it('should display experience panel with company information', () => {
    cy.contains('Experience').should('be.visible');
    cy.contains('Rhyme').should('be.visible');
    cy.contains('StarTex Software').should('be.visible');
    cy.contains('Relativity').should('be.visible');
    cy.contains('Kunz, Leigh & Associates').should('be.visible');
  });

  it('should display education panel', () => {
    cy.contains('Education').should('be.visible');
    cy.contains('Bachelor of Science in Computer Science').should('be.visible');
    cy.contains('Oakland University').should('be.visible');
  });

  it('should expand and collapse accordion panels', () => {
    // Initially, summary should be expanded
    cy.contains('Full Stack Software Engineer').should('be.visible');

    // Click expand all
    cy.contains('Expand All').click();
    cy.contains('C#').should('be.visible'); // Skills should be visible
    cy.contains('Software Engineer').should('be.visible'); // Experience should be visible

    // Click collapse all
    cy.contains('Collapse All').click();
    // Panels should collapse (summary might stay expanded)
    cy.contains('C#').should('not.be.visible');
  });

  it('should handle mobile layout expand/collapse buttons', () => {
    // Mock mobile viewport
    cy.viewport('iphone-6');

    // Should show icon buttons instead of text buttons
    cy.get('button mat-icon').should('exist');
  });

  it('should display skills with proper formatting', () => {
    cy.contains('Expand All').click();

    // Check that skills are displayed as comma-separated lists
    cy.contains('C#, Java, JavaScript, TypeScript, SQL, Python').should('be.visible');
    cy.contains('Angular, React, Vue.js, HTML5, CSS3').should('be.visible');
  });

  it('should display experience with proper structure', () => {
    cy.contains('Expand All').click();

    // Check position titles and dates
    cy.contains('Software Engineer — July 2025 - Present').should('be.visible');
    cy.contains('Software Engineer — March 2024 - July 2025').should('be.visible');

    // Check that tasks are displayed as bullet points
    cy.get('mat-expansion-panel ul li').should('have.length.greaterThan', 0);
  });

  it('should apply dark mode styling to images', () => {
    // Mock dark mode
    cy.window().then((win) => {
      const stateService = win['ng'].getInjector(win.document.querySelector('app-about')).get(StateService);
      stateService.isDarkMode.set(true);
      cy.get('.about-img-center img').should('have.class', 'dark-img');
    });
  });

  it('should calculate years of experience correctly', () => {
    cy.contains('Expand All').click();
    // The summary should contain a number for years of experience
    cy.get('.accordion-content p').first().invoke('text').should('match', /\d+ years of experience/);
  });

  it('should have proper accessibility attributes', () => {
    cy.get('mat-expansion-panel').should('have.attr', 'role', 'region');
    cy.get('mat-expansion-panel-header').should('have.attr', 'aria-expanded');
  });
});
