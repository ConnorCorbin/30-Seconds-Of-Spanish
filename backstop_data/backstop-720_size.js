const scenarios = require('./scenarios');
const base = require('./base');
const paths = require('./paths');

module.exports = {
  id: 'backstop_720_size',
  viewports: [
    {
      label: '720_size',
      width: 720,
      height: 768,
    },
  ],
  scenarios,
  paths: paths('720_size'),
  ...base,
};
