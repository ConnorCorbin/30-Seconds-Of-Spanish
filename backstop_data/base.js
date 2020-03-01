module.exports = {
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  report: ['browser'],
  engine: 'puppeteer',
  engineFlags: [],
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 10,
  asyncCompareLimit: 100,
  debug: false,
  debugWindow: false,
};
