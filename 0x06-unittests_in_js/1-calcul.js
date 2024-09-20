function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    return ('Error');
  }
  return a / b;
}

function calculateNumber(type, a, b) {
  if (typeof type === 'string' && typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b)) {
    const k = Math.round(a);
    const j = Math.round(b);
    switch (type) {
      case 'SUM': return sum(k, j); break;
      case 'DIVIDE': return divide(k, j); break;
      case 'SUBTRACT': return subtract(k, j); break;
      default: throw new Error('Invalid Type'); break;
    }
  }
  throw new TypeError('TYPE should be a string, and a and b should be numbers');
}

module.exports = calculateNumber;
