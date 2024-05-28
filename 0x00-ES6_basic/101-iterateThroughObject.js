export default function iterateThroughObject(reportWithIterator) {
  const newArr = [];
  for (const item of reportWithIterator) {
    if (item) {
      newArr.push(item);
      // console.log(newArr);
    }
  }
  return newArr.join(' | ');
}
