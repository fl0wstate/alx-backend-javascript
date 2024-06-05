export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string') {
    return '';
  }
  let res = '';
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      if (res.length > 0) {
        res += '-';
      }
      res += elem.slice(startString.length);
    }
  }
  return res;
}
