const fs = require('fs');

module.exports = function countStudents(filepath) {
  try {
    // Read file synchronously
    const fileContent = fs.readFileSync(filepath, 'utf8');

    // Split content into lines and filter out empty lines
    const lines = fileContent.split('\n').filter((line) => line.trim());

    // Remove header and parse data
    const dataHolder = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${dataHolder.length}`);

    // Group data by field
    const groupedData = dataHolder.reduce((acc, [firstName, lastName, age, field]) => {
      if (!acc[field]) acc[field] = [];
      acc[field].push({ firstName, lastName, age });
      return acc;
    }, {});

    // Log results
    for (const [field, students] of Object.entries(groupedData)) {
      const studentNames = students.map((student) => student.firstName);
      console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
