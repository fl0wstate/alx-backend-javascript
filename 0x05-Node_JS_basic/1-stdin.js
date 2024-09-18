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
console.log('Welcome to Holberton School, what is your name?');

// Listen for data from stdin (user input)
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.toString().trim()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.toString().trim()}`);
    console.log('This important software is now closing');
    process.exit();
  });
}
