export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string') {
    return '';
  }
  let res = '';
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      res = res.concat('-', elem.slice(startString.length));
    }
  }
  return res.slice(1);
}
