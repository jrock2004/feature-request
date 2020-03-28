'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [{ module: require('postcss-import') }, require('tailwindcss')('./app/utils/tailwind.js')],
      },
    },
  });

  return app.toTree();
};
