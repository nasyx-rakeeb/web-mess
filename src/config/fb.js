import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC9Cy-mfY_ZQQS6UK9G6dv42GglYT0ftws',
  authDomain: 'abigo-share.firebaseapp.com',
  databaseURL: 'https://abigo-share.firebaseio.com',
  projectId: 'abigo-share',
  storageBucket: 'abigo-share.appspot.com',
  messagingSenderId: '545112504838',
  appId: "1:545112504838:web:9b145eef919fd2988ce187",
  measurementId: "G-F5TTLBY3M2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'production') {
  firebase.analytics();

  firebase.firestore().enablePersistence()
    .catch(console.error);
}

export default firebase;
