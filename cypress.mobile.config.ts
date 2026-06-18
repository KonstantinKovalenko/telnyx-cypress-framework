import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    projectId: "55nqku",

    specPattern: "cypress/e2e/mobile/**/*.cy.ts",

    baseUrl: 'https://telnyx.com',

    viewportWidth: 375,
    viewportHeight: 812,

    defaultCommandTimeout: 8000,

    setupNodeEvents(on, config) {
      return config;
    }
  }
});