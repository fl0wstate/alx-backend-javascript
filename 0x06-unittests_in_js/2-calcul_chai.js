function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division By Zero');
  }
  return a / b;
}

function calculateNumber(type, a, b) {
  if (typeof type === 'string' && typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b)) {
    switch (type) {
      case 'SUM': console.log(sum(a, b)); break;
      case 'DIVIDE': console.log(divide(a, b)); break;
      case 'SUBTRACT': console.log(subtract(a, b)); break;
      default: throw new Error('Invalid Type'); break;
    }
  }
  throw new TypeError('TYPE should be a string, and a and b should be numbers');
}

module.exports = calculateNumber;
