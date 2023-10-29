const os = require("os");
var figlet = require("figlet");
const express = require("express");
const app = express();

const user = os.userInfo();

console.log(user);

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()}`);

const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currOS);

// use of figlet
figlet("Abdul Wahab", function (err, data) {
  if (err) {
    console.log("something went wrong...!");
    console.dir(err);
    return;
  }
  console.log(data);
});

app.get("/", function (req, res) {
  res.send("Hello! Abdul Wahab");
});
app.listen("3566");
