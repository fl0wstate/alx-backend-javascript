const displayMessage = require('./0-console');
const countStudents = require('./2-read_file');
const syncCn = require('./3-read_file_async');
const psyncCn = require('./pp');

displayMessage('Hello NodeJS!');
console.log('=================');
countStudents('./database.csv');
countStudents('./databases.csv');
syncCn('./database.csv')
  .then(() => {
    console.log('Done!');
  })
  .catch((err) => {
    console.log(err);
  });
console.log('After');
psyncCn('./database.csv')
  .then(() => {
    console.log('Done!');
  })
  .catch((err) => {
    console.log(err);
  });
console.log('After');
