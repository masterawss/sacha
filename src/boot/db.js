// // import Firebase from 'firebase'
// import firebase from 'firebase/app';
import {firebase} from './firebase'
import 'firebase/firestore'


// firebase.initializeApp({
//     projectId: 'turi-22bc9',
//     databaseURL: 'https://turi-22bc9.firebaseio.com'
// })

// export const db = firebase.firestore()


// Get a Firestore instance
export const db = firebase.firestore()

  // Export types that exists in Firestore
// export { TimeStamp, GeoPoint } = firebase.firestore

// if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })