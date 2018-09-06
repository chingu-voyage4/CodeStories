import { storage } from '../'
import { getRandomKey } from '../../util'

export const uploadCoverPhoto = photo => {
  const randomCoverPhotoName = getRandomKey()
  const storyCoverPhotoRef = storage.ref().child(`story-cover-photos/${randomCoverPhotoName}`)
  return storyCoverPhotoRef.putString(photo, 'data_url')
}

export const deleteCoverPhoto = coverPhotoPath => {
  return storage.ref().child(coverPhotoPath).delete()
}

export const getCoverPhotoPath = async (coverPhotoPath, coverPhotoUrl) => {
  // In draft mode, user can either upload cover photo or not,
  // In live/publish mode, user must save cover photo,
  // In draft edit mode, user can either upload or change or leave
  // same photo

  // {coverPhotoUrl} will be two values, either bucket url or base64 image url
  const isBucketUrl = coverPhotoUrl.includes('http')

  if (coverPhotoPath && coverPhotoUrl && !isBucketUrl) {
    // Delete cover photo at current path
    await deleteCoverPhoto(coverPhotoPath)

    // Upload new one
    const response = await uploadCoverPhoto(coverPhotoUrl)
    return response.ref.location.path_
  } else if (coverPhotoUrl && !isBucketUrl && !coverPhotoPath) {
    const response = await uploadCoverPhoto(coverPhotoUrl)
    return response.ref.location.path_
  } else if (coverPhotoPath && coverPhotoUrl && isBucketUrl) {
    return coverPhotoPath
  }

  // No path or url
  return ''
}

export const getCoverPhotoUrl = photoRef => storage.ref().child(photoRef).getDownloadURL()
