export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.reduce((previous, current) => previous + current.id, 0);
}
