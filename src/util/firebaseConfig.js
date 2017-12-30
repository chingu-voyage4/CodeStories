import firebase from 'firebase'

  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyBHXUl7r3tLsgws1K5agB1IWmSWN5H1Jvg",
    authDomain: "bears25-codestories.firebaseapp.com",
    databaseURL: "https://bears25-codestories.firebaseio.com",
    projectId: "bears25-codestories",
    storageBucket: "bears25-codestories.appspot.com",
    messagingSenderId: "1012640946495"
  };

//create and export firebase instance
export const firebaseApp = firebase.initializeApp(config)

//firebase instance for accessing database - domain is ref
//stories child create stories database and listens for changes in the database and updates it
export const storiesRef = firebase.database().ref().child('stories')
