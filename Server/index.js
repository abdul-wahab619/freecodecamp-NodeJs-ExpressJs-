const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New Request Reveived!\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello from Server");
  });
});

myServer.listen("8000", () => console.log("Server Started!"));
// URL => Uniform Resource Locator
