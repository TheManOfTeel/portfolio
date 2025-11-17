import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout:10000,

  e2e: {
    'baseUrl': 'http://localhost:4200',
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
