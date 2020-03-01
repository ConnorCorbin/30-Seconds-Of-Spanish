module.exports = testName => ({
  bitmaps_reference: `backstop_data/bitmaps_reference_${testName}`,
  bitmaps_test: `backstop_data/bitmaps_test_${testName}`,
  engine_script: 'backstop_data/engine_scripts',
  html_report: `backstop_data/html_report_${testName}`,
  ci_report: 'backstop_data/ci_report',
});
