import { ToolbarComponent } from '../src/app/components/toolbar/toolbar.component';
import { StateService } from '../src/app/services/state/state.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AboutComponent } from '../src/app/components/about/about.component';
import { ProjectsComponent } from '../src/app/components/projects/projects.component';

describe('ToolbarComponent', () => {
  beforeEach(() => {
    cy.mount(ToolbarComponent, {
      declarations: [AboutComponent, ProjectsComponent],
      providers: [
        StateService,
        BreakpointObserver
      ]
    });
  });

  it('should mount successfully', () => {
    cy.get('app-toolbar').should('exist');
  });

  it('should display toolbar with logo and name', () => {
    cy.get('mat-toolbar').should('exist');
    cy.get('mat-toolbar img').should('be.visible');
    cy.contains('Danny Teel').should('be.visible');
  });

  it('should display dark mode toggle button', () => {
    cy.get('button').contains(/Mode/).should('exist');
  });

  it('should display download resume button', () => {
    cy.contains('Download Resume').should('be.visible');
  });

  it('should display tab navigation', () => {
    cy.get('mat-tab-group').should('exist');
    cy.get('mat-tab').should('have.length', 2);
    cy.contains('About').should('be.visible');
    cy.contains('Projects').should('be.visible');
  });

  it('should show About tab by default', () => {
    cy.get('app-about').should('be.visible');
    cy.get('app-projects').should('not.be.visible');
  });

  it('should switch to Projects tab when clicked', () => {
    cy.contains('Projects').click();
    cy.get('app-about').should('not.be.visible');
    cy.get('app-projects').should('be.visible');
  });

  it('should switch back to About tab when clicked', () => {
    cy.contains('Projects').click();
    cy.contains('About').click();
    cy.get('app-about').should('be.visible');
    cy.get('app-projects').should('not.be.visible');
  });

  it('should toggle dark mode', () => {
    // Get initial state
    cy.get('button').contains(/Mode/).then(($btn) => {
      const initialMode = $btn.text();

      if (initialMode.includes('Dark')) {
        cy.get('button').contains('Dark Mode').click();
        cy.get('body').should('have.class', 'dark-theme');
        cy.get('button').contains('Light Mode').should('be.visible');
      } else {
        cy.get('button').contains('Light Mode').click();
        cy.get('body').should('not.have.class', 'dark-theme');
        cy.get('button').contains('Dark Mode').should('be.visible');
      }
    });
  });

  it('should apply dark mode styling to toolbar image', () => {
    cy.get('button').contains(/Dark Mode/).click();
    cy.get('mat-toolbar img').should('have.class', 'dark-img');

    cy.get('button').contains('Light Mode').click();
    cy.get('mat-toolbar img').should('not.have.class', 'dark-img');
  });

  it('should handle mobile layout', () => {
    cy.viewport('iphone-6');

    // Should show icon buttons instead of text buttons
    cy.get('button mat-icon').should('have.length.greaterThan', 0);
  });

  it('should download resume when button is clicked', () => {
    // Mock window.open
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    cy.contains('Download Resume').click();
    cy.get('@windowOpen').should('be.calledWith', 'assets/cv/Resume.pdf', '_blank');
  });

  it('should display tab icons', () => {
    cy.get('mat-tab mat-icon').should('have.length', 2);
    cy.get('mat-tab mat-icon').first().should('contain', 'info');
    cy.get('mat-tab mat-icon').last().should('contain', 'work');
  });

  it('should maintain tab state when switching', () => {
    // Switch to projects
    cy.contains('Projects').click();
    cy.get('app-projects').should('be.visible');

    // Switch back to about
    cy.contains('About').click();
    cy.get('app-about').should('be.visible');

    // Switch to projects again
    cy.contains('Projects').click();
    cy.get('app-projects').should('be.visible');
  });

  it('should have proper accessibility attributes', () => {
    cy.get('mat-tab-group').should('have.attr', 'role', 'tablist');
    cy.get('mat-tab').should('have.attr', 'role', 'tab');
  });

  it('should display proper button styling', () => {
    cy.get('button').should('have.attr', 'mat-stroked-button');
    cy.get('button').should('have.attr', 'color', 'primary');
  });

  it('should handle keyboard navigation', () => {
    // Tab navigation should work
    cy.get('mat-tab-group').focus();
    cy.get('body').type('{tab}');
    cy.get('mat-tab').first().should('have.focus');
  });
});
