const http = require('http');

const port = 1245;
const fs = require('fs');
const readline = require('readline');
const { warn } = require('console');

async function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    let result = [];
    // Make a stream
    const stream = fs.createReadStream(filepath);
    stream.on('error', () => {
      reject(new Error('Cannot load the database'));
    });
    const rl = readline.createInterface({ input: stream });
    const dataHolder = [];
    rl.on('line', (row) => {
      if (row.trim()) {
        dataHolder.push(row.split(','));
      }
    });
    rl.on('close', () => {
      const groupedData = [];
      for (let i = 1; i < dataHolder.length; i += 1) {
        const [firstName, lastName, age, field] = dataHolder[i];
        if (!groupedData[field]) {
          groupedData[field] = [];
        }
        groupedData[field].push({ firstName, lastName, age });
      }
      result.push(`Number of students: ${dataHolder.length - 1}`);
      for (const field in groupedData) {
        if (Object.hasOwnProperty.call(groupedData, field)) {
          const studentNames = groupedData[field].map((students) => students.firstName);
          result.push(`Number of students in ${field}: ${groupedData[field].length}. List: ${studentNames.join(', ')}`);
        }
      }
      resolve(result);
    });
  });
}

const app = http.createServer(async (request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    try {
      const result = ['This is a list of our students'];
      countStudents(process.argv[2])
        .then((data) => {
          result.push(...data);
          const resp = result.join('\n');
          response.writeHead(
            200,
            { 'Content-Type': 'text/plain', 'Content-Length': resp.length },
          );
          response.end(resp);
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Page not found');
  }
});

app.listen(port, () => {});
module.exports = app;
