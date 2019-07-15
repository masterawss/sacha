<template lang="pug">
    q-layout
        q-page-container
            q-toolbar.text-primary.bg-white
                q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)")
                q-toolbar-title 
                    .text-acento Perfil
            q-page
                .row.justify-center
                    .col-xs-12.col-sm-12.col-lg-10
                        
                        q-item.q-my-md
                            q-item-section(avatar)
                                q-avatar(color="primary")
                                    img(v-if="usuario.avatar !== null" :src="usuario.avatar")
                                    div.text-white(v-else) {{ usuario.nombre[0] }}

                            q-item-section
                                q-item-label {{ usuario.nombre  }}
                                q-item-label(caption lines="1") @nickname

                            q-item-section(side)
                                q-btn( @click="$router.push({name: 'perfil.settings'})" flat round icon="settings" color="grey")

                        //- .row.q-col-gutter-md
                            .col-lg-3.col-xl-3.col-md-12-col-sm-12.col-xs-12
                                w-card-user.no-shadow(:usuario="usuario")
                        
                        q-tabs(
                        v-model="tab"
                        dense
                        swipeable
                        active-color="primary"
                        indicator-color="primary"
                        align="justify"
                        narrow-indicator)
                            q-tab(name="publicaciones" no-caps label="Publicaciones")
                            q-tab(name="insignias" no-caps label="Insignias")
                            q-tab(v-if="usuario.is_guia" name="informacion" no-caps label="Información")
                        q-tab-panels(v-model="tab" animated )
                            q-tab-panel.q-mt-sm(name="publicaciones" style="padding:0px")
                                w-card-lugar-visitado

                            q-tab-panel(name="insignias")
                                w-insignias
                            q-tab-panel(v-if="usuario.is_guia" name="informacion")
                                | Información
                            
                        
</template>

<script>
import { QAvatar, QBadge, QTab, QTabs, QTabPanel, QTabPanels } from 'quasar'
import WCardLugar from '../../components/CardLugar'
import WCardUser from './components/CardUser'
import WCardIncursion from '../../components/CardIncursion'
import WInsignias from './components/Insignias.vue'

import WCardLugarVisitado from '../Lugar/components/CardLugarVisitado'

import {db} from '../../boot/db'
export default {
    components: { QAvatar, QBadge, WCardLugar, WCardUser, QTab, QTabs, QTabPanel, QTabPanels, WCardIncursion, WInsignias, WCardLugarVisitado },
    firestore(){
        let query =  db.collection('usuarios').doc(this.$route.params.id)
        return {
            usuario: query,
            lugares: query.collection('lugares'),
            incursiones: db.collection('incursiones').where('usuario.uid', '==', 'qIHF57iWFtapg7h1MOWuhSEy6Tr1')
        }
    },
    data: () => ({
        tab: 'publicaciones',
        is_mine: false,
        usuario: {},
        lugares: [],
        incursiones: []
    }),
    created() {
        if(this.$route.params.id == undefined ){
            this.is_mine = true
        }else{
            db.collection('usuarios').doc(this.$route.params.id).get().then(response => {
                console.log('RESPUESTA: ', response.data())
                this.usuario = response.data()
            })
        }
    }
}
</script>

<style>

</style>
