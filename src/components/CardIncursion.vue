<template lang="pug">
    q-card.rounded.shadow-w
        q-img(v-if="!horizontal" :ratio="30/9" :src="incursion.lugar.imagen")
        q-card-section
            q-avatar( v-if="!horizontal" style="margin-top: -50px")
                img(:src="incursion.usuario.avatar")
            .row(:class="{'q-col-gutter-md' : horizontal }")
                div(:class="{ 'col-4' : horizontal }")
                    q-img.img-rounded(
                        v-if="horizontal"
                        :ratio="11/9"
                        :src="incursion.lugar.imagen")
                    //- q-avatar( v-if="horizontal" style="margin-top: -30px")
                        img(:src="incursion.usuario.avatar")
                div(:class="{ 'col-8': horizontal, 'col-12': !horizontal }")

                    .text-acento {{ incursion.lugar.nombre }}
                    .text-weight(v-if="!no_descripcion") {{ incursion.descripcion }}
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
import {QAvatar} from 'quasar'
import {db} from '../boot/db'
export default {
    props: {
        incursion: {
            type: Object
        },
        horizontal: {
            type: Boolean,
            default: false,
            required: false
        },
        no_descripcion: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    components: {QAvatar},
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
