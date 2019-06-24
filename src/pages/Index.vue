<template lang="pug">
  q-page
    .row.justify-center
      .col-xs-12.col-sm-12.col-lg-9
        .row.q-my-xl.q-mx-md.items-center
          .col-lg-6.col-sm-12
            .text-h3.text-acento.q-my-lg.text-primary Una nueva aventura te espera 
            .text-h5.q-my-lg.text-grey Explora los mejores lugares
              br 
              | con las mejores personas 
            q-btn(color="primary" rounded unelevated label="Explorar" @click="$router.push({name: 'lugar.index'})")
            q-btn.q-ml-sm(color="primary" rounded flat label="Quiero ser guía" @click="$router.push({name: 'register.guia'})")
          .col-lg-6.col-sm-12
            q-img(src="../statics/landing2.png")
          //-   | asdsa
        .q-mt-xl.q-py-xl.q-mx-md
          .text-subtitle1.text-acento.text-grey-8.q-mb-md Te puede interesar visitar ...
          .row.q-col-gutter-lg
            
            .col-lg-6.col-xs-12(v-for="(lugar, index) in lugares" :key="index")
              w-card-lugar(:lugar="lugar")
          .text-center.q-my-sm
            q-btn(flat label="Ver más" color="secondary" @click="$router.push({name: 'lugar.index'})")
    
    .row.justify-center.bg-grey-2
      .col-xs-12.col-sm-12.col-lg-9.q-pa-md
        | Copyright
</template>

<style>
</style>

<script>
import WCardLugar from '../components/CardLugar'
import {db} from '../boot/db'
export default {
  name: 'PageIndex',
  components: {WCardLugar},
  data: () => ({
    lugares: []
  }),
  firestore: {
    lugares: db.collection('lugares').limit(4)
  }
}
</script>
