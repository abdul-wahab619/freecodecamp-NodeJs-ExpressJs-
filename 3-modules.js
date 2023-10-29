// require - function to use modules (commonJS)
// module - info about current module (file)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternativeFlavour')
require('./7-mind-Gernade')


console.log(data);
console.log(names)
console.log(sayHi);



sayHi('Abdul Wahab')
sayHi(names.john)
sayHi(names.peter)
