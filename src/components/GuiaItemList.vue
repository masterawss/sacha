<template lang="pug">
    q-item(clickable v-ripple)
        q-item-section(avatar)
            q-avatar
                img(src="https://miro.medium.com/fit/c/240/240/0*By9cHY3uwOM7kkny.")
            
        q-item-section
            q-item-label Image avatar
            q-item-label(caption line="2")
                w-stars
                strong Conozco muy bien el lugar
        //- q-item-section(caption)
            .row
                .col-2(v-for="i in 5" )
        q-item-section(side top)
            q-icon(name="message" color="secondary")
</template>

<script>
import WStars from './Stars'
import { QAvatar } from 'quasar'
export default {
    components: { QAvatar, WStars }
}
</script>

<style>

</style>
