<template lang="pug">
    q-dialog(v-model="opened" :maximized="$q.screen.lt.lg")
        q-card(style="width: 500px; ")
            q-toolbar

                q-btn(flat round dense icon="close"  @click="close")
            q-card-section.q-pa-xl
                .text-center.text-h6.q-mb-md Iniciar sesión con:
                //- | {{ opened }}
                .row.q-col-gutter-sm.q-mb-md
                    .col-lg-6.col-12
                        q-btn.full-width( no-caps color="indigo" size="lg" @click="login('facebook')" )
                            img(src="http://www.sarfrance.net/pics/b/0/452_facebook-logo-png.jpg" height="20px")
                            | &nbsp&nbsp&nbsp
                            span Facebook
                    .col-lg-6.col-12
                        q-btn.full-width( no-caps @click="login('google')" size="lg" )
                            img(src="https://cdn3.iconfinder.com/data/icons/google-suits-1/32/1_google_search_logo_engine_service_suits-512.png" height="20px")
                            | &nbsp&nbsp&nbsp
                            span Google

                q-input(label="Correo electrónico" )
                q-input(label="Contraseña" )
                q-btn.full-width.q-my-md(unelevated label="Ingresar" color="primary" rounded)
            //- q-btn.full-width.q-my-sm(no-caps label="Continuar con facebook" color="indigo" rounded)
            //- q-btn.full-width(no-caps label="Continuar con google" color="red" rounded)

            //- .text-center O ingrese con: 
            //- .row.justify-around.q-my-md
                
            //-     q-btn(label="Facebook" color="blue" rounded)
                q-btn(label="Google" color="red" rounded)
</template>

<script>
import {QDialog, QSpace, QInput} from 'quasar'

import firebase from 'firebase'

export default {
    components: {QDialog, QSpace, QInput},
    computed: {
        opened() {
            
                return this.$store.state.user.dialog_login
            
        }
    },
    methods: {
        close(){
            this.$store.commit('user/stateDialogLogin', false)
        },
        login(prov){
            this.$store.dispatch('user/signInAction', prov)
        },
    }
}
</script>

<style>

</style>
