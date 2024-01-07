const { constant } = require("lodash");

let a = 12;
a = 45;
const b = 66;
// b = 56; error generate

// both are braces scope and not be accessible from the ousite of the scope
// let -> is a variable
// const -> is a constant

console.log(a, b);
