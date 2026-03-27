import { ProjectsComponent } from '../src/app/components/projects/projects.component';
import { StateService } from '../src/app/services/state/state.service';
import { BreakpointObserver } from '@angular/cdk/layout';

describe('ProjectsComponent', () => {
  beforeEach(() => {
    cy.mount(ProjectsComponent, {
      providers: [
        StateService,
        BreakpointObserver
      ]
    });
  });

  it('should mount successfully', () => {
    cy.get('app-projects').should('exist');
  });

  it('should display projects header with description', () => {
    cy.contains('Notable Projects').should('be.visible');
    cy.contains('Below are notable projects that I have worked on').should('be.visible');
    cy.get('.header img').should('be.visible');
  });

  it('should display projects section with expand/collapse buttons', () => {
    cy.contains('Projects').should('be.visible');
    cy.contains('Expand All').should('be.visible');
    cy.contains('Collapse All').should('be.visible');
  });

  it('should display project panels with proper headers', () => {
    // Check that first project is expanded by default
    cy.contains('Rhyme').should('be.visible');
    cy.contains('Active').should('be.visible');
    cy.contains('Enterprise').should('be.visible');
  });

  it('should show project details when expanded', () => {
    cy.contains('Rhyme').should('be.visible');
    cy.contains('prior authorization application').should('be.visible');
    cy.contains('July 2025 - Present').should('be.visible');
  });

  it('should display project images when available', () => {
    cy.get('mat-expansion-panel img').should('exist');
    cy.get('mat-expansion-panel img').first().should('have.attr', 'src').and('include', 'rhyme');
  });

  it('should display repository links for projects with repositories', () => {
    cy.contains('Expand All').click();
    cy.contains('Check it out!').should('be.visible');
  });

  it('should open repository links in new tab', () => {
    cy.contains('Expand All').click();
    cy.contains('Check it out!').should('have.attr', 'target', '_blank');
  });

  it('should expand and collapse all panels', () => {
    // Initially first panel should be expanded
    cy.contains('Rhyme').should('be.visible');

    // Click expand all
    cy.contains('Expand All').click();
    cy.contains('Portfolio').should('be.visible');
    cy.contains('EHS Insight').should('be.visible');

    // Click collapse all
    cy.contains('Collapse All').click();
    // First panel should still be expanded, others collapsed
    cy.contains('Rhyme').should('be.visible');
    cy.contains('Portfolio').should('not.be.visible');
  });

  it('should display different project types correctly', () => {
    cy.contains('Expand All').click();

    // Check for enterprise projects
    cy.contains('Enterprise').should('be.visible');

    // Check for personal projects
    cy.contains('Personal').should('be.visible');
  });

  it('should display project status indicators', () => {
    cy.contains('Expand All').click();

    // Check for active projects
    cy.contains('Active').should('be.visible');

    // Check for inactive projects
    cy.contains('Prior Position').should('be.visible');
  });

  it('should handle mobile layout expand/collapse buttons', () => {
    cy.viewport('iphone-6');

    // Should show icon buttons instead of text buttons
    cy.get('button mat-icon').should('exist');
  });

  it('should apply dark mode styling to images', () => {
    // Mock dark mode
    cy.window().then((win) => {
      const stateService = win['ng'].getInjector(win.document.querySelector('app-projects')).get(StateService);
      stateService.isDarkMode = true;
      cy.get('.header img').should('have.class', 'dark-img');
    });
  });

  it('should display project descriptions with proper formatting', () => {
    cy.contains('Expand All').click();

    // Check that descriptions are displayed
    cy.contains('Engineered a single-page application').should('be.visible');
    cy.contains('Developed scalable .NET Core APIs').should('be.visible');
  });

  it('should have proper accessibility attributes', () => {
    cy.get('mat-expansion-panel').should('have.attr', 'role', 'region');
    cy.get('mat-expansion-panel-header').should('have.attr', 'aria-expanded');
  });

  it('should display project timeline information', () => {
    cy.contains('Active: July 2025 - Present').should('be.visible');
  });

  it('should handle projects without images', () => {
    cy.contains('Expand All').click();

    // Some projects don't have images
    cy.get('mat-expansion-panel').should('have.length.greaterThan', 5);
  });

  it('should display subtext for enterprise projects', () => {
    cy.contains('Enterprise application developed while at Rhyme').should('be.visible');
  });
});
