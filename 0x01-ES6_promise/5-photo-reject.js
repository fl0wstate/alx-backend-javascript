export default function uploadPhoto(filename) {
  if (filename && typeof filename === 'string') {
    Promise((_, reject) => {
      reject(new Error(`${filename} cannot be processed`));
    });
  }
}
