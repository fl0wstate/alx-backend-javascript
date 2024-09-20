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

    it('it round the first argument', () => {
        assert.equal(calculateNumber('DIVIDE', 10.0, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 10.7, 2), 5.5);
    });
    
    it('it round the second argument', () => {
        assert.equal(calculateNumber('DIVIDE', 10, 1.0), 10);
        assert.equal(calculateNumber('DIVIDE', 10, 1.3), 10);
        assert.equal(calculateNumber('DIVIDE', 10, 1.7), 5);
    });
    
    it('it should return the right number', () => {
        assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 10, 1.2), 10);
        assert.equal(calculateNumber('DIVIDE', 10.3, 1.3), 10);
        assert.equal(calculateNumber('DIVIDE', 10.7, 1.2), 11);
        assert.equal(calculateNumber('DIVIDE', 10.3, 1.8), 5);
        assert.equal(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
    });

    it('it should return Error if b is equal to 0', () => {
        assert.equal(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
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
