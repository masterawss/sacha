<template lang="pug">
    div.q-mb-xl
        .bg-primary.q-pt-sm(style="padding-bottom: 70px")
            w-input-buscar
        
        w-card-categorias
        
        w-scroll-guias.q-ma-sm(:guias="guias")

        w-scroll-lugar.q-ma-sm(:lugares="lugares" )

        .q-ma-sm
            
        //- q-scroll-area(
        //-     horizontal
        //-     style=" width: 100%")
        //-     | asfd
</template>

<script>
import {QScrollArea,QInput, QImg } from 'quasar'

import WScrollLugar from './components/ScrollLugar'
import WScrollGuias from './components/ScrollGuias'
import WCardCategorias from './components/CardCategorias'
import WInputBuscar from './components/InputBuscar'
import {db} from '../../boot/db'

export default {
    components: {QScrollArea,QInput, QImg, WScrollLugar, WScrollGuias, WInputBuscar, WCardCategorias},
    data: () => ({
        lugares: [],
        guias: []
    }),
    firestore: {
        lugares: db.collection('lugares'),
        guias: db.collection('usuarios').where('is_guia', '==', true)
    }
}
</script>

<style>

</style>
