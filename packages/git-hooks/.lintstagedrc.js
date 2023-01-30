module.exports = {
  '*.{ts,tsx}': (files) => [
    `eslint --max-warnings=0 --fix --no-ignore ${files.join(' ')}`,
    `prettier -cw ${files.join(' ')}`,
    `jest --passWithNoTests --findRelatedTests --collectCoverageFrom=${files.join(' ')}`,
  ],
  '*.js': ['prettier -cw'],
  '*.yml': ['prettier -cw'],
};
