<template lang="pug">
    q-card.shadow-w(unelecated @click="$router.push({name: 'lugar.show'})")
        q-card-section
            .row.q-col-gutter-md
                .col-5
                    q-img.img-rounded(
                        src="https://placeimg.com/500/300/nature"
                        spinner-color="white"
                        style="height: 140px; max-width: 150px")
                .col-7
                    .text-subtitle1.text-acento.text-grey-8.q-mb-sm Lugar de destino
                    .text-body2 Descripcion del lugars ad sad ads asdasdf sfd asdf asdf ewrfsdfadsf dg rthsdfhgds

                    .q-mt-md
                        q-icon.q-mr-sm(name="people")
                        | 12
</template>

<script>
import {QIcon} from 'quasar'
export default {
    components: {QIcon}
}
</script>

<style scoped>
    .m-negative-left{
        margin-left: -50px;
    }
    .img-rounded{
        border-radius: 10px;
    }
</style>
