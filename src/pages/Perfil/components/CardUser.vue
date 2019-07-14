<template lang="pug">
    q-card.q-my-lg-md.shadow-w
        q-card-section
            .text-right
                q-btn(flat round icon="settings" @click="$router.push({name: 'perfil.settings'})")
                //- q-icon(name="settings" size="25px")
            .text-center
                q-avatar(size="90px")
                    q-img( :src="usuario.avatar")
            
            .text-center.q-mt-md
                strong {{ usuario.nombre }}
                //- br
                //- span.text-grey @username
                br
                q-badge.q-ma-sm.q-pa-xs Explorador
</template>

<script>
import { QAvatar, QImg, QBadge } from 'quasar'
export default {
    props: ['usuario'],
    components: { QAvatar, QImg, QBadge }
}
</script>

<style>

</style>
