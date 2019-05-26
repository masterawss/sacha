<template lang="pug">
  q-page
    .row.justify-center
      .col-xs-12.col-sm-12.col-lg-9
        .row.q-my-xl.q-mx-md
          .col-lg-6.col-sm-12
            .text-h4.text-acento.q-my-lg.text-primary Una nueva aventura te espera
            .text-h5.text-acento.q-my-lg.text-grey-8 Explora los mejores lugares
              br 
              | con las mejores personas

            q-btn(color="primary" rounded unelevated label="Explorar" @click="$router.push({name: 'lugar.index'})")
            q-btn.q-ml-xl(color="secondary" rounded unelevated label="Quiero ser guía" @click="$router.push({name: 'register.guia'})")
          //- .col-lg-6.col-sm-12
          //-   | asdsa
        .q-mt-xl.q-py-xl.q-mx-md
          .text-subtitle1.text-acento.text-grey-8.q-mb-md Te puede interesar visitar ...
          .row.q-col-gutter-lg
            .col-lg-6.col-xs-12(v-for="i in 4" :key="i")
              w-card-lugar

</template>

<style>
</style>

<script>
import WCardLugar from '../components/CardLugar'
export default {
  name: 'PageIndex',
  components: {WCardLugar}
}
</script>
