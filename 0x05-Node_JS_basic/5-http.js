const http = require('http');
const students = require('./3-read_file_async');
const port = 1245;

const app = http.createServer(async (request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    try {
      const result = await students(process.argv[2]);
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end(result);
    } catch (err) {
      console.error(err);
    }
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Page not found');
  }
});
app.listen(port, () => {});
module.exports = app
