const fs = require('fs');
const readline = require('readline');

module.exports = async function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    // Make a stream
    const stream = fs.createReadStream(filepath);
  
    stream.on('error', (_) => {
      reject(new Error("Cannot load the database"));
    });
  
    const rl = readline.createInterface({ input: stream });
    const dataHolder = [];
  
    rl.on('line', (row) => {
      if (row.trim()) {
        dataHolder.push(row.split(","));
      }
    });
  
    rl.on('close', () => {
      let cs = [];
      let swe = [];
      for (let i = 1; i < dataHolder.length; i++) {
        const field = dataHolder[i];
        if (field.includes('CS')) {
          cs.push(field[0]);
        } else {
          swe.push(field[0]);
        }
      }
      console.log(`Number of students: ${dataHolder.length - 1}`);
      console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
      console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
      resolve();
    });
  });
}
