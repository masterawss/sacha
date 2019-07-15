<template lang="pug">
    div
        q-img(:ratio="16/9" :src="imagen")
        .q-mx-md
            strong {{ lugar.nombre }}
</template> 

<script>
import firebase from 'firebase'
export default {
    props: ['lugar'],
    created (){
        var storageRef = firebase.storage().ref();
        var spaceRef = storageRef.child(this.lugar.imagenes[0]).getDownloadURL().then(url => { 
            this.imagen = url
        })
    },
    data: () => ({
        imagen: ''
    })
}
</script>

<style>

</style>
