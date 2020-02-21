module.exports = {
  "plugins": [
    "jest",
    "security",
  ],
  "extends": [
    "react-app",
    "airbnb",
    "plugin:jest/recommended",
    "plugin:security/recommended",
  ],
  "rules": {
    "import/no-extraneous-dependencies": [ "error", { "devDependencies": true } ],
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": ["off"],
  },
  "globals": {
    "shallow": true,
    "mount": true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    },
  },
}
