const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@heading-color": "rgba(58,52,51,1)",
              "@text-color": "rgba(58,52,51,1)",
              "@text-color-secondary": "rgba(58,52,51,0.7)"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
