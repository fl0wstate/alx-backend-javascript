export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      console.log('Got response from the API');
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      console.log('Got response from the API');
      reject(new Error());
    }
  });
}
