import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.ts'
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: 'cypress/**/*.cy.ts'
  }

})
