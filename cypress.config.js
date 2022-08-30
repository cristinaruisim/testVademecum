const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth	: 1080,
  defaultCommandTimeout: 40000,

  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
