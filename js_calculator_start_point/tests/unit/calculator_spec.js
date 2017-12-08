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

  it('can add numbers', function(){
    calculator.previousTotal = 10;
    calculator.add(5);
    assert.equal(15, calculator.runningTotal);
  })

  it('can subtract numbers', function(){
    calculator.previousTotal = 20;
    calculator.subtract(7);
    assert.equal(13, calculator.runningTotal);
  })

  it('can divide numbers', function(){
    calculator.previousTotal = 30;
    calculator.divide(10);
    assert.equal(3, calculator.runningTotal);
  })

  it('can multiply numbers', function(){
    calculator.previousTotal = 5;
    calculator.multiply(12);
    assert.equal(60, calculator.runningTotal);
  })

  it('sets first number clicked to runningTotal', function(){
    calculator.numberClick(8);
    assert.equal(8, calculator.runningTotal);
  })

  it('concatenates number clicks in same operation', function(){
    calculator.newTotal = false;
    calculator.runningTotal = 1;
    calculator.numberClick(5);
    assert.equal(15, calculator.runningTotal)
  })

  it('sets the add operation', function(){
    calculator.previousOperator = '+';
    calculator.previousTotal = 3;
    calculator.runningTotal = 17;
    calculator.operatorClick('+');
    assert.equal(20, calculator.runningTotal);
  })

  it('sets the multiply operation', function(){
    calculator.previousOperator = '*';
    calculator.previousTotal = 2;
    calculator.runningTotal = 10;
    calculator.operatorClick('+');
    assert.equal(20, calculator.runningTotal);
  })

  it('sets the divide operation', function(){
    calculator.previousOperator = '/';
    calculator.previousTotal = 10;
    calculator.runningTotal = 5;
    calculator.operatorClick('+');
    assert.equal(2, calculator.runningTotal);
  })

  it('sets the subtract operation', function(){
    calculator.previousOperator = '-';
    calculator.previousTotal = 1059230481;
    calculator.runningTotal = 2;
    calculator.operatorClick('+');
    assert.equal(1059230479, calculator.runningTotal);
  })


  it('can clear running total', function(){
    calculator.runningTotal = 502852;
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })


});
