function displayMessage(data) {
  process.stdout.write(`${data.toString().trim()}\n`);
}

module.exports = displayMessage;
