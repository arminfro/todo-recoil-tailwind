module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    "jsxPragma": null
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    // https://github.com/typescript-eslint/typescript-eslint/issues/363
    "@typescript-eslint/no-unused-vars": "off",
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "no-unused-vars": "off",
    'no-debugger': 'warn', // instead of default error
    'indent': ['warn', 2] // instead of default 4
  }
};
