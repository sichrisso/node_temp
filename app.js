// const amount = 12
// if(amount < 10) {
//     console.log("Small No");
// }else{
//     console.log("Large No");
// }

// console.log("First Node App");

const _ = require('lodash');

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)