import firebase from 'firebase'

import { auth } from '../'

const provider = new firebase.auth.GoogleAuthProvider()

export default () => auth.signInWithPopup(provider)
