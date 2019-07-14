<template lang="pug">
    div
        .row.items-center
            .col-8
                strong Guías disponibles
            .col-4.text-right
                q-btn(flat label="Ver más" dense no-caps)
        q-scroll-area(
        horizontal
        style=" width: 100%;")
            .row.no-wrap
                div(v-for="n in 10" :key="n" class="q-pa-sm")
                    div.text-center( style="width: 90px")
                        q-avatar
                            q-img(src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg")
                        br
                        small Nombre Nombre
</template>

<script>
import {QScrollArea} from 'quasar'
export default {
    components: {QScrollArea}
}
</script>

<style>

</style>
