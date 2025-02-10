const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true,
    /*viewportWidth:1206,
    viewportHeight:2622,*/
    experimentalWebKitSupport:true,
    screenshotOnRunFailure:true,
    trashAssetsBeforeRuns:true,
    video:true,
    baseUrl:'https://example.cypress.io',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs:true,
    testIsolation:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
