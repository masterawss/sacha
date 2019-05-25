<template lang="pug">
    q-page
        .row.justify-center
            .col-xs-12.col-sm-12.col-lg-9
                .row
                    .col-lg-6.col-xs-12(v-for="i in 10" :key="i")
                        w-card-lugar.q-mx-lg.q-my-md.q-gutter-sm
</template>

<script>
import WCardLugar from '../../components/CardLugar'
export default {
  name: 'LugarIndex',
  components: {WCardLugar}
}
</script>

<style>

</style>
