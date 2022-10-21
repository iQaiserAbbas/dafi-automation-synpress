const { defineConfig } = require("cypress");
const readXlsx = require('./read-xlsx.js');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        'readXlsx': readXlsx.read
      })
      watchForFileChanges: false
    },
  },
});
