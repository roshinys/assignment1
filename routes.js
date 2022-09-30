const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter User</title><head>");
    res.write(
      '<body><form action="/createUser" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html/>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter User</title><head>");
    res.write("<body><ul><li>user 1</li><li>user 2</li></ul></body>");
    res.write("</html/>");
    return res.end();
  }
  if (url === "/createUser" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("close", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};
module.exports = routeHandler;
