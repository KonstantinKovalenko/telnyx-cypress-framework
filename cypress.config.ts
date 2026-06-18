import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    projectId: "55nqku",

    baseUrl: 'https://telnyx.com',

    viewportWidth: 1920,
    viewportHeight: 1080,

    defaultCommandTimeout: 8000,

    setupNodeEvents(on, config) {
      return config;
    }
  }
});