const Immutable = require('immutable')
const {Map} = Immutable

const test = exports.test = Map({hi: null})
const test2 = exports.test2 = (obj) => {
  return Map(
    {
      hi: null,
      ...obj
    })
} 

const test2init = test2({one: 1, two: 2})
console.log('test', test.toJS())
console.log('test2init', test2init.toJS())