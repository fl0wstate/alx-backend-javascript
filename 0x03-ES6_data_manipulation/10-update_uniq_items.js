export default function updateUniqueItems(maps) {
  if (!maps) {
    throw new Error('Cannot process');
  }
  maps.forEach((val, key) => {
    if (val === 1) {
      maps.set(key, 100);
    } else if (!maps.has(key)) {
      throw new Error('Cannot process');
    }
  });

  return maps;
}
