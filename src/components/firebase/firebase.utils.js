import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAmacW0ZH8fOxKliHUciPLZoSD0J70hx90",
    authDomain: "boostmind-916d0.firebaseapp.com",
    databaseURL: "https://boostmind-916d0-default-rtdb.firebaseio.com",
    projectId: "boostmind-916d0",
    storageBucket: "boostmind-916d0.appspot.com",
    messagingSenderId: "936196765784",
    appId: "1:936196765784:web:8dafff97f840735f02f22d",
    measurementId: "G-P7TPQEGMBB"

  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch ( error ) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;