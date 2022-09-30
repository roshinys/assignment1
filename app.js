const http = require("http");
const routeHandler = require("./routes");

const server = http.createServer(routeHandler);
server.listen(3000, () => {
  console.log("server listening on port 3000");
});
