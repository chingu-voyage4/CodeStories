import { storage } from '../';
import { getRandomKey } from '../../util';

export const uploadCoverPhoto = photo => {
  const randomCoverPhotoName = getRandomKey();
  const storyCoverPhotoRef = storage.ref().child(`story-cover-photos/${randomCoverPhotoName}`);
  return storyCoverPhotoRef.putString(photo, 'data_url');
};

export const getCoverPhotoUrl = photoRef => storage.ref().child(photoRef).getDownloadURL();

