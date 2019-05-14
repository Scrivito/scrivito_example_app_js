const express = require("express");

exports.startServer = function startServer(sourceDir) {
  const app = express();
  const staticMiddleware = express.static(sourceDir);
  app.use(staticMiddleware);

  return new Promise(resolve => {
    const server = app.listen(8080, () => resolve(server));
  });
};
