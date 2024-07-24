const fs = require('fs');
const readline = require('readline');

module.exports = async function countStudents(filepath) {
  return new Promise((resolve, reject) => {
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
      console.log(`Number of students: ${dataHolder.length - 1}`);
      for (const field in groupedData) {
        if (Object.hasOwnProperty.call(groupedData, field)) {
          const studentNames = groupedData[field].map((students) => students.firstName);
          console.log(`Number of students in ${field}: ${groupedData[field].length}. List: ${studentNames.join(', ')}`);
          resolve(`Number of students in ${field}: ${groupedData[field].length}. List: ${studentNames.join(', ')}`);
        }
      }
    });
  });
};
