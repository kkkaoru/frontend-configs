const lintStaged = require('./.lintstagedrc');
const commitLint = require('./commitlint.config');
const findPackageNames = require('./find-package-names')

module.exports = {
  lintStaged,
  commitLint,
  findPackageNames,
};
