const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`Data Received!`);
});

customEmitter.on("response", (name, age) => {
  console.log(`Some other logic you can put into this section!`);
  console.log(`You name is: ${name} and your age is: ${age}`);
});

customEmitter.emit("response", "ABDUL WAHAB", 22);
