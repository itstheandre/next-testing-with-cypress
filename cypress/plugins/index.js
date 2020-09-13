const wp = require("@cypress/webpack-preprocessor");
const path = require("path");

const options = {
  webpackOptions: {
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      modules: [path.resolve(__dirname, "../.."), "node_modules"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: { transpileOnly: true },
        },
      ],
    },
  },
};

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("file:preprocessor", wp(options));
  //   require("@cypress/code-coverage/task")(on, config);
  //   if (!config.experimentalComponentTesting) {
  //     require('cypress-terminal-report/src/installLogsPrinter')(on);
  //   }
  //   on(
  //     'task',
  //     jwtTask(process.env.APP_SECRET, { expiresIn: '1 min', algorithm: 'HS384' }),
  //   );

  return config;
};
