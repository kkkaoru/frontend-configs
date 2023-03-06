/** @type import('eslint').Linter.ConfigOverride */
module.exports = {
  files: ['**/*.test.tsx', '**/*.test.ts'],
  rules: {
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'max-lines': 'off',
    'max-depth': 'off',
    'max-lines-per-function': 'off',
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    '@typescript-eslint/no-unsafe-return': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
