import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC6hw8ThWgw5UkpJV94HjYemWZdixw-Lys",
    authDomain: "lets-message-ok.firebaseapp.com",
    databaseURL: "https://lets-message-ok.firebaseio.com",
    projectId: "lets-message-ok",
    storageBucket: "lets-message-ok.appspot.com",
    messagingSenderId: "406588843279",
    appId: "1:406588843279:web:d57626234e69f13435ca7a",
    measurementId: "G-YLBN3300Z6"

});

const db = firebaseConfig.firestore();

export default db;