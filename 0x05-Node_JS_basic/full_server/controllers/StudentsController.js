import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(_, res) {
    try {
      const path = process.argv[2] || '';
      const data = await readDatabase(path);
      const keys = Object.keys(data);
      const fields = keys.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      const response = ['This is the list of our students'];
      for (const field of fields) {
        response.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      }
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const path = process.argv[2] || '';
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const data = await readDatabase(path);
      if (!data[major]) {
        response.status(500).send('Cannot load the database');
        return;
      }
      const resp = `List: ${data[major].join(', ')}`;
      response.status(200).send(resp);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
