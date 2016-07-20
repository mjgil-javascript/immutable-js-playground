const Immutable = require('immutable')
const {Record} = Immutable

const test = exports.test = Record({
  hi: null
})

console.log('record', test)
console.log('record', test())
console.log('record', test({hi: 'one'}))
console.log('record', test({
  hi: 'one',
  great: 'two'
}))
const testHi = test()
// throws error
// testHi.hi = 'three'
console.log('testHi', testHi)
testHi.set('hi', 'three')
console.log('testHi', testHi)
// const newTestHi = testHi.set('hi', 'three')
// console.log('newTestHi', newTestHi)
