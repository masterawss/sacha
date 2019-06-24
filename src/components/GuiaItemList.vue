<template lang="pug">
    q-list
        .text-center.q-mt-xl(v-if="guias.length == 0")
            .text-h5.text-grey No hay guías para este lugar
        q-item( v-else clickable v-ripple v-for="guia in guias" :key="guia.id")
            q-item-section(avatar)
                q-avatar
                    img(:src="guia.avatar")
                
            q-item-section(@click="$router.push({name: 'perfil.show', params: {id: guia.id} })")
                q-item-label {{ guia.nombre }}
                q-item-label(caption line="2")
                    w-stars
                    strong {{ guia.descripcion }}
            //- q-item-section(caption)
                .row
                    .col-2(v-for="i in 5" )
            q-item-section(side top)
                q-icon(name="message" color="secondary")
</template>

<script>
import WStars from './Stars'
import { QAvatar } from 'quasar'
import {db} from '../boot/db'
// import { firestore } from 'firebase';
export default {
    props: ['lugar'],
    components: { QAvatar, WStars },
    created(){
        console.log('GUIAs', this.guias);
        
    },
    data:() => ({
        guias: []
    }),
    firestore() {
        let lugar = db.collection('lugares').doc(this.lugar.id)
        console.log('LUGAR', this.lugar.id);
        
        return {
            guias: lugar.collection('guias'),
        }
    }
}
</script>

<style>

</style>
