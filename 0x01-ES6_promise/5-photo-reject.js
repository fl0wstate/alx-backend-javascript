export default function uploadPhoto(filename) {
  if (filename && typeof filename === 'string') {
    return new Promise((_, reject) => {
      reject(new Error(`${filename} cannot be processed`));
    });
  }
}
