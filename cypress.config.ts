import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    projectId: "55nqku",

    specPattern: "cypress/e2e/desktop/**/*.cy.ts",

    baseUrl: 'https://telnyx.com',

    viewportWidth: 1920,
    viewportHeight: 1080,

    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      return config;
    }
  }
});