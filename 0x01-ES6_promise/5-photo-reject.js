export default function uploadPhoto(filename) {
  let ret;
  if (filename && typeof filename === 'string') {
    ret = new Promise((_, reject) => {
      reject(new Error(`${filename} cannot be processed`));
    });
  }
  return ret;
}
