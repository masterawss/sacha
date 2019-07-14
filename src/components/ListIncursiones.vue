<template lang="pug">
    q-list
        .text-h6.text-grey-9 Próximas incursiones
        q-scroll-area(
        horizontal
        style=" width: 100%")
            .row.inline.no-wrap
                w-card-incursion.q-mx-sm.q-my-md(v-for="incursion in incursiones" :key="incursion.id" 
                style="width: 300px" 
                :incursion="incursion")
                //- q-card.shadow-w.q-mx-sm.q-my-md(v-for="incursion in incursiones" :key="incursion.id" style="width: 250px")
                    q-img(v-if="incursion.lugar" :src="incursion.lugar.imagen"
                    :ratio="24/9")
                    q-card-section
                        q-avatar(style="margin-top: -50px")
                            img(:src="incursion.usuario.avatar")
                        .text-acento {{ incursion.lugar.nombre }}
                        .text-weight {{ incursion.descripcion }}
                        .text-grey
                            q-icon(name="alarm")
                            | &nbsp {{ incursion.fecha | moment("dddd, MMMM Do YYYY") }}
                        .text-center
                            q-btn.q-mt-md.q-px-md(color="primary" dense no-caps unelevated rounded label="Me apunto")
                        
</template>

<script>
import {QScrollArea, QAvatar} from 'quasar'
import {db} from '../boot/db'
import WCardIncursion from '../components/CardIncursion'
export default {
    components: {QScrollArea, QAvatar, WCardIncursion},
    data: () => ({
        incursiones: []
    }),
    firestore: {
        incursiones: db.collection('incursiones').orderBy("fecha", "desc").limit(3)
        
    }
}
</script>

<style>

</style>
