var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // const assert = require('assert')
// calculator.add()
  it('correctly calculates the sum of 1 and 4', () => {
    assert.equal(add(1, 4), 5)
  })

// calculator.subtract()
  it('correctly calculates the sum of 4 from 7', () => {
    assert.equal(subtract(4, 7), 3)
  })

  // calculator.multiplies()
  it('correctly calculates the sum of 3 by 5', () => {
    assert.equal(multiply(3, 5), 15)
  })

  // calculator.divides()
  it('correctly calculates the sum of 21 by 7', () => {
    assert.equal(divide(21, 7), 3)
  })


});
