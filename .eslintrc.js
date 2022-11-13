'use strict';

module.exports = {
  extends: 'eslint-config-egg',
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'no-useless-constructor': 'off',
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
    'arrow-parens': [ 'warn', 'always' ],
    'prefer-promise-reject-errors': 'off',
  },
};
