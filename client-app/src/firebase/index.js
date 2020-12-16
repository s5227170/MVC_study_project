import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0-dFQToFQVkgzVsSffxV3A0ysF-riUMI",
    authDomain: "mvc-e-commerse.firebaseapp.com",
    databaseURL: "https://mvc-e-commerse.firebaseio.com",
    projectId: "mvc-e-commerse",
    storageBucket: "mvc-e-commerse.appspot.com",
    messagingSenderId: "278248998436",
    appId: "1:278248998436:web:067545ec3dd0027e83bab1",
    measurementId: "G-J9P1YEWP4J"
  };
  
firebase.initializeApp(firebaseConfig);

  
const storage = firebase.storage();

export { storage, firebase as default };