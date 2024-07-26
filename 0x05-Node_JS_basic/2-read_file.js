const fs = require('fs').promises;

module.exports = async function countStudents(filepath) {
  try {
    const fileContent = await fs.readFile(filepath, 'utf8');
    const lines = fileContent.split('\n').filter((line) => line.trim());

    const dataHolder = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${dataHolder.length}`);

    const groupedData = dataHolder.reduce((acc, [firstName, lastName, age, field]) => {
      if (!acc[field]) acc[field] = [];
      acc[field].push({ firstName, lastName, age });
      return acc;
    }, {});

    for (const [field, students] of Object.entries(groupedData)) {
      const studentNames = students.map((student) => student.firstName);
      console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
