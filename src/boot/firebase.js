// import something here
import Firebase from 'firebase/app'
// "async" is optional

const firebaseConfig = {
  apiKey: "AIzaSyA4Zx1bfk5gqw4aBMjbAQJJxPfxJo3WWcs",
  authDomain: "turi-22bc9.firebaseapp.com",
  databaseURL: "https://turi-22bc9.firebaseio.com",
  projectId: "turi-22bc9",
  storageBucket: "turi-22bc9.appspot.com",
  messagingSenderId: "825961796736",
  appId: "1:825961796736:web:65d151c5b268a446"
};

let app = Firebase.initializeApp(firebaseConfig);
// export default app;

export const firebase = app

export default async ({ /* app, router, Vue, ... */Vue }) => {
  Vue.prototype.$firebase = app
}
