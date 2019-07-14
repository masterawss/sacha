<template lang="pug">
    q-page
        .row.justify-center
            .col-xs-12.col-sm-12.col-lg-10
                .row.q-col-gutter-md
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
                    q-tab(name="publicaciones" label="Publicaciones")
                    q-tab(name="insignias" label="Insignias")
                q-tab-panels(v-model="tab" animated)
                    q-tab-panel(name="insignias")
                        w-insignias
                    q-tab-panel(name="publicaciones")
                        //- .text-h6 Incursiones
                        //- | {{ incursiones }}
                        w-card-incursion.q-my-sm( horizontal :incursion="incursion" v-for="incursion in incursiones" :key="incursion.id")
                    //- .col-lg-9.col-xl-9.col-md-12-col-sm-12.col-xs-12
                        div(v-if="lugares.length > 0")
                            .text-grey-7.q-ma-md Lugares que conoce:
                            div(v-for="lugar in lugares" :key="lugar.id")
                                w-card-lugar.shadow-w.q-ma-sm( :lugar="lugar")
                        .text-center.text-grey(v-else)
                            .q-my-xl No se registró visitas
                    
                        
</template>

<script>
import { QAvatar, QBadge, QTab, QTabs, QTabPanel, QTabPanels } from 'quasar'
import WCardLugar from '../../components/CardLugar'
import WCardUser from './components/CardUser'
import WCardIncursion from '../../components/CardIncursion'
import WInsignias from './components/Insignias.vue'
import {db} from '../../boot/db'
export default {
    components: { QAvatar, QBadge, WCardLugar, WCardUser, QTab, QTabs, QTabPanel, QTabPanels, WCardIncursion, WInsignias },
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
        usuario: {},
        lugares: [],
        incursiones: []
    })
}
</script>

<style>

</style>
