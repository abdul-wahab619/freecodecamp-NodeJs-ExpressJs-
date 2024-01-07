// ... spread/rest

const { functions } = require("lodash");

let a = [1, 2, 3, 4, 4, 5, 77];
let b = [...a];

//spread ka mtlb hai element ka saare
//values ko us jagah par rakh dana
console.log(a);
console.log(b);

//spread use hota hai copy ya fir us location par kisi aur ki values bikharana ki liya
//rest use hota hai jab apko bache huye values ek varaiable mn dalne ho

//rest example
function abc(a, b, c, ...d) {
  console.log(a, b, c, d);
}
abc(1, 2, 3, 4, 45, 6, 66);
