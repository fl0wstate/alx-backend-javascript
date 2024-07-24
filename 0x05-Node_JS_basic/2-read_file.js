const fs = require('fs');
const readline = require('readline');

module.exports = function countStudents(filepath) {
  try {
    const stream = fs.createReadStream(filepath);
    
    stream.on('error', (_) => {
      throw new Error("Cannot load the database");
    });

    const rl = readline.createInterface({input: stream});
    const data_holder = [];

    rl.on('line', (row) => {
      if (row.trim()) {
        data_holder.push(row.split(","));
      }
    });

    rl.on('close', () => {
      let cs = [];
      let swe = [];
      for (let i = 1; i < data_holder.length; i++) {
        field = data_holder[i];
        if (field.includes('CS')) {
          cs.push(field[0]);
        } else {
          swe.push(field[0]);
        }
      }
      console.log(`Number of students: ${data_holder.length - 1}`);
      console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
      console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
    });
  } catch (err) {
    console.error(err.message);
  }
}
