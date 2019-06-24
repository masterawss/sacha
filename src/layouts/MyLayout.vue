<template lang="pug">
  q-layout(view='hHh lpR fFf')
    q-header(unelevated)
      q-toolbar
        q-btn(flat='' dense='' round='' @click='leftDrawerOpen = !leftDrawerOpen' aria-label='Menu')
          q-icon(name='menu')
        q-toolbar-title(@click="$router.push({name: 'lugar.index'})")
          w-logo
        q-btn.q-mx-sm(v-if="!$q.screen.lt.lg" label="Lugares" @click="$router.push({name: 'lugar.index'})" flat no-caps)
        q-btn.q-mx-sm(v-if="!$q.screen.lt.lg" label="Incursiones" flat no-caps)

        q-btn(v-if="loading" flat :loading="loading")
        q-btn(v-else-if="!currentUser" label="Iniciar sesión" rounded outline no-caps @click="openModalLogin")
        q-btn(v-else flat no-caps )
          q-avatar
            img(:src="currentUser.photoURL")  
          span.q-ml-sm(v-if="!$q.screen.lt.lg") {{ currentUser.displayName }}
          q-menu(fit)
            q-list(style="min-width: 100px")
              q-item(clickable v-close-popup @click="$router.push({name: 'perfil.show', params: { id: currentUser.uid} })")
                q-item-section Perfil
              q-item(clickable v-close-popup)
                q-item-section Configuración
              q-item(clickable v-close-popup @click="logout")
                q-item-section Cerrar sesión
        //- q-btn.q-mx-md(label="Registrarse"  rounded color="secondary" unelevated no-caps)
    w-drawer( v-if="$q.scr" :open="leftDrawerOpen")
    q-page-container
      w-modal-login

      router-view
</template>

<script>
import { openURL, QAvatar, QMenu } from 'quasar'
import WDrawer from '../components/drawer'
import WLogo from '../components/Logo'
import WModalLogin from '../components/ModalLogin'

import firebase from 'firebase'

export default {
  name: 'MyLayout',
  components: { WDrawer, WLogo, WModalLogin, QAvatar, QMenu },
  async created (){
    // let auth = firebase.auth().currentUser
    // console.log('AUTH', auth);
    
    // this.$store.commit('user/setUser', firebase.auth().currentUser)
    // console.log('USER:', this.currentUser);
    // this.$store.commit('user/setUser', )
    // console.log('USUARIO:', firebase.auth().currentUser);
    this.loading = true
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('USUARIO desde MyLayout :' , user);
      } else 
        console.log('Desconectado');
      this.loading = false
      this.$store.commit('user/setUser', JSON.parse(JSON.stringify(user)))
    })
    // // this.currentUser = firebase.auth().currentUser
    // console.log(this.currentUser);
    
  },
  computed: {
    currentUser: {
      get (){
        return this.$store.state.user.user
      }
    }
  },
  data () {
    return {
      // currentUser: null,
      modal_login: false,
      leftDrawerOpen: false,
      loading: false
    }
  },
  methods: {
    openURL,
    openModalLogin() {
        this.$store.commit('user/stateDialogLogin', true)
    },
    logout(){
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style>
</style>
