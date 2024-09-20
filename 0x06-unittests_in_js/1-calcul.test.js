const assert = require('assert');
const calculateNumber = require('./1-calcul'); // Adjust the path as needed

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should correctly sum two positive numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 4, 4), 8);
    });

    it('should correctly sum a positive and a negative number', function() {
      assert.strictEqual(calculateNumber('SUM', 4, -2), 2);
    });

    it('should correctly sum two negative numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -4, -2), -6);
    });

    it('should correctly sum with zero', function() {
      assert.strictEqual(calculateNumber('SUM', 4, 0), 4);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should correctly subtract two positive numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 2), 2);
    });

    it('should correctly subtract a negative from a positive number', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, -2), 6);
    });

    it('should correctly subtract a positive from a negative number', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -4, 2), -6);
    });

    it('should correctly subtract zero', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 0), 4);
    });
  });

  describe('DIVIDE operation', function() {
    it('should correctly divide two positive numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('should correctly divide a positive by a negative number', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4, -2), -2);
    });

    it('should correctly divide a negative by a positive number', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -4, 2), -2);
    });

    it('should throw an error when dividing by zero', function() {
      assert.throws(() => calculateNumber('DIVIDE', 4, 0), Error);
    });
  });

  describe('Error handling', function() {
    it('should throw TypeError when TYPE is not a string', function() {
      assert.throws(() => calculateNumber(123, 4, 2), TypeError);
    });

    it('should throw TypeError when a is not a number', function() {
      assert.throws(() => calculateNumber('SUM', '4', 2), TypeError);
    });

    it('should throw TypeError when b is not a number', function() {
      assert.throws(() => calculateNumber('SUM', 4, '2'), TypeError);
    });

    it('should throw Error for invalid TYPE', function() {
      assert.throws(() => calculateNumber('INVALID', 4, 2), Error);
    });

    it('should throw TypeError when a is NaN', function() {
      assert.throws(() => calculateNumber('SUM', NaN, 2), TypeError);
    });

    it('should throw TypeError when b is NaN', function() {
      assert.throws(() => calculateNumber('SUM', 4, NaN), TypeError);
    });
  });

  describe('Edge cases', function() {
    it('should correctly handle Infinity', function() {
      assert.strictEqual(calculateNumber('SUM', Infinity, 4), Infinity);
    });

    it('should correctly handle very large numbers', function() {
      assert.strictEqual(calculateNumber('SUM', Number.MAX_VALUE, Number.MAX_VALUE), Infinity);
    });
  });
});
