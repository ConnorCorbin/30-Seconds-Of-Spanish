const scenarios = require('./scenarios');
const base = require('./base');
const paths = require('./paths');

module.exports = {
  id: 'backstop_1020_size',
  viewports: [
    {
      label: '1020_size',
      width: 1020,
      height: 768,
    },
  ],
  scenarios,
  paths: paths('1020_size'),
  ...base,
};
