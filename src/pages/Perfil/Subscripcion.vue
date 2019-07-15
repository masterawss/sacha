<template lang="pug">
    q-layout
        q-page-container
            q-toolbar.text-primary.bg-white
                q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)")
                q-toolbar-title 
                    .text-acento Mis subscripciones
            q-page.q-mx-lg
                .text-center(v-if="!is_guia")
                    h6 ¿Aún no eres guía?

                    .text-h6.text-primary.text-acento Haz de Rupi tu lugar de trabajo.

                    p.text-grey ¿No estás seguro de ser un Ruper? Te regalemos tres meses gratis :)
                    q-btn.q-mt-md( unelevated no-caps label="Quiero ser guía" color="primary" rounded @click="ser_guia")
                .text-center(v-else)
                    .text-h6.text-primary.text-acento.q-py-lg.q-mt-xl ¡Ya eres un Ruper!
                    p.text-grey Guía a las personas a grandes aventuras y sé parte de momentos inolvidables
</template>

<script>
import {db} from '../../boot/db'
import firebase from 'firebase'
export default {
    data: () => ({
        is_guia: false
    }),
    created(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                db.collection('usuarios').doc(user.uid).get().then(r => {
                    let user = r.data()
                    console.log('USUARIO:',user);
                    
                    if(user.is_guia){
                        this.is_guia = user.is_guia
                    }
                })
            }
        })
    },
    methods: {
        ser_guia(){
            // db.collection('usuarios').where('is_guia', '==', true)
            firebase.auth().onAuthStateChanged(user => {
                if(user){
                    db.collection('usuarios').doc(user.uid).add({
                        is_guia: true
                    }).then(r => {
                        this.$q.notify({message: '¡Felicidades, ya eres guía!'})
                    })
                }
            })
        }
    }
}
</script>

<style>

</style>
