<template lang="pug">
    q-page(style="width: 100%; height: 100%")
        gmap-map(
        :center="center"
        :zoom="13"
        :options="{ styles: styles[2], disableDefaultUi: true }"
        :styles="styles[0]"
        style="width: 100%; height: 85vh")
            GmapMarker(
                :key="index"
                :icon="icon[m.status]"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                @click="center=m.position")

        q-tabs.fixed-bottom.text-primary.bg-white.full-width(v-model="tab"  no-caps inline-label align="justify" :breakpoint="0")
            q-tab(name="lista" icon="fa fa-home")
            q-tab(name="explorar" icon="fa fa-globe-americas")
            q-tab(name="alarms" icon="fa fa-bell")
</template>

<script>
import { QTabs, QTab, QPageSticky } from 'quasar'
import {styles} from '../boot/google_maps'
export default {
    components: {
        QTabs, QTab, QPageSticky
    },
    data: () => ({
        tab: 'explorar',
        center: {
            lat: 10,
            lng: 10
        },
        styles,
        icon: {
            visited: '../statics/marker_icon_ready.png',
            unvisited: '../statics/marker_icon.png'
        },
        markers: [
            {
                status: 'visited',
                position: {
                    lat: -6.0548775,
                    lng: -77.1639256
                }
            },
            {
                status: 'unvisited',
                position: {
                    lat: -6.0648875,
                    lng: -77.1699256
                }
            }
        ]
    }),
    created(){
        if (navigator.geolocation) {
            console.log('GEOLOCALIZACION');
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }else{
            console.log('NO TIENE GEO');
            
        }
    },
    methods: {
        showPosition(position) {
            this.center.lat = position.coords.latitude
            this.center.lng = position.coords.longitude
        }
    }
}
</script>
