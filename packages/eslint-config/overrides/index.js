const tsxOverrides = require('./tsx');
const storiesTsxOverrides = require('./stories-tsx');
const sliceTsOverrides = require('./slice-ts');
const testTsxTsOverrides = require('./test-ts-tsx');
const pageTsxOverrides = require('./page-tsx');

/** @type import('eslint').Linter.ConfigOverride[] */
module.exports = [tsxOverrides, storiesTsxOverrides, testTsxTsOverrides, sliceTsOverrides, pageTsxOverrides];
