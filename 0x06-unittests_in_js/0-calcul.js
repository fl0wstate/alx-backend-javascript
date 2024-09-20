function calculateNumber(a, b) {
  if (typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b)) {
    return (Math.round(a) + Math.round(b));
  }
  throw new TypeError('Both params should be of type integers');
}
module.exports = calculateNumber;
