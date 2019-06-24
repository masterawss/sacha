<template lang="pug">
    q-page
        .row.justify-center
            .col-xs-12.col-sm-12.col-lg-10
                q-carousel(
                    swipeable
                    animated
                    v-model="slide"
                    arrows
                    infinite
                    autoplay
                    transition-prev="slide-right"
                    transition-next="slide-left")
                    q-carousel-slide(:name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg")
                    q-carousel-slide(:name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg")
                    q-carousel-slide(:name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg")
                    q-carousel-slide(:name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg")

                q-card.card-rounded
                    q-card-section
                        .row.justify-between
                            .col-lg-7.col-xs-12
                                .text-h6.text-acento.text-grey-7.q-my-md {{ lugar.nombre }}
                                .row.justify-between.q-my-md
                                    .col-6.text-center
                                        q-btn(flat color="primary" rounded label="Conozco el lugar!")
                                    .col-6.text-center
                                        q-btn.gradient.text-white(rounded unelevated label="¡Quiero conocer!")
                                .row.q-my-lg
                                    .col-lg-3.col-6.text-grey.q-mt-sm
                                        q-icon.q-mr-md(size="25px" name="directions_walk")
                                        | {{ lugar.caminata }} minutos
                                    .col-lg-3.col-6.text-grey.q-mt-sm
                                        q-icon.q-mr-md(size="24px" name="place")
                                        | {{ lugar.ubicacion }}
                                    .col-lg-3.col-6.text-grey.q-mt-sm
                                        q-icon.q-mr-md(size="24px" name="local_offer")
                                        | {{ lugar.categoria }}
                                    .col-lg-3.col-6.text-grey.q-mt-sm
                                        q-icon.q-mr-md(size="24px" name="my_location")
                                        | {{ lugar.distancia }} km
                                .text-subtitle1.text-grey-8 {{ lugar.descripcion }}
                                //- q-btn.q-my-md(flat color="secondary" label="¡Conozco este lugar!" icon="insert_emoticon")
                                //- .text-center.q-my-md
                            //- .col-lg-4.col-xs-12.q-pt-lg
                                .text-h6.text-acento.text-grey-6 Guías disponibles
                                span.text-grey Conoce el lugar con las mejores personas
                                q-list.q-mt-sm
                                    .text-center.q-py-lg(v-if="guias.length == 0")
                                        strong.text-h6 Sé el primer guía de este lugar
                                        br
                                        strong.text-grey No existe un guía registrado para este lugar
                                        q-btn(label="¡Quiero ser guía!" no-caps flat color="secondary")
                                    div
                                        w-guia-item(v-for="i in guias" :key="i")
                            
                            //- .col-12
                                .text-h5.q-mb-md.q-mt-lg Comentarios
                                w-comentario.q-my-sm(v-for="i in 5" :key="i")
                

                //- q-card.q-mt-md.shadow-w
                    q-card-section.q-ma-md
                        .row.justify-between
                            .col-lg-7.col-xs-12
                                q-img.img-rounded.q-mb-xl.shadow-w(
                                :src="lugar.imagen"
                                :ratio="16/9")
                                .text-h6.text-acento.text-primary.q-mb-md {{ lugar.nombre }}
                                .row.q-my-lg
                                    .col-3.text-grey
                                        q-icon.q-mr-md(size="25px" name="directions_walk")
                                        | {{ lugar.caminata }} minutos
                                    .col-3.text-grey
                                        q-icon.q-mr-md(size="24px" name="place")
                                        | {{ lugar.ubicacion }}
                                    .col-3.text-grey
                                        q-icon.q-mr-md(size="24px" name="local_offer")
                                        | {{ lugar.categoria }}
                                    .col-3.text-grey
                                        q-icon.q-mr-md(size="24px" name="my_location")
                                        | {{ lugar.distancia }} km
                                .text-subtitle1.text-grey-8 {{ lugar.descripcion }}
                                q-btn.q-my-md(flat color="secondary" label="¡Conozco este lugar!" icon="insert_emoticon")
                            .col-lg-4.col-xs-12.q-pt-lg
                                .text-h6.text-acento.text-grey-6 Guías disponibles
                                span.text-grey Conoce el lugar con las mejores personas
                                q-list.q-mt-sm
                                    .text-center.q-py-lg(v-if="guias.length == 0")
                                        strong.text-h6 Sé el primer guía de este lugar
                                        br
                                        strong.text-grey No existe un guía registrado para este lugar
                                        q-btn(label="¡Quiero ser guía!" no-caps flat color="secondary")
                                    div
                                        w-guia-item(v-for="i in guias" :key="i")
                            
                            .col-12
                                .text-h5.q-mb-md.q-mt-lg Comentarios
                                w-comentario.q-my-sm(v-for="i in 5" :key="i")
                
                //- q-card.shadow-w
                    q-card-section.q-ma-md
                        .text-h5.q-mb-md Comentarios
                        w-comentario.q-my-sm(v-for="i in 5")

</template>

<script>
import { QAvatar, QCarousel,QCarouselSlide } from 'quasar'
import WComentario from '../../components/Comentario'
import WGuiaItem from '../../components/GuiaItemList'
import {db} from '../../boot/db'

export default {
    components: {QAvatar, WComentario, WGuiaItem, QCarousel,QCarouselSlide},
    data: () => ({
        lugar: {},
        slide: 1
    }),
    firestore() {
        return {
            lugar: db.collection('lugares').doc(this.$route.params.id),
            guias: db.collection('lugares').doc(this.$route.params.id).collection('guias'),
        }
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
