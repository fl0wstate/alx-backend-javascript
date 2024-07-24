const exp = require('express');
const students = require('./3-read_file_async');
const app = exp();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    const result = await students(process.argv[2]);
    response.send(result);
  } catch(err) {
    console.log(err);
  }
});
app.listen(port, () => {});

module.exports = app;
