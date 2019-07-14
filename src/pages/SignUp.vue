<template lang="pug">
    q-layout
        q-page-container
            q-page
                .text-center.q-mx-md
                    .text-h5.q-pt-md Registrarse
                    q-form(@submit="signUp")
                        q-input(label="Nombre completo" v-model="nombre" 
                            ref="nombre"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Ingrese su nombre']" )
                        //- q-input(label="Fecha de nacimiento" v-model="fecha_nacimiento" type="date" )
                        
                        q-input(label="Correo electrónico" v-model="email" 
                            ref="email"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Ingrese su correo electrónico']" )

                        q-input(label="Contraseña" type="password" v-model="password" 
                            ref="password"
                            lazy-rules
                            :rules="[   val => val && val.length > 0 || 'Ingrese su contraseña', val => val && val.length > 4 || 'Ingrese una contraseña más segura' ]" )
                        q-input(label="Repite tu contraseña" type="password" v-model="password2"
                            ref="password2"
                            lazy-rules
                            :rules="[   val => val && val.length > 0 || 'Ingrese su contraseña', val => val && val == password || 'Las contraseñas no coinciden' ]" )
                        q-btn.full-width.q-my-md(unelevated type="submit" @click="signUp" label="Crear cuenta" color="primary" rounded)
                    
</template>

<script>
import {QInput, QForm } from 'quasar'
import {db} from '../boot/db'
export default {
    components: { QInput, QForm },
    data: () => ({
        email: '',
        password: '',
        password2: '',
        nombre: '',
        // fecha_nacimiento: '',
        // lugar_origen: '',
    }),
    methods: {
        signUp () {
            this.$refs.nombre.validate()
            this.$refs.email.validate()
            this.$refs.password.validate()
            this.$refs.password2.validate()

            if (this.$refs.nombre.hasError || this.$refs.email.hasError || this.$refs.password.hasError || this.$refs.password2.hasError  ) {
                this.$q.notify({
                    message: 'Ingrese correctamente los datos.'
                })
                return
            }

            if(this.password == this.password2){
                this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( response => {
                    console.log('USUARIO CREADO: ', response.user);
                    
                    db.collection('usuarios').doc(response.user.uid).set({
                        nombre: this.nombre,
                        avatar: null,
                        email: response.user.email,  
                    }).then(r => {
                        this.$router.push({name: 'index'})
                    }).catch(e => {
                        this.$q.notify({message: 'Error: ' + e})
                        console.log('Error ingresando datos');
                    })
                }).catch(error => {
                    console.log('Error al crear al usuario: ' + error);
                    this.$q.notify({
                        message: error
                    })
                })
            }else{
                this.$q.notify({
                    message: 'Las contraseñas no coinciden'
                })
            }
        }
    }
}
</script>

<style>

</style>
