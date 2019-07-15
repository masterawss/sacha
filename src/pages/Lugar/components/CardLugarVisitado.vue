<template lang="pug">
    div
        q-item(dense)
            q-item-section(avatar)
                q-avatar
                    img(src="https://cdn.quasar.dev/img/avatar6.jpg")
            q-item-section
                q-item-label 
                    small
                        strong Anthony &nbsp
                        | ha visitado &nbsp
                        strong Lugar de visita
                q-item-label(caption lines="1")
                    small
                        | Guiado por: &nbsp
                        strong Anthony Will Solsol Soplin
        q-scroll-area(horizontal width="100%")
            .row.no-wrap.q-col-gutter-sm
                div(v-for="lugar,i in 10" :key="i" )
                    div(style="width:90px")
                        q-img( :ratio="10/12" src="https://cdn.quasar.dev/img/avatar6.jpg" )
</template>

<script>
import {QScrollArea} from 'quasar'
export default {
    components: {QScrollArea}
}
</script>

<style>

</style>
