<template lang="pug">
    .row.q-my-lg
        .col-lg-3.col-6.text-grey.q-mt-sm
            q-icon.q-mr-md(size="25px" name="directions_walk")
            | {{ lugar.caminata }} minutos
        .col-lg-3.col-6.text-grey.q-mt-sm
            q-icon.q-mr-md(size="24px" name="place")
            | {{ lugar.ubicacion }}
        .col-lg-3.col-6.text-grey.q-mt-sm
            q-icon.q-mr-md(size="24px" name="local_offer")
            | {{ lugar.categoria }}
        .col-lg-3.col-6.text-grey.q-mt-sm
            q-icon.q-mr-md(size="24px" name="my_location")
            | {{ lugar.distancia }} km
</template>

<script>
export default {
    props: ['lugar']
}
</script>

<style>

</style>
