<template lang="pug">
q-layout
        q-page-container
            q-toolbar.text-white.bg-primary
                q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)")
                q-toolbar-title 
                    .text-acento {{ lugar.nombre }}
            q-page
                .row.justify-center
                    .col-xs-12.col-sm-12.col-lg-10
                        q-carousel(
                        v-model="slide"
                        swipeable
                        animated
                        arrows
                        infinite
                        autoplay
                        transition-prev="slide-right"
                        transition-next="slide-left")
                            q-carousel-slide( v-for="(imagen, index) in lugar.imagenes" :key="index"
                                :name="index" :img-src="imagen")

                        q-card
                            q-card-section(v-if="lugar")
                                strong {{lugar.nombre}}
                                .text-grey {{ lugar.ubicacion }}
                                q-chip(dense color="red" text-color="white" ) Aventura
                                q-chip(dense color="cyan" text-color="white" ) Acuático
                                q-chip(dense color="green" text-color="white" ) Selva
                                p {{ lugar.descripcion }}

                                gmap-map(:center="{ lat: lugar.position.latitude, lng: lugar.position.longitude  }"
                                :zoom="13"
                                :options="{ disableDefaultUi: true, streetViewControl: false, scaleControl: false, mapTypeControl: false, zoomControl: false, }"
                                style="width: 100%; height: 200px")
                                    GmapMarker( :position="{ lat: lugar.position.latitude, lng: lugar.position.longitude  }")
                                
                                q-btn.full-width.shadow-w.q-my-md(label="Visitar" @click="$router.push({name:'lugar.visitar', params: { id: lugar.id } })" color="primary")
                                //- .row.justify-between
                                //-     .col-lg-7.col-xs-12
                                //-         .text-h6.text-acento.text-grey-7.q-my-md {{ lugar.nombre }}
                                //-         .row.justify-between.q-my-md
                                //-             .col-6.text-center
                                //-                 w-btn-conozco-lugar(:lugar="lugar")
                                //-             .col-6.text-center
                                //-                 w-btn-ver-guias(:lugar="lugar")
                                //-                 w-btn-emitir-evento(:lugar="lugar")

                                //-         w-list-lugar-incursiones(:lugar="lugar")
                                //-         w-lugar-caracteristicas(:lugar="lugar")
                                //-         .text-subtitle1.text-grey-8 {{ lugar.descripcion }}
                            q-circular-progress(v-else)
</template>

<script>
import { QAvatar, QCarousel,QCarouselSlide, QDialog, QCircularProgress, QChip } from 'quasar'
// import WComentario from '../../components/Comentario'
// import WGuiaList from '../../components/GuiaItemList'
import WListLugarIncursiones from '../../components/ListLugarIncursiones'
import WBtnEmitirEvento from '../../components/BtnEmitirEvento'
import WBtnVerGuias from '../../components/BtnVerGuias'
import WCardSerGuia from '../../components/CardSerGuia'
import WBtnConozcoLugar from '../../components/BtnConozcoLugar'
import WLugarCaracteristicas from './components/LugarCaracteristicas'
import {db} from '../../boot/db'
import firebase from 'firebase'
export default {
    components: {
        QAvatar, 
        // WComentario, 
        // WGuiaList, 
        QCarousel,
        QCarouselSlide, 
        QDialog, 
        QChip,
        WCardSerGuia, 
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
    }),
    firestore() {
        return {
            lugar: db.collection('lugares').doc(this.$route.params.id),
        }
    },
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
