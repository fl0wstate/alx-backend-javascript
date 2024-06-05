export default function updateStudentGradeByCity(students, location, newGrades) {
  if (!Array.isArray(students) || typeof location !== 'string'
    || typeof newGrades !== 'object' || newGrades === null) {
    return [];
  }
  return students
    .filter((student) => student.location === location)
    .map((student) => {
      // get the students that match the id
      const gradedStudents = newGrades.find((grade) => grade.studentId === student.id);
      // return new object with updated grades
      return {
        ...student,
        grade: gradedStudents ? gradedStudents.grade : 'N/A',
      };
    });
}
