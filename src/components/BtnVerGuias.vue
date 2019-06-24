<template lang="pug">
    q-btn(rounded color="primary" outline no-caps unelevated label="Ver guías" @click="dialog_guias = true")
        q-dialog(
            v-model="dialog_guias"
            persistent
            maximized
            transition-show="slide-up"
            transition-hide="slide-down")
            q-card
                q-card-section
                    q-toolbar
                        q-toolbar-title 
                            span.text-weight-bold Conoce el lugar
                        q-btn(flat round dense icon="close" v-close-popup)
                    div
                        strong Hora de excursión
                        .text-center.q-my-lg
                            .text-grey Crea un evento de incursión y conoce gente
                            q-btn(rounded label="Crear" flat color="primary")

                    .q-mt-md
                        strong Guías disponibles
                        w-guia-list(:lugar="lugar")
</template>

<script>
import {QDialog} from 'quasar'
import WGuiaList from './GuiaItemList'
export default {
    components: {QDialog, WGuiaList},
    props: ['lugar'],
    data: () => ({
        dialog_guias: false
    })
}
</script>

<style>

</style>
