const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  build: {
    assetsPublicPath: "",
  },
  dev: {
    assetsPublicPath: "/",
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/personal-website/" : "/",
});
