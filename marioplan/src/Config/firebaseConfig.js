    /* eslint-disable */ 
  import firebase from 'firebase/app';
  import firestore from 'firebase/firestore';
  import auth from 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCgG_NzIo0ONgF8Qjgb0wNWsIFxmNB7qhY",
    authDomain: "react-marioplan-c15b3.firebaseapp.com",
    databaseURL: "https://react-marioplan-c15b3.firebaseio.com",
    projectId: "react-marioplan-c15b3",
    storageBucket: "react-marioplan-c15b3.appspot.com",
    messagingSenderId: "262466844970",
    appId: "1:262466844970:web:03e02ec8e973949695c653"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;