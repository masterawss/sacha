// import something here
import firebase from 'firebase'
// "async" is optional
export default async ({ router /* app, router, Vue, ... */ }) => {
  // something to do
  router.beforeEach( (to, from, next) => {
    if(to.meta.auth){
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          return next()
        } else {
          return router.push({name: 'login'})
        }
      })
    }
    return next()
  })
}
