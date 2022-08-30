const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth	: 1030,
  defaultCommandTimeout: 15000,

  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
