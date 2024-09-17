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
      console.log(`Number of students: ${dataHolder.length}`);
      const groupData = dataHolder.reduce((acc, studentDetails) => {
        const field = studentDetails[studentDetails.length - 1];
        if (!acc[field]) acc[field] = [];
        acc[field].push({
          firstName: studentDetails[0],
          lastName: studentDetails[1],
          age: studentDetails[2],
        });
        return acc;
      }, {});

      // present the data correctly
      for (const [field, students] of Object.entries(groupData)) {
        const studentDept = students.map((student) => student.firstName);
        console.log(`Number of students in ${field}: ${students.length}. List: ${studentDept.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
