const server = require("./lambdafiles/api/app");

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n=== Server listening on port ${port} ===`)
);
