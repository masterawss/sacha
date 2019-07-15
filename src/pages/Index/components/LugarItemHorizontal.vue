<template lang="pug">
    div
        q-img.rounded-border(
        :src="url"
        :ratio="20/10")
        strong {{lugar.nombre}}
</template>

<script>
import firebase from 'firebase'
export default {
    props: ['lugar'],
    created(){
        var storageRef = firebase.storage().ref();
        var spaceRef = storageRef.child(this.lugar.imagenes[0]).getDownloadURL().then(url => { this.url = url })
    },
    data: () => ({
        url: ''
    })
}
</script>

<style>

</style>
