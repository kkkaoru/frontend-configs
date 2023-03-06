const offUnicornRules = require('./off-unicorn');
const offNextRules = require('./off-next');
const offImportRules = require('./off-import');
const offReactRules = require('./off-react');

const errorMaxLinesRules = require('./error-max-lines');
const errorNoParamReassignRule = require('./error-no-param-reassign');
const errorNoConsoleRule = require('./error-no-console');

/** @type import('eslint').Linter.RulesRecord */
module.exports = {
  // Off rules
  ...offUnicornRules,
  ...offNextRules,
  ...offImportRules,
  ...offReactRules,
  // Additional errors
  ...errorMaxLinesRules,
  ...errorNoParamReassignRule,
  ...errorNoConsoleRule,
};
