const { execSync } = require('child_process');

/**
 * @returns {string[]} package names
 */
module.exports = ()=>{
  const pnpmListResult = JSON.parse(execSync('pnpm list --recursive --depth -1 --json').toString('utf8'));
  const packageNames = pnpmListResult
    .filter((packages) => {
      return packages.name.includes('@kkkaoru');
    })
    .map((package) => package.name);
  return packageNames;
}
