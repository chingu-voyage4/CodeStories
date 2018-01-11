import firebase from 'firebase';
import config from '../config/firebaseConfig';

/**
 * Return new firebase instance based on conditions
 * @param {*} fb initial firebase instance
 * @param {*} cf firebase config
 * @return firebase instance
 */
const getFirebaseIns = (fb, cf) => {

  /* Don't let to create firebase instance with same name. */
  if (process) {
    if (process.__firebaseInstace__) {
      return process.__firebaseInstace__;
    }
    process.__firebaseInstace__ = fb;
    process.__firebaseInstace__.initializeApp(cf);
    return process.__firebaseInstace__;
  }
  fb.initializeApp(config);
  return fb;
};

// Export firebase database and auth instance
export const db = getFirebaseIns(firebase, config).database();
export const auth = getFirebaseIns(firebase, config).auth();
