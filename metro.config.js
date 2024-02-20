const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();

  // Add custom configuration here
  return {
    resolver: {
      assetExts: ["jpeg", "jpg", "png", "gif"], // Add additional asset extensions
    },
    ...defaultConfig,
  };
})();
