const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }

    // reading files asynchronously
    const filename = `${process.cwd()}/${path}`;
    fs.readFile(filename, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      // trim all the white spaces.
      const cleanData = data.split('\n').filter((line) => line.trim());

      // make a list out of ceach row
      const listData = cleanData.slice(1).map((line) => line.split(','));

      // mutate the groupData to provide a new grouped Data
      console.log(`Number of students: ${listData.length}`);
      const groupData = listData.reduce((acc, studentDetails) => {
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
    });
    resolve();
  });
}

module.exports = countStudents;
