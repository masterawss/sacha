<template lang="pug">
    q-layout
        q-page-container
            q-toolbar.text-primary.bg-white
                q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)")
                q-toolbar-title 
                    .text-acento Mis lugares
            q-page
                //- |{{lugares}}
                w-lugar-item-vertical(v-for="lugar in lugares" :key="lugar.id" :lugar="lugar")
                q-page-sticky(position="bottom-right" :offset="[15, 15]")
                    q-btn(rounded no-caps icon="add" color="secondary" label="Registrar lugar" @click="$router.push({name: 'lugar.create'})")

</template>

<script>
import {db} from '../../boot/db'
import firebase from 'firebase'
import {QPageSticky} from 'quasar'

import WLugarItemVertical from '../Lugar/components/LugarItemVertical'

export default {
    components: {QPageSticky, WLugarItemVertical},
    created(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                db.collection('lugares').where('id_creador', '==', user.uid).get().then(querySnapshot => {
                    querySnapshot.forEach( (lugar) => {
                        this.lugares.push(lugar.data())
                    });
                })
            } 
        })
    },
    data: () => ({
        lugares: []
    })
}
</script>

<style>

</style>
