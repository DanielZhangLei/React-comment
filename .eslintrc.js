module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error","always",{ "omitLastInOneLineBlock": true }],
    "no-console": ["off","always"],
    "no-constant-condition": "off",
    "no-unused-vars": "off",
  },
  "extends": ["eslint:recommended"]
};