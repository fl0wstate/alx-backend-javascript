import fs from 'fs';
import readline from 'readline';

function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    // Check if the file exists
    fs.access(filepath, fs.constants.F_OK, (err) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const stream = fs.createReadStream(filepath);
      const rl = readline.createInterface({ input: stream });
      const dataHolder = [];
      rl.on('line', (row) => {
        if (row.trim()) {
          dataHolder.push(row.split(','));
        }
      });
      rl.on('close', () => {
        const groupedData = {};
        for (let i = 1; i < dataHolder.length; i += 1) {
          const [firstName, lastName, age, field] = dataHolder[i];
          if (!groupedData[field]) {
            groupedData[field] = [];
          }
          groupedData[field].push({ firstName, lastName, age });
        }
        resolve(groupedData);
      });

      // Handle read stream errors
      stream.on('error', () => reject(new Error('Cannot load the database')));
      return null;
    });
  });
}

export default readDatabase;
