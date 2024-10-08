/**
 * Now making a csv data parser using express js
 */
const exp = require('express');

const app = exp();
const port = 1245;

const fs = require('fs');
const readline = require('readline');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    // Check if the file exists
    fs.access(filepath, fs.constants.F_OK, (err) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const stream = fs.createReadStream(filepath);
      const rl = readline.createInterface({ input: stream });
      const dataHolder = [];
      rl.on('line', (row) => {
        if (row.trim()) {
          dataHolder.push(row.split(','));
        }
      });
      rl.on('close', () => {
        const groupedData = dataHolder.slice(1).reduce((acc, [firstName, lastName, age, field]) => {
          if (!acc[field]) acc[field] = [];
          acc[field].push({ firstName, lastName, age });
          return acc;
        }, {});
        const result = [];
        result.push(`Number of students: ${dataHolder.length - 1}`);
        for (const [field, students] of Object.entries(groupedData)) {
          const studentDept = students.map((student) => student.firstName);
          result.push(`Number of students in ${field}: ${students.length}. List: ${studentDept.join(', ')}`);
        }
        resolve(result);
      });

      // Handle read stream errors
      stream.on('error', () => reject(new Error('Cannot load the database')));
      return null;
    });
  });
}

async function handleStudentsRoute(response) {
  const result = ['This is the list of our students'];
  const filepath = process.argv[2] || '';
  let body = '';

  countStudents(filepath)
    .then((data) => {
      // handle the data
      result.push(...data);
      body = result.join('\n');
      response.writeHead(
        200,
        { 'Content-Type': 'text/plain', 'Content-Length': body.length },
      );
      response.end(body);
    })
    .catch((err) => {
      // handle the console.error();
      result.push(err.message);
      body = result.join('\n');
      response.writeHead(
        404,
        { 'Content-Type': 'text/plain', 'Content-Length': body.length },
      );
      response.end(body);
    });
}

app.get('/', (_, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (_, response) => {
  await handleStudentsRoute(response);
});

app.listen(port, () => {});
module.exports = app;
