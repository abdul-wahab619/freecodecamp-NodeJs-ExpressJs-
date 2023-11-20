const { readFile } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello Uni!");
});

server.listen(5000, () => {
  console.log("Server listening on port: 5000...");
});

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};
start();
