<template lang="pug">
    q-layout
        q-page-container
            q-toolbar.bg-white(:class=" 'text-'+categorias[categoria].color ")
                q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)")
                q-toolbar-title 
                    .text-acento {{ categoria }}
            q-page.q-ma-sm
                w-lugar-item-vertical(v-for="lugar in lugares" :lugar="lugar" :key="lugar.id")
</template>

<script>

import {db} from '../../boot/db'
import WLugarItemVertical from './components/LugarItemVertical'

export default {
    created(){
        if(this.$route.params.categoria){
            this.categoria = this.$route.params.categoria
        }
    },
    components: {WLugarItemVertical},
    data: () => ({
        lugares: [],
        categoria: '',
        categorias: {
            'Aventura' : {   color: 'red' },
            'Acuático' : {  color: 'cyan' },
            'Selva'     : { color: 'green' },
            'Altura'     : {color: 'indigo' },
            'Desértico'  : {color: 'orange' },
            'Pacífico' : {  color: 'teal' },

        },
    }),
    firestore() {
        let param = 'categorias.'+this.$route.params.categoria.toLowerCase()
        console.log('LUGAR', param);
        
        return {
            lugares: db.collection('lugares').where(param, '==', true)
        }
    }
}
</script>

<style>

</style>
