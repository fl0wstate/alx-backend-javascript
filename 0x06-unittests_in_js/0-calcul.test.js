/**
 * Using asser to test my calculateNumber()
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should correctly add two numbers', function() {
    assert.strictEqual(calculateNumber(5, 3), 8);
  });

  it('should handle floating point numbers', function() {
    assert.strictEqual(calculateNumber(5.7, 3.2), 9);
  });

  it('should handle negative numbers', function() {
    assert.strictEqual(calculateNumber(-5, 3), -2);
  });

  it('should handle zero', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle large numbers', function() {
    assert.strictEqual(calculateNumber(1000000, 2000000), 3000000);
  });

  it('should handle very small numbers', function() {
    assert.strictEqual(calculateNumber(0.0000001, 0.0000002), 0);
  });

  it('should throw TypeError for string input', function() {
    assert.throws(() => calculateNumber('5', 3), TypeError);
  });

  it('should throw TypeError for boolean input', function() {
    assert.throws(() => calculateNumber(true, 5), TypeError);
  });

  it('should throw TypeError for null input', function() {
    assert.throws(() => calculateNumber(null, 5), TypeError);
  });

  it('should throw TypeError for undefined input', function() {
    assert.throws(() => calculateNumber(undefined, 5), TypeError);
  });

  it('should throw TypeError for object input', function() {
    assert.throws(() => calculateNumber({}, 5), TypeError);
  });

  it('should throw TypeError for array input', function() {
    assert.throws(() => calculateNumber([1], 5), TypeError);
  });

  it('should throw TypeError for NaN input', function() {
    assert.throws(() => calculateNumber(NaN, 5), TypeError);
  });

  it('should handle Infinity', function() {
    assert.strictEqual(calculateNumber(Infinity, 5), Infinity);
  });

  it('it round the first argument', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(1.7, 0), 2);
  });

  it('it round the second argument', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.3), 1);
    assert.equal(calculateNumber(0, 1.7), 2);
  });

  it('it should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.7, 1.2), 3);
    assert.equal(calculateNumber(1.3, 1.8), 3);
    assert.equal(calculateNumber(1.6, 1.8), 4);
  });


});
