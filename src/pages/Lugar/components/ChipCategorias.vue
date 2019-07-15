<template lang="pug">
    div
        q-chip( v-for="bool,categoria in categorias" :key="categoria" dense :color="categorias_color[categoria]" text-color="white" ) {{ categoria }}
</template>

<script>
import {QChip} from 'quasar'
export default {
    components: {QChip},
    props: ['categorias'],
    data: () => ({
        categorias_color: 
            {
                'aventura'  : 'red',
                'acuático'  : 'cyan',
                'selva'     : 'green',
                'altura'    : 'indigo',
                'sesértico' : 'orange',
                'pacífico'  : 'teal',
            }
        
    })
}
</script>

<style>

</style>
