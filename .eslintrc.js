module.exports = {
  env: {
    browser: true,
    es2020: true,
    jasmine: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:cypress/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'cypress',
    'jasmine',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
};
