const { airbnbUnicornTypescriptNext } = require('./extends');
const env = require('./env');
const rules = require('./rules');
const parserOptions = require('./parser-options');
const overrides = require('./overrides');
const ignorePatterns = require('./ignore-patterns');

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: airbnbUnicornTypescriptNext,
  env,
  parserOptions,
  rules,
  overrides,
  ignorePatterns,
};
