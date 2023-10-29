const _ = require("lodash");

const items = [1, [2, [3, [4, [5]]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);

const newItems1 = _.flatMapDeep(items);
console.log(newItems1);

const newItems2 = _.flatMapDepth(items);
console.log(newItems2);
