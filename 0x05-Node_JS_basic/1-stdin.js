/**
 * How to make a simple stdin
 * Catch you should be able to tell the difference between
 * a pipped command and a normal command
 * Learn to use the child process
 * Allows you to handle multiple process
 */

// Set encoding for process.stdin
process.stdin.setEncoding('utf8');

// Info to welcome the user
// Print the initial welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

// Check if we are in an interactive terminal (TTY) or if input is being piped
if (process.stdin.isTTY) {
  // For interactive terminal input
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\r\n`);
    process.exit();
  });
} else {
  // For piped input
  let inputData = '';

  process.stdin.on('data', (data) => {
    inputData += data.toString();
  });

  process.stdin.on('end', () => {
    const name = inputData.trim();
    process.stdout.write(`Your name is: ${name}\r\n`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  });
}
