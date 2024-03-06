const fs = require("fs");

// Synchronous Call
fs.writeFileSync("./test.txt", "Hey there👋🏻! Abdul Wahab");

// Asynchronous Call
fs.writeFile(
  "./test1.txt",
  "Hey there👋🏻! Abdul Wahab from Asynchronous",
  (err) => {}
);

const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(result);
  }
});

let res = fs.appendFileSync("./test.txt", new Date().getFullYear().toString());
console.log(res);

console.log(fs.statSync("./test.txt"));
