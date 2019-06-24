<template lang="pug">
    div
        q-circular-progress(
            v-if="loading"
            indeterminate)
        q-btn( v-else-if="already_know" @click="quitarConocer" flat no-caps color="grey" rounded label="Ya conoces el lugar")
        q-btn( v-else flat no-caps color="primary" rounded label="Conozco el lugar!" @click="dialog_conozco = true")

        q-dialog(
            v-model="dialog_conozco"
            persistent
            maximized
            transition-show="slide-up"
            transition-hide="slide-down")
            w-card-ser-guia(:lugar="lugar")

</template>

<script>
import {QDialog, QCircularProgress} from 'quasar'
import WCardSerGuia from './CardSerGuia'
import firebase from 'firebase'
import {db} from '../boot/db'
export default {
    props: ['lugar'],
    components: {QDialog, WCardSerGuia, QCircularProgress},
    data: () => ({
        dialog_conozco: false,
        already_know: false,
        loading: false
    }),
    created(){
        this.loading = true
        this.usuario = firebase.auth().onAuthStateChanged(user => {
            db.collection('lugares').doc(this.$route.params.id).collection('guias').where("uid", '==', user.uid).get()
            .then(r => {
                this.loading = false
                this.already_know = !r.empty
            }).catch(e => {
                this.loading = false
            })
        })
    },
    methods: {
        quitarConocer(){
            // this.$q.dialog({
            //     title: 'Ya conoces el lugar',
            //     message: '¿Deseas quitarlo de tu lista de lugares que conoces?',
            //     ok: 'Quitar',
            //     cancel: 'Cancelar'
            // }).onOk(r => {
            //     let query = db.collection('lugares').doc(this.$route.params.id).collection('guias')
            //     query.where("uid", "==", firebase.auth().currentUser.uid)
            //     .get()
            //     .then(querySnapshot => {
            //         querySnapshot.forEach(snap => {
            //             query.doc(snap).delete()
            //         });
            //     })
            //     .then(r => {
            //         this.$q.notify('Se quitó el lugar de su lista')
            //     })
            // })
        }
    }
}
</script>

<style>

</style>
