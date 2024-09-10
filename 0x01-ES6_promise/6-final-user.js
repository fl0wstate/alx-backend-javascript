import sigUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  if (typeof firstName === 'string' && typeof lastName === 'string' && typeof fileName === 'string') {
    try {
      const results = await Promise.allSettled([sigUpUser(firstName, lastName), uploadPhoto(fileName)]);
      const userResult = results[0];
      const photoResult = results[1];

      if (userResult.status === 'fulfilled') {
        console.log('User signup successful:', userResult.value);
      } else {
        console.log('User signup failed:', userResult.reason);
      }

      if (photoResult.status === 'fulfilled') {
        console.log('Photo upload successful:', photoResult.value);
      } else {
        photoResult.status = 'pending';
        

      }
    } catch (error) {
      console.log('Unexpected error:', error);
    }
  } else {
    console.log('Invalid input');
  }
}

handleProfileSignup("bod", "dylan", "what.js");
