const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1600,
        viewportHeight: 1400,
        specPattern: "**/*.spec.js",
        reporter: "cypress-multi-reporters",

        reporterOptions: {
            configFile: "cypress/reporter-config.json",
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
