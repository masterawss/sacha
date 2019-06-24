<template lang="pug">
    q-card.rounded.shadow-w
        q-card-section
            .row.q-col-gutter-md.justify-end
                .col-5
                    q-img.img-rounded(
                        :ratio="15/9"
                        :src="incursion.lugar.imagen"
                        spinner-color="white")
                .col-7
                    .text-subtitle1.text-acento.text-grey-8(@click="$router.push({name: 'lugar.show', params: {id: incursion.lugar.id} })") 
                        | {{ incursion.lugar.nombre }}
                    
                    .text-grey-5 
                        q-icon(name="alarm")
                        | &nbsp {{ incursion.fecha | moment("dddd, MMMM Do YYYY") }}
                    q-btn.q-px-sm( label="No podré ir" no-caps rounded outline dense color="red" @click="cancelarIncursion")
                    //- .truncate.text-body2.text-grey-6(style="height:20px") {{ incursion.lugar.descripcion }}
                    //- .q-mt-md
                        q-icon.q-mr-sm(name="people")
                        | 12
</template>

<script>
import {db} from '../boot/db'
export default {
    props: ['incursion'],
    methods: {
        cancelarIncursion(){
            this.$q.dialog({
                title: 'Es una pena :(',
                message: '¿Estás seguro de cancelar tu asistencia? Harás falta al resto de amigos que se apuntaron',
                ok: 'No podré',
                cancel: 'Cancelar'
            }).onOk(() => {
                // db.collection('incursiones').where
            })
        }
    }
}
</script>

<style>

</style>
