const fs = require('fs');

function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }
  try {
    // Get the file data
    const localBuffer = fs.readFileSync(`${process.cwd()}/${path}`, 'utf8').toString();

    // Trim off all the white space
    const lines = localBuffer.split('\n').filter((line) => line.trim());

    // create a list on each row
    const listData = lines.slice(1).map((line) => line.split(','));

    // Get the number of students
    console.log(`Number of students: ${listData.length}`);
    const groupedData = listData.reduce((acc, studentsData) => {
      const field = studentsData[studentsData.length - 1];
      if (!acc[field]) acc[field] = [];

      acc[field].push({
        firstName: studentsData[0],
        lastName: studentsData[1],
        age: studentsData[2],
      });
      return acc;
    }, {});

    // logging out the data
    for (const [field, students] of Object.entries(groupedData)) {
      const studentNames = students.map((student) => student.firstName);
      console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// export the function
module.exports = countStudents;
