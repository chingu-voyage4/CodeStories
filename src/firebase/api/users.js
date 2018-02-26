import { db } from '../';

export const getUserByUid = uid => {
  return db.ref(`/users/${uid}`).once('value');
};
