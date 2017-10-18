
let objFuncs = require('./functions');

let sort = objFuncs.sort
let filt = objFuncs.filter

console.log(sort('shipTo'))
console.log(`--------------------------------------`)
console.log(filt("status", "shipped"))

// result.sort = objFuncs.sort;
// result.filter = objFuncs.filter;