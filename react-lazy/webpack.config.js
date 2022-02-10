const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ma",
    projectName: "react-lazy",
    webpackConfigEnv,
    //argv,
  });

  const config = merge(defaultConfig, {
    externals: ["react-router-dom"],
  });

  return config;
};
