const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to New World!");
    return; // Add return statement to exit the handler function
  }
  if (req.url === "/about") {
    res.end("Here is our about section");
    return; // Add return statement to exit the handler function
  }
  res.end(
    `<h1>Oops</h1>
    <p>We are in bad conditions...</p>
    <a href="/">Back home</a>`
  );
});

server.listen(5000);
