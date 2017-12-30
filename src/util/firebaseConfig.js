import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAD4s_pXhYkHSZpa2pKzswx2GNyewKCyjY",
    authDomain: "turnout-e10c7.firebaseapp.com",
    databaseURL: "https://turnout-e10c7.firebaseio.com",
    projectId: "turnout-e10c7",
    storageBucket: "turnout-e10c7.appspot.com",
    messagingSenderId: "974351173998"
  };

//create and export firebase instance
export const firebaseApp = firebase.initializeApp(config)

//firebase instance for accessing database - domain is ref
//stories child create stories database and listens for changes in the database and updates it
export const storiesRef = firebase.database().ref().child('stories')
