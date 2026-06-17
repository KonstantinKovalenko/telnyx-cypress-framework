import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com',

    viewportWidth: 375,
    viewportHeight: 812,

    setupNodeEvents(on, config) {
      return config;
    }
  }
});