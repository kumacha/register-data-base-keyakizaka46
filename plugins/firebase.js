import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STRAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }
// export const auth = firebase.auth;
// export default firebase;

const config = {
  apiKey: 'AIzaSyCL0DKn7PR8eK5zzx-8_x6848ofNaBaie8',
  authDomain: 'history-of-keyakizaka46.firebaseapp.com',
  projectId: 'history-of-keyakizaka46',
  storageBucket: 'history-of-keyakizaka46.appspot.com',
  messagingSenderId: '656490981947',
  appId: '1:656490981947:web:71f2d0e6c86b722b420a1e',
  measurementId: 'G-LVWBXTY668',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
