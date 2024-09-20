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
    assert.strictEqual(calculateNumber(5.7, 3.2), 8.9);
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
    assert.strictEqual(calculateNumber(0.0000001, 0.0000002), 0.0000003);
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
});
