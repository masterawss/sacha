<template lang="pug">
    q-page
        .row.justify-center
            .col-xs-12.col-sm-12.col-lg-9
                q-card.q-mt-md.shadow-w
                    q-card-section.q-ma-md
                        .row.justify-between
                            .col-lg-7.col-xs-12
                                q-img.img-rounded.q-mb-xl.shadow-w(
                                src="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2017/05/16/591aac1722f1c.jpeg"
                                :ratio="16/9")
                                .text-h6.text-acento.text-primary.q-mb-md Lugar de destino
                                .row.q-my-lg
                                    .col-3.text-grey
                                        q-icon.q-mr-md(size="25px" name="directions_walk")
                                        | 12 minutos
                                    .col-3.text-grey
                                        q-icon.q-mr-md(size="24px" name="place")
                                        | Ubicación
                                    .col-3.text-grey
                                        q-icon.q-mr-md(size="24px" name="local_offer")
                                        | Categoría
                                    .col-3.text-grey
                                        q-icon.q-mr-md(size="24px" name="my_location")
                                        | Distancia
                                .text-subtitle1.text-grey-8 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            .col-lg-4.col-xs-12.q-pt-lg
                                .text-h6.text-acento.text-grey-6 Guías disponibles
                                span.text-grey Conoce el lugar con las mejores personas
                                q-list.q-mt-sm
                                    w-guia-item(v-for="i in 10" :key="i")
                
                q-card.shadow-w
                    q-card-section.q-ma-md
                        .text-h5.q-mb-md Comentarios
                        w-comentario.q-my-sm(v-for="i in 5")

</template>

<script>
import { QAvatar } from 'quasar'
import WComentario from '../../components/Comentario'
import WGuiaItem from '../../components/GuiaItemList'
export default {
    components: {QAvatar, WComentario, WGuiaItem}
}
</script>

<style scoped>
    .img-rounded{
        border-radius: 30px;
    }
    .mt-n{
        margin-top: -30px;
    }
</style>
