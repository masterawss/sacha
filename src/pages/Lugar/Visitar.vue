<template lang="pug">
    q-layout
        q-page-container
            q-toolbar.text-primary
                q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)")
                q-toolbar-title 
                    .text-acento {{ lugar.nombre }}
            q-page
                div.q-mx-sm
                    .row.items-center
                        .col-8
                            strong Guías disponibles
                        .col-4.text-right
                            q-btn(flat label="Ver más" dense no-caps)

                    q-scroll-area(
                    horizontal
                    style=" width: 100%;")
                        .row.no-wrap
                            div(v-for="n in 10" :key="n" class="q-pa-sm")
                                div.text-center( style="width: 90px")
                                    q-avatar
                                        q-img(src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg")
                                    br
                                    small Nombre Nombre
                
</template>

<script>
import {db} from '../../boot/db'
import {QScrollArea, QAvatar} from 'quasar'
export default {
    // props: ['lugar'],
    components: {QScrollArea, QAvatar},
    data: () => ({
        lugar: {}
    }),
    firestore() {
        return {
            lugar: db.collection('lugares').doc(this.$route.params.id),
            guias: db.collection('guias').doc(this.$route.params.id).collection('guias')
        }
    },
}
</script>

<style>

</style>
