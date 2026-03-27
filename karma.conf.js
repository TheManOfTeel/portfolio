module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],  // or mocha/qunit
    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: 'test-results',         // relative to basePath
      outputFile: 'test-results.xml',
      useBrowserName: false,             // prevents browser name prefix in suite names
      classNameFormatter: undefined,     // default: suite.className
      titleFormatter: undefined,
    },

    singleRun: true,
    browsers: ['ChromeHeadless'],

    // Edge case: if using custom launchers for CI
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
      },
    },
  });
};
