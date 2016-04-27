var path = require('path');

module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  // @focus is recommended to use. @dev and @watch are deprecated.
  watchTags: '@focus,@dev,@watch',
  watchWithPolling: false,
  criticalSteps: null,
  criticalTag: '@critical',
  server: false,
  serverPort: 8060,
  serverHost: 'localhost',
  sync: true,
  offline: false,

  // - - - - CUCUMBER - - - -
  path: './tests/features',
  format: 'pretty',
  tags: '~@ignore',
  singleSnippetPerFile: true,
  recommendedFilenameSeparator: '_',
  chai: false,
  screenshotsOnError: true,
  screenshotsPath: './tests/.screenshots',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,
  // Note: With a large viewport size and captureAllStepScreenshots enabled,
  // you may run out of memory. Use browser.setViewportSize to make the
  // viewport size smaller.
  saveScreenshotsToReport: false,
  jsonOutput: './tests/output/data/results.json',
  compiler: 'js:' + path.resolve(__dirname, 'node_modules/chimp/dist/lib/babel-register.js'),

  // - - - - SELENIUM  - - - -
  browser: 'chrome',
  platform: 'ANY',
  name: '',
  user: '',
  key: '',
  port: null,
  host: null,
  // deviceName: null,

  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
    desiredCapabilities: {},
    logLevel: 'silent',
    // logOutput: null,
    host: '127.0.0.1',
    port: 4444,
    path: '/wd/hub',
    baseUrl: null,
    coloredLogs: true,
    screenshotPath: null,
    waitforTimeout: 500,
    waitforInterval: 250,
  },

  // - - - - SESSION-MANAGER  - - - -
  noSessionReuse: false,

  // - - - - SIMIAN  - - - -
  simianResultEndPoint: 'api.simian.io/v1.0/result',
  simianAccessToken: false,
  simianResultBranch: null,
  simianRepositoryId: null,

  // - - - - MOCHA  - - - -
  mocha: false,
  // 'path: './tests',
  mochaTimeout: 60000,
  mochaReporter: 'spec',
  mochaSlow: 10000,

  // - - - - JASMINE  - - - -
  jasmine: false,
  jasmineConfig: {
    specDir: '.',
    specFiles: [
      '**/*@(_spec|-spec|Spec).@(js|jsx)',
    ],
    helpers: [
      'support/**/*.@(js|jsx)',
    ],
    stopSpecOnExpectationFailure: false,
    random: false,
  },
  jasmineReporterConfig: {
    // This options are passed to jasmine.configureDefaultReporter(...)
    // See: http://jasmine.github.io/2.4/node.html#section-Reporters
  },

  // - - - - METEOR  - - - -
  ddp: false,

  // - - - - PHANTOM  - - - -
  phantom_w: 1280,
  phantom_h: 1024,

  // - - - - DEBUGGING  - - - -
  log: 'info',
  debug: false,
  seleniumDebug: null,
  debugCucumber: null,
  debugBrkCucumber: null,
  debugMocha: null,
  debugBrkMocha: null,
};