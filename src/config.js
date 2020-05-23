import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyAmTYwEjRF3vUN_4bxpRdlqBBtOzQ5YPFY",
  authDomain: "bitfit-db70a.firebaseapp.com",
  databaseURL: "https://bitfit-db70a.firebaseio.com",
  projectId: "bitfit-db70a",
  storageBucket: "bitfit-db70a.appspot.com",
  messagingSenderId: "872013219049",
  appId: "1:872013219049:web:2e6fb41cdbdb3324db1c78",
  measurementId: "G-1N6YZZJPGT"
};

let app = Firebase.initializeApp(config);
export const db = app.database();