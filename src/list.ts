import {List} from 'immutable'
import * as fs from 'fs'

var test = List([1,2])
// List(1,2)
// let test2 = [1,2]

// let newTest = test2.map(n => n.toString())

var newList = test.map(elem => elem.toString())
const secondList = newList.map((s:string) => s.concat('2', '3'))
// console.log('list', newList.toJS())
// console.log('list', secondList.insert(1,3).toJS())

var names = ["max", "malcom"];
var filtered = names.map(n=> n)