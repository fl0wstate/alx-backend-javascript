const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should correctly sum two positive numbers', function() {
      expect(calculateNumber('SUM', 4, 4)).to.equal(8);
    });

    it('should correctly sum a positive and a negative number', function() {
      expect(calculateNumber('SUM', 4, -2)).to.equal(2);
    });

    it('should correctly sum two negative numbers', function() {
      expect(calculateNumber('SUM', -4, -2)).to.equal(-6);
    });

    it('should correctly sum with zero', function() {
      expect(calculateNumber('SUM', 4, 0)).to.equal(4);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should correctly subtract two positive numbers', function() {
      expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2);
    });

    it('should correctly subtract a negative from a positive number', function() {
      expect(calculateNumber('SUBTRACT', 4, -2)).to.equal(6);
    });

    it('should correctly subtract a positive from a negative number', function() {
      expect(calculateNumber('SUBTRACT', -4, 2)).to.equal(-6);
    });

    it('should correctly subtract zero', function() {
      expect(calculateNumber('SUBTRACT', 4, 0)).to.equal(4);
    });
  });

  describe('DIVIDE operation', function() {
    it('should correctly divide two positive numbers', function() {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('should correctly divide a positive by a negative number', function() {
      expect(calculateNumber('DIVIDE', 4, -2)).to.equal(-2);
    });

    it('should correctly divide a negative by a positive number', function() {
      expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
    });

    it('should throw an error when dividing by zero', function() {
      expect(() => calculateNumber('DIVIDE', 4, 0)).to.throw(Error);
    });
  });

  describe('Error handling', function() {
    it('should throw TypeError when TYPE is not a string', function() {
      expect(() => calculateNumber(123, 4, 2)).to.throw(TypeError);
    });

    it('should throw TypeError when a is not a number', function() {
      expect(() => calculateNumber('SUM', '4', 2)).to.throw(TypeError);
    });

    it('should throw TypeError when b is not a number', function() {
      expect(() => calculateNumber('SUM', 4, '2')).to.throw(TypeError);
    });

    it('should throw Error for invalid TYPE', function() {
      expect(() => calculateNumber('INVALID', 4, 2)).to.throw(Error);
    });

    it('should throw TypeError when a is NaN', function() {
      expect(() => calculateNumber('SUM', NaN, 2)).to.throw(TypeError);
    });

    it('should throw TypeError when b is NaN', function() {
      expect(() => calculateNumber('SUM', 4, NaN)).to.throw(TypeError);
    });
  });

  describe('Edge cases', function() {
    it('should correctly handle Infinity', function() {
      expect(calculateNumber('SUM', Infinity, 4)).to.equal(Infinity);
    });

    it('should correctly handle very large numbers', function() {
      expect(calculateNumber('SUM', Number.MAX_VALUE, Number.MAX_VALUE)).to.equal(Infinity);
    });

    it('should correctly handle very small numbers', function() {
      expect(calculateNumber('SUM', Number.MIN_VALUE, Number.MIN_VALUE)).to.equal(2 * Number.MIN_VALUE);
    });
  });
});
