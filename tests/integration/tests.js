const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })


  it('should update the display of the running total', function(){
    // Capturing the display element by html /css id to evaluate the final value.
    displayed_total = element(by.css('#running_total'))
    // Passing in two number button clicks 9 and 1
    element(by.css('#number9')).click();
    element(by.css('#number1')).click();
    // pulling the value attribut of the captured display from step one and comparing it to '91'
    expect(displayed_total.getAttribute('value')).to.eventually.equal('91')
  })


  it('should update the display with the result of arithmetical operations', function(){
    displayed_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(displayed_total.getAttribute('value')).to.eventually.equal('8')
  })


  it('should chain multiple operations together', function(){
    displayed_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(displayed_total.getAttribute('value')).to.eventually.equal('4')
  })


  it('should handle negative numbers correctly', function(){
    displayed_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(displayed_total.getAttribute('value')).to.eventually.equal('-4')
  })


  it('should handle large numbers correctly', function(){
    displayed_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();

    element(by.css('#operator_multiply')).click();

    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();

    element(by.css('#operator_equals')).click();

    expect(displayed_total.getAttribute('value')).to.eventually.equal('100000000')
  })


  it('should return decimals when a whole number is not the correct responce', function(){
    displayed_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(displayed_total.getAttribute('value')).to.eventually.equal('2.5')
  })


  it('should return not a number as you can not divide by zero', function(){
    displayed_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#number6')).click();
    element(by.css('#number6')).click();

    element(by.css('#operator_divide')).click();

    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();

    expect(displayed_total.getAttribute('value')).to.eventually.equal('Not a Number')
  })



});
