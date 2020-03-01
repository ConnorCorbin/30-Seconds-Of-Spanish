const scenarios = require('./scenarios');
const base = require('./base');
const paths = require('./paths');

module.exports = {
  id: 'backstop_320_size',
  viewports: [
    {
      label: '320_size',
      width: 320,
      height: 768,
    },
  ],
  scenarios,
  paths: paths('320_size'),
  ...base,
};
