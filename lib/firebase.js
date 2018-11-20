import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAonII9U84JT35rsar4u2mm_FPb_LUKNX0",
    authDomain: "cross-7bf89.firebaseapp.com",
    databaseURL: "https://cross-7bf89.firebaseio.com",
    projectId: "cross-7bf89",
    storageBucket: "cross-7bf89.appspot.com",
    messagingSenderId: "102677913217"
};




try {
    const firebaseApp = firebase.initializeApp(config);
    const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();
    const store = firebaseApp.storage();


    const storageKey = 'KEY_FOR_LOCAL_STORAGE';

    const isAuthenticated = () => {
        return !!localStorage.getItem(storageKey);
    };


} catch (err) {
// we skip the "already exists" message which is
// not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
export { firebaseApp, db, auth, store, isAuthenticated, storageKey }



