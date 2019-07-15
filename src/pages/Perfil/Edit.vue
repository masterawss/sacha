<template lang="pug">
    q-layout
        q-page-container
            q-toolbar.text-primary.bg-white
                q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)")
                q-toolbar-title 
                    .text-acento Editar usuario
            q-page.q-mx-lg
                //- w-perfil-update
                q-input(label="Nombre" v-model="usuario.nombre" dense)
                q-btn.full-width.q-mt-md(unelevated color="primary" label="Guardar")
</template>

<script>
import {QInput} from 'quasar'
import firebase from 'firebase'
import {db} from '../../boot/db'
import WPerfilUpdate from './components/ProfileUpload'
export default {
    components: {QInput, WPerfilUpdate},
    data: () => ({
        usuario : {
            nombre: ''
        }
    }),
    created (){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                db.collection('usuarios').doc(user.uid).get().then(r => {
                    this.usuario = r.data()
                })
            }
        })
    }
}
</script>

<style>

</style>
