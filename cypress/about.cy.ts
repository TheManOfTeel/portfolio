import { AboutComponent } from '../src/app/components/about/about.component';

describe('AboutComponent', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-angular
    cy.mount(AboutComponent)
  })
})
