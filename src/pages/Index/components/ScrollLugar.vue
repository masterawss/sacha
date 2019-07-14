<template lang="pug">
    div
        .row.items-center
            .col-8
                strong Lugares cercanos
            .col-4.text-right
                q-btn(flat label="Ver más" dense no-caps)
        q-scroll-area(
        horizontal
        style=" width: 100%;")
            .row.no-wrap
                div(v-for="lugar in lugares" :key="lugar.id" class="q-pa-sm" @click="$router.push({name: 'lugar.show', params: { id:lugar.id } })")
                    div(style="width: 200px")
                        q-img.rounded-border(
                        :src="lugar.imagenes[0]"
                        :ratio="20/10")
                        strong {{lugar.nombre}}
</template>

<script>
import {QScrollArea} from 'quasar'
export default {
    components: {QScrollArea},
    props: ['lugares']
}
</script>

<style>

</style>
