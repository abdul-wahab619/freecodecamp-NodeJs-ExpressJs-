let a = [1, 22, 44];
let [b, c, d, e] = a;

console.log(a, b, c, d, e);

let obj = { name: "Abdul Wahab", age: 22 };
let { age } = obj;

console.log(age);

let abc = [1, 2, 3];
let [aa, , dd] = abc; //2nd value skip
console.log(abc, aa, dd);
