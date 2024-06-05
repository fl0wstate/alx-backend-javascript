export default function getStudentsByLocation(array, city) {
  if (!Array.isArray(array) || typeof city !== 'string') {
    return [];
  }
  return array.filter((items) => items.location === city);
}
