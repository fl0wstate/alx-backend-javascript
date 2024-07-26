const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.1, 2.2), 3);
    assert.strictEqual(calculateNumber(0.4, 0.6), 1);
    assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
    assert.strictEqual(calculateNumber(1.9, 1.9), 4);
  });

  it('should handle edge cases', function() {
    assert.strictEqual(calculateNumber(0.49, 0.49), 0);
    assert.strictEqual(calculateNumber(-0.5, -0.5), -0);
    assert.strictEqual(calculateNumber(-0.51, -0.51), -2);
  });

  it('should return an interger', function() {
    let res = calculateNumber(0.5, 0.5);
    assert.strictEqual(typeof res, 'number');
    assert.notEqual(typeof res, 'string');
    assert.notEqual(typeof res, 'float');
  });
});
