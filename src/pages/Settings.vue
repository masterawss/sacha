<template lang="pug">
    q-layout
        q-page-container
            q-page
                q-toolbar.text-primary
                    q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)" )
                    q-toolbar-title
                        | Configuración
                q-list( separator)
                    q-item(clickable v-ripple @click="$router.push({name: 'perfil.edit'})")
                        q-item-section Perfil
                    q-item(clickable v-ripple @click="$router.push({name: 'perfil.mis_lugares'})")
                        q-item-section Administrar
                    q-item(clickable v-ripple @click="$router.push({name: 'perfil.subscripcion'})")
                        q-item-section Mi subscripción
                    q-item(clickable v-ripple)
                        q-item-section Configuración
                    q-item(clickable v-ripple @click="logout")
                        q-item-section Cerrar sesión
</template> 

<script>
export default {
    methods: {
        logout(){
            this.$store.dispatch('user/logout')
        }   
    }
}
</script>