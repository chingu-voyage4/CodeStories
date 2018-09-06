import firebase from 'firebase'

import { auth } from '../'

const provider = new firebase.auth.TwitterAuthProvider()

export default () => auth.signInWithPopup(provider)
