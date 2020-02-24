module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "jest",
    "security",
  ],
  "extends": [
    "airbnb",
    "plugin:jest/recommended",
    "plugin:security/recommended",
  ],
  "rules": {
    "consistent-return": "off",
    "comma-dangle": "error",
    "arrow-parens": "off",
    "curly": "off",
    "import/no-extraneous-dependencies": [ "error", { "devDependencies": true } ],
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": ["off"],
    "react/state-in-constructor": ["off"],
    'import/first': 0,
    'import/order': ['error', { 'newlines-between': 'always-and-inside-groups' }],
    "security/detect-object-injection": "off",
    "react/destructuring-assignment": ["off"],
    "react/no-array-index-key": "off",
  },
  "env": {
    "jest/globals": true,
    "browser": true,
  },
  "globals": {
    "shallow": true,
    "mount": true,
    "window": true,
    "Event": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    },
  },
}
