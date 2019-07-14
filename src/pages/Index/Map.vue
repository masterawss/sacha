<template lang="pug">
    gmap-map(
        :center="center"
        :zoom="13"
        :options="{ styles: styles[1], disableDefaultUi: true, streetViewControl: false, scaleControl: false, mapTypeControl: false, zoomControl: false, }"
        :styles="styles[0]"
        style="width: 100%; height: 85vh")
            GmapMarker(
                :key="index"
                :icon="icon.unvisited"
                v-for="(lugar, index) in lugares"
                :position="{ lat: lugar.position.latitude, lng: lugar.position.longitude  }"
                :clickable="true"
                @click="$router.push({name: 'lugar.show', params: { id: lugar.id } })")
</template>

<script>
import {styles} from '../../boot/google_maps'
import {db} from '../../boot/db'
export default {
    firestore: {
        lugares: db.collection('lugares')
    },
    created(){
        console.log('LUGA');
        
        if (navigator.geolocation) {
            console.log('GEOLOCALIZACION');
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }else{
            console.log('NO TIENE GEO');
            
        }
    },
    data: () => ({
        lugares: [],
        center: {
            lat: -6.0610914,
            lng: -77.1731626
        },
        styles,
        icon: {
            visited: '../statics/marker_icon_ready.png',
            unvisited: '../statics/marker_icon.png'
        },
        markers: [
            // {
            //     id: 'fwnjtGmDbGYSLXBHm5uq',
            //     status: 'visited',
            //     position: {
            //         lat: -6.0548775,
            //         lng: -77.1639256
            //     }
            // },
            // {
            //     id: 'fwnjtGmDbGYSLXBHm5uq',
            //     status: 'unvisited',
            //     position: {
            //         lat: -6.0648875,
            //         lng: -77.1699256
            //     }
            // }
        ]
    }),
    methods: {
        showPosition(position) {
            this.center.lat = position.coords.latitude
            this.center.lng = position.coords.longitude
        }
    }
}
</script>

<style>

</style>
