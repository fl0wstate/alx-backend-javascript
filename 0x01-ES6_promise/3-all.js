import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const profileObject = uploadPhoto();
  const userInfo = createUser();

  Promise.all([profileObject, userInfo])
    .then((data) => {
      const [body, firstName] = data;
      console.log(body.body, firstName.firstName, firstName.lastName);
    })
    .catch((err) => {
      console.log('Signup system offline');
      return err;
    });
}
