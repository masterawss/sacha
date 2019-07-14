<template lang="pug">
    q-page
        .row.justify-center
            .col-xs-12.col-sm-12.col-lg-9
                .row.q-col-gutter-md.q-mt-xs
                    .col-lg-8.col-12
                        w-list-incursiones
                        .row
                            .text-h6 Lugares
                            .col-lg-12.col-xs-12( v-for="(lugar, i) in lugares" )
                                w-card-lugar.shadow-w.q-my-sm(:lugar="lugar")
            .col-xs-12.col-sm-12.col-lg-9
            
</template>

<script>
import WCardLugar from '../../components/CardLugar'
import WListIncursiones from '../../components/ListIncursiones'
import {db} from '../../boot/db'
export default {
  name: 'LugarIndex',
  components: {WCardLugar, WListIncursiones},
  data: () => ({
      lugares: []
  }),
  firestore: {
      lugares: db.collection('lugares')
  }
}
</script>

<style>

</style>
