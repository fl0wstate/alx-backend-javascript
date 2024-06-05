export default function updateUniqueItems(maps) {
  if (!maps) {
    throw new Error('Cannot process');
  }
  try {
    maps.forEach((val, key) => {
      if (val === 1) {
        maps.set(key, 100);
      }
    });
  } catch (_) {
    throw new Error('Cannot process');
  }
}
