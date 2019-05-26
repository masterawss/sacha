<template lang="pug">
    q-item
        q-item-section(avatar)
            q-avatar
                img(src="https://cdn.quasar.dev/img/avatar2.jpg" alt="alt")

        q-item-section
            q-item-label(lines="1") NOmbre de la persona
            q-item-label(caption lines="1")
                span.text-weight-bold   Guiado por Nombre del guiador
                | -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
</template>

<script>
import {QAvatar} from 'quasar'
export default {
    components: { QAvatar}
} 
</script>

<style>

</style>
