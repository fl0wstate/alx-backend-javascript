const fs = require('fs');
const readline = require('readline');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
    //  allows you to operate on each line of the file
    const stream = fs.createReadStream(path);
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
        // for each row extract all the data respectively
        const [firstName, lastName, age, field] = dataHolder[i];
        // group them according to the field
        if (!groupedData[field]) {
          groupedData[field] = [];
        }
        // push it to the list
        groupedData[field].push({ firstName, lastName, age });
      }
      // present the data correctly
      console.log(`Number of students: ${dataHolder.length - 1}`);
      for (const [field, students] of Object.entries(groupedData)) {
        const studentDept = students.map((student) => student.firstName);
        console.log(`Number of students in ${field}: ${students.length}. List: ${studentDept.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
