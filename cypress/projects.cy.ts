import { ProjectsComponent } from '../src/app/components/projects/projects.component';

describe('ProjectsComponent', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-angular
    cy.mount(ProjectsComponent)
  })
})
