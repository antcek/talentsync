const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  css: {
    loaderOptions: {
      css: "./src/styles/custom-fonts.css",
    },
  },
};
