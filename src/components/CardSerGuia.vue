<template lang="pug">
    q-card
        q-card-section
            q-toolbar
                q-toolbar-title 
                    span.text-weight-bold ¿Quieres ser guía?
                q-btn(flat round dense icon="close" v-close-popup)

            div.text-center.q-mt-xl
                .text-h5.q-my-md Sé un guía.
                .text-grey
                    | Si conoces el lugar, puedes guiar a quien lo solicite y vivir aventuras conociendo nuevas personas y ganando algo de dinero extra.

            ul.text-grey-8
                li Vivir cerca y estar dispuesto a mostrar el lugar a personas.
                li Conocer todas las formas de llegar al sitio.
                li Conocer modos de transporte alternos.
                li Contar con transporte.
                li Ser amable con los interesados.

            .text-center
                q-btn.q-mt-xl(:loading="loading" label="Me apunto" @click="serGuia" color="secondary")
</template>

<script>
import {db} from '../boot/db'
import firebase from 'firebase'

export default {
    props: ['lugar'],
    async created(){
        
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user, 'asd');
                this.usuario = user
            } else {
                console.log('Desconectado');
            }
        })
        
    },
    data: () => ({
        usuario: {},
        loading: false,
    }),
    methods: {
        serGuia(){
            this.loading = true
            db.collection('lugares').doc(this.lugar.id).collection('guias').add({
                uid: this.usuario.uid,
                nombre: this.usuario.displayName,
                avatar: this.usuario.photoURL
            })
            .then(r => {
                db.collection('usuarios').doc(this.usuario.uid).collection('lugares').add({
                    id: this.lugar.id,
                    nombre: this.lugar.nombre
                })
            })
            .then(r => {
                this.loading = false
                this.$q.dialog({message: 'Se registró correctamente'})
                this.$router.go(-1)
            })
            .catch(e =>{
                this.loading = false
                this.$q.dialog({message: 'Ocurrió un error'})
                console.log('ERROR: ', e);
                
            })
        }    
    }
}
</script>

<style>

</style>
