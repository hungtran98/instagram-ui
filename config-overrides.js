const {
    override, useBabelRc
    // addDecoratorsLegacy,
    // disableEsLint,
    // addBundleVisualizer,
    // addWebpackAlias,
    // adjustWorkbox
  } = require("customize-cra");
  const path = require("path");
  
  module.exports = override(
    useBabelRc()
  );