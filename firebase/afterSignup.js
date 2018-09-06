/* Create a user in database and place to put extra logic after user gets registered  */

import { db } from './index'
import userSchema from './schema/user'

const getUserNameInfo = (user, isSignupWithEmailAndPass) => {
  if (isSignupWithEmailAndPass) {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      name: `${user.firstName} ${user.lastName}`
    }
  }

  return {
    firstName: '',
    lastName: '',
    name: user.displayName
  }
}

export default async (result, registerInfo) => {
  const isSignupWithEmailAndPass = typeof registerInfo !== 'undefined'
  const user = isSignupWithEmailAndPass ? result : result.user
  const { uid } = user
  const _u = isSignupWithEmailAndPass ? registerInfo : user
  const { firstName, lastName, name } = getUserNameInfo(
    _u,
    isSignupWithEmailAndPass
  )
  if (isSignupWithEmailAndPass) {
    await user.updateProfile({
      displayName: name
    })
  }

  // Get user ref
  const userRef = db.ref(`users/${uid}`)

  // Create a user
  await userRef.set({
    ...userSchema,
    uid,
    firstName,
    lastName,
    name
  })

  return 'success'
}
