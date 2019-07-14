<template lang="pug">
    q-layout
        q-page-container
            q-page.flex-center
                .text-center
                    .text-h5.text-acento.q-pt-lg Rupi
                    .text-grey.q-my-sm Haz de tus aventuras un reto
                    img.q-px-xl(src="../statics/landing2.png" style="width:100%")

                .q-mx-md.text-center
                    q-input(label="Correo electrónico" v-model="email" ref="email" type="email"
                        lazy-rules
                        :rules="[   val => val && val.length > 0 || 'Ingrese su correo electrónico' ]" )
                    q-input(label="Contraseña" type="password" v-model="password" ref="password"
                        lazy-rules
                        :rules="[   val => val && val.length > 0 || 'Ingrese su contraseña' ]" )
                    q-btn.full-width.q-my-md(:loading="is_login_email_password_loading" unelevated label="Ingresar" @click="loginEmailPassword()" color="primary" rounded)
                    q-btn(  label="Regístrate aquí" @click="$router.push({name: 'signup'})" flat dense no-caps link color="secondary")
                    .text-grey O inicia sesión con:
                    .row.q-col-gutter-sm.q-mt-sm
                            .col-lg-6.col-6
                                q-btn.shadow-w.full-width( no-caps color="indigo" @click="login('facebook')" )
                                    img(src="http://www.sarfrance.net/pics/b/0/452_facebook-logo-png.jpg" height="20px")
                                    | &nbsp&nbsp&nbsp
                                    span Facebook
                            .col-lg-6.col-6
                                q-btn.shadow-w.full-width( no-caps @click="login('google')" )
                                    img(src="https://cdn3.iconfinder.com/data/icons/google-suits-1/32/1_google_search_logo_engine_service_suits-512.png" height="20px")
                                    | &nbsp&nbsp&nbsp
                                    span Google

</template>

<script>
import {QInput } from 'quasar'
export default {
    components: { QInput },
    data: () => ({
        email: '',
        password: '',
        is_login_email_password_loading: false
    }),
    methods: {
        login(prov){
            this.$store.dispatch('user/signInAction', prov)
            // this.$router.push({name: 'index'})
        },
        loginEmailPassword(){

            this.$refs.email.validate()
            this.$refs.password.validate()

            if (this.$refs.email.hasError || this.$refs.password.hasError ) {
                this.$q.notify({
                    message: 'Ingrese correctamente los datos.'
                })
                return
            }

            this.is_login_email_password_loading = true

            this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
                this.$router.push({name: 'index'})
                this.is_login_email_password_loading = false
            }).catch(e => {
                console.log('Error: ', e);
                
                this.$q.notify({message: e.message})
                this.is_login_email_password_loading = false
            })
        }
    }
}
</script>

<style>

</style>
