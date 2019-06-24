<template lang="pug">
    q-list
        .text-grey-7 Próximas incursiones
        q-scroll-area(
        horizontal
        style=" width: 100%")
            .row.inline.no-wrap
                q-card.rounded.shadow-w.q-mx-sm.q-my-md(v-for="incursion in incursiones" :key="incursion.id" style="width: 250px")
                    q-card-section
                        q-avatar
                            img(:src="incursion.usuario.avatar")
                        .text-weight {{ incursion.descripcion }}
                        .text-grey
                            q-icon(name="alarm")
                            | &nbsp {{ incursion.fecha | moment("dddd, MMMM Do YYYY") }}
                //- | {{ incursiones }}
</template> 

<script>
import {QAvatar, QScrollArea} from 'quasar'
import {db} from '../boot/db'
export default {
    props: ['lugar'],
    components: {QAvatar, QScrollArea},
    data: () => ({
        incursiones: []
    }),
    firestore() {
        return {
            incursiones: db.collection('incursiones').where('id_lugar', '>=', this.lugar.id)
        }
    }
}
</script>

<style>
.rounded{
    border-radius: 10px;
}
</style>
