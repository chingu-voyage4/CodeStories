import firebase from 'firebase';

import { auth } from '../';

const provider = new firebase.auth.GithubAuthProvider();

export default () => auth.signInWithPopup(provider);
