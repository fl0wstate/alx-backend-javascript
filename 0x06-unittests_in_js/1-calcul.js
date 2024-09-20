function sum(a, b) {
  return Math.round(a) + Math.round(b);
}

function subtract(a, b) {
  return Math.round(a) - Math.round(b);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division By Zero');
  }
  return Math.round(a) / Math.round(b);
}

function calculateNumber(type, a, b) {
  if (typeof type === 'string' && typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b)) {
    switch (type) {
      case 'SUM': return sum(a, b); break;
      case 'DIVIDE': return divide(a, b); break;
      case 'SUBTRACT': return subtract(a, b); break;
      default: throw new Error('Invalid Type'); break;
    }
  }
  throw new TypeError('TYPE should be a string, and a and b should be numbers');
}

module.exports = calculateNumber;
