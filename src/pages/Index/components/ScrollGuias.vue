<template lang="pug">
    div
        .row.items-center
            .col-8
                strong Guías disponibles
            .col-4.text-right
                q-btn(flat label="Ver más" dense no-caps)
        q-scroll-area(
        horizontal
        style=" width: 100%;")
            .row.no-wrap
                div(v-for="guia in guias" :key="guia.id" class="q-pa-sm")
                    div.text-center( style="width: 90px" @click="$router.push({name:'perfil.show', params:{id: guia.id}})")
                        q-avatar(color="grey-2")
                            div(v-if="guia.avatar == null") {{ guia.nombre[0] }}
                            q-img(v-else src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg")
                        br
                        small {{ guia.nombre | firstName }}
</template>

<script>
import {QScrollArea} from 'quasar'
export default {
    components: {QScrollArea},
    props: ['guias'],
    filters: {
        firstName(nombre){
            return nombre.split(' ')[0]
        }
    }
}
</script>

<style>

</style>
