const scenarios = require('./scenarios');
const base = require('./base');
const paths = require('./paths');

module.exports = {
  id: 'backstop_1400_size',
  viewports: [
    {
      label: '1400_size',
      width: 1400,
      height: 768,
    },
  ],
  scenarios,
  paths: paths('1400_size'),
  ...base,
};
