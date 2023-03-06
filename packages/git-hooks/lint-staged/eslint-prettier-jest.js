const { prettierCheckWrite } = require('./commands/prettier');
const { eslintFix } = require('./commands/eslint');
const checkJest = require('./commands/jest');

module.exports = {
  '*.{ts,tsx}': (files) => [
    `${eslintFix} ${files.join(' ')}`,
    `${prettierCheckWrite} ${files.join(' ')}`,
    `${checkJest}${files.join(' ')}`,
  ],
  '*.js': [prettierCheckWrite],
  '*.yml': [prettierCheckWrite],
};
