// import something here
// import { firestorePlugin } from 'vuefire'
import { firestorePlugin } from 'vuefire'



// "async" is optional
export default async ({ app, router, Vue }) => {
  // something to do
  Vue.use(firestorePlugin)
}

