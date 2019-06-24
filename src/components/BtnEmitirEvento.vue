<template lang="pug">
    q-btn.gradient.text-white.q-ml-md(round icon="volume_down" unelevated @click="dialog_nuevo_evento = true" )
        q-dialog(
            v-model="dialog_nuevo_evento"
            persistent
            maximized
            transition-show="slide-up"
            transition-hide="slide-down")
            q-card
                q-card-section
                    q-toolbar
                        q-toolbar-title 
                            span.text-weight-bold Nuevo evento
                        q-btn(flat round dense icon="close" v-close-popup)
                    .text-center
                        .text-h5.q-mt-xl ¡Vámonos!
                        .text-grey.q-mt-sm Crea una incursión y conoce nuevos amigos.
                    div.text-center.q-mx-lg.q-mt-xl
                        q-input(label="Fecha" type="date" v-model="fecha")
                        q-input(label="Descripción" v-model="descripcion")
                        q-btn.q-my-md(label="Crear" @click="crear" color="primary" rounded)
</template>

<script>
import {QDialog, QInput} from 'quasar'
import {db} from '../boot/db'
import firebase from 'firebase'
export default {
    components: {QDialog, QInput},
    props: ['lugar'],
    data: () => ({
        dialog_nuevo_evento: false,
        usuario: {},
        fecha: null,
        descripcion: ''
    }),
    created(){
        this.fecha = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        this.usuario = firebase.auth().currentUser
    },
    methods: {
        crear(){
            let valor = {
                fecha: this.fecha,
                descripcion: this.descripcion,
                usuario: {
                    nombre: this.usuario.displayName,
                    avatar: this.usuario.photoURL,
                    uid: this.usuario.uid
                },
                id_lugar: this.lugar.id,
                lugar: {
                    imagen: this.lugar.imagenes[0],
                    nombre: this.lugar.nombre
                }
            }
            db.collection('incursiones').add(valor).then(r => {
                this.$q.notify('Se creó el evento')
            })
        }
    }
}
</script>

<style>

</style>
