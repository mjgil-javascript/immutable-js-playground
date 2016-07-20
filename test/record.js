const RecordStubs = require('../src/record')
const chai = require('chai');
const chaiImmutable = require('chai-immutable');
const {expect} = chai

chai.use(chaiImmutable);

describe('record tests', () => {
  describe('basic', () => {
    it('should create a record', () => {
      expect(RecordStubs.test()).to.have.property('hi')
    })
    
  })
})