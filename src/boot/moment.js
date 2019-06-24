// import something here
import moment from 'moment'

require('moment/locale/es')
// "async" is optional
export default async ({ Vue/* app, router, Vue, ... */ }) => {
  // something to do
  Vue.use(require('vue-moment'),{moment});
}
