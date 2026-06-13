import { defineConfig } from 'cypress';

export default defineConfig({
  retries: 2,

  video: false,

  e2e: {
    baseUrl: 'https://telnyx.com',

    viewportWidth: 1280,
    viewportHeight: 1024,

    setupNodeEvents(on, config) {
      return config;
    }
  }
});