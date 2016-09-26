"use strict";
const immutable_1 = require('immutable');
let test = immutable_1.List([1, 2]);
// List(1,2)
// let test2 = [1,2]
// let newTest = test2.map(n => n.toString())
const newList = test.map(elem => elem.toString());
const secondList = newList.map((s) => s.concat('2', '3'));
// console.log('list', newList.toJS())
// console.log('list', secondList.insert(1,3).toJS())
var names = ["max", "malcom"];
var filtered = names.map(n => n);
//# sourceMappingURL=list.js.map