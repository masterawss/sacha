<template lang="pug">
    q-layout
        q-page-container
            q-toolbar.text-primary.bg-white
                q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)")
                q-toolbar-title 
                    .text-acento {{ lugar.nombre }}
            q-page
                .row.justify-center
                    .col-xs-12.col-sm-12.col-lg-10
                        q-scroll-area(horizontal style=" width: 100%;")
                            .row.no-wrap
                                div(v-for="(imagen, index) in imagenes" :key="index" )
                                    div.q-ma-sm(style="width:200px")
                                        q-img.rounded-borders(
                                        :src="imagen"
                                        :ratio="15/20")

                        q-card.no-shadow
                            q-card-section(v-if="lugar")
                                strong {{lugar.nombre}}
                                .text-grey {{ lugar.ubicacion }}
                                w-chip-categorias(:categorias="lugar.categorias")

                                truncate.q-py-sm( action-class="text-blue" clamp="... Leer más" :length="125" less="Leer menos" :text="lugar.descripcion")

                                w-scroll-guias

                                .q-mt-sm
                                    strong Ubicación
                                gmap-map(:center="lugar.position"
                                :zoom="13"
                                :options="{ disableDefaultUi: true, streetViewControl: false, scaleControl: false, mapTypeControl: false, zoomControl: false, }"
                                style="width: 100%; height: 100px")
                                    GmapMarker( :position="lugar.position")
                                
                            q-circular-progress(v-else)
</template>

<script>
import { QAvatar, QCarousel,QCarouselSlide, QDialog, QCircularProgress, QChip, QScrollArea } from 'quasar'

import truncate from 'vue-truncate-collapsed';

import WScrollGuias from '../Index/components/ScrollGuias'

// import WComentario from '../../components/Comentario'
// import WGuiaList from '../../components/GuiaItemList'
import WListLugarIncursiones from '../../components/ListLugarIncursiones'
import WBtnEmitirEvento from '../../components/BtnEmitirEvento'
import WBtnVerGuias from '../../components/BtnVerGuias'
import WCardSerGuia from '../../components/CardSerGuia'
import WBtnConozcoLugar from '../../components/BtnConozcoLugar'
import WLugarCaracteristicas from './components/LugarCaracteristicas'
import WChipCategorias from './components/ChipCategorias'

import {db} from '../../boot/db'
import firebase from 'firebase'
export default {
    components: {
        QAvatar, 
        truncate,
        WScrollGuias,
        // WComentario, 
        // WGuiaList, 
        QCarousel,
        QScrollArea,
        QCarouselSlide, 
        QDialog, 
        QChip,
        WCardSerGuia, 
        WChipCategorias,
        QCircularProgress, 
        WBtnEmitirEvento, 
        WBtnVerGuias,
        WBtnConozcoLugar,
        WLugarCaracteristicas,
        WListLugarIncursiones},
    data: () => ({
        usuario: {},
        lugar: null,
        slide: 1,
        imagenes: []
    }),
    created () {
        db.collection('lugares').doc(this.$route.params.id).get().then(r => {
            this.lugar = r.data()
            var storageRef = firebase.storage().ref();
            Promise.all(
                this.lugar.imagenes.map(imagen => {
                    var spaceRef = storageRef.child(imagen).getDownloadURL().then(url => {
                        
                        this.imagenes.push(url)
                    })
                })
            )
        })
    },
    // firestore() {
    //     return {
    //         lugar: db.collection('lugares').doc(this.$route.params.id),
    //     }
    // },
    methods: {
    }
}
</script>

<style scoped>
    .img-rounded{
        border-radius: 30px;
    }
    .mt-n{
        margin-top: -30px;
    }.card-rounded{
        -webkit-border-top-left-radius: 20px;
        -webkit-border-top-right-radius: 20px;
        -moz-border-radius-topleft: 20px;
        -moz-border-radius-topright: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        margin-top: -20px
    }
</style>
