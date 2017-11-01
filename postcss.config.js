const easyImport = require('postcss-easy-import')({ prefix: '_' });
const autoPrefixer = require('autoprefixer')({});

module.exports = {
  plugins: [
    easyImport,
    autoPrefixer,
  ],
};
