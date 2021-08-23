const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const path = require("path");
const config = require("./webpack.config");
const options = {
  static: path.resolve(__dirname, "../dist"),
  hot: true,
  host: "localhost:5000",
}

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(5000, "localhost", () => {
  console.log("dev server listening on port 5000");
})