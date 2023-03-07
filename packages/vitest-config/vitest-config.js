const react = require('@vitejs/plugin-react-swc');

// https://vitejs.dev/config/
/** @type import('vitest/config').UserConfigExport */
module.exports = {
  plugins: [react()],
  test: {
    globals: true,
  },
};
