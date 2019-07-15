<template lang="pug">
    q-page(style="width: 100%; height: 100%")
        q-tab-panels(v-model="tab" animated )
            q-tab-panel(name="lugares" style="margin: 0px; padding:0px")
                w-home
                //- w-lugares
            q-tab-panel(name="explorar" style="margin: 0px; padding:0px")
                w-map
            q-tab-panel(name="notificaciones")
                | Notificaciones
        q-tabs.fixed-bottom.text-primary.bg-white.full-width.shadow-2(v-model="tab" switch-indicator no-caps inline-label align="justify" :breakpoint="0")
            q-tab(name="lugares" icon="fa fa-home")
            q-tab(name="explorar" icon="fa fa-globe-americas")
            q-tab(name="notificaciones" icon="fa fa-bell")
</template>

<script>
import { QTabs, QTab, QTabPanel, QTabPanels } from 'quasar'
import WMap from './Index/Map'
import WLugares from '../pages/Lugar/Index'
import WHome from './Index/Home'
export default {
    components: {
        QTabs, QTab, WMap, QTabPanel, QTabPanels, WLugares, WHome
    },
    data: () => ({
        tab: 'lugares',
    }),
    
}
</script>
