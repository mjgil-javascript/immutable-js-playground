const Immutable = require('immutable')
const {Record} = Immutable

const test = Record({
  hi: null
})
console.log('record', test())