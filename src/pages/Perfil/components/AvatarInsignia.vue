<template lang="pug">
    div
        q-btn(flat @click="dialog_insignia=true").text-center
            
            q-avatar
                img(:src="insignia.img")
            q-badge( style="background: none" v-if="insignia.progress == 1" align="bottom" floating)
                q-avatar(color="primary" text-color="white" icon="check" size="24px")
            q-linear-progress(:value="insignia.progress" rounded class="q-mt-md")

        q-dialog(v-model="dialog_insignia")
            q-card
                q-card-section.text-center.text-primary
                    q-avatar
                        img(:src="insignia.img")
                    
                    .text-weight-bolder
                        | {{ insignia.nombre }}
                q-card-section.text-center.text-grey
                    | {{ insignia.descripcion }}
                    .q-mx-xl
                        q-linear-progress(:value="insignia.progress" rounded style="height: 10px" class="q-mt-md")

                q-card-actions(align="right")
                    q-btn(flat label="OK" color="primary" v-close-popup)
</template>

<script>

import {QAvatar, QLinearProgress, QDialog, QCardActions, QBadge } from 'quasar'
export default {
    props: ['insignia'],
    components: {QAvatar, QLinearProgress, QDialog, QCardActions, QBadge }, 
    data: () => ({
        dialog_insignia: false
    })
}
</script>

<style>

</style>
