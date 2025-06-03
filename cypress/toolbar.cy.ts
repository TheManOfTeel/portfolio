import { ToolbarComponent } from '../src/app/components/toolbar/toolbar.component';

describe('ToolbarComponent', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-angular
    cy.mount(ToolbarComponent)
  })
})
