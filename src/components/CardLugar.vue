<template lang="pug">
    q-card.rounded.shadow-w(unelecated @click="$router.push({name: 'lugar.show', params: {id: lugar.id} })")
            .row
                .col-5
                    q-img.img-rounded(
                        :ratio="10/9"
                        :src="lugar.imagenes[0]"
                        spinner-color="white")
                .col-7

                    .text-subtitle1.text-acento.text-grey-8.q-mb-sm {{ lugar.nombre }}
                    .truncate.text-body2.text-grey-6(style="height:20px") {{ lugar.descripcion }}
                    .q-mt-md
                        q-icon.q-mr-sm(name="people")
                        | 12
</template>

<script>
import {QIcon} from 'quasar'
export default {
    props: ['lugar'],
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
    .rounded{
        border-radius: 10px;
    }
    .truncate {
        height: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
