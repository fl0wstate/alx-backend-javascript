function calculateNumber(a, b) {
  if (typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b)) {
    console.log(a + b);
  }
  throw new TypeError('Both params should be of type integers');
}

module.exports = calculateNumber;
