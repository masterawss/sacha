<template lang="pug">
    q-page
        .row.justify-center.q-mt-md
            .col-lg-6.col-xl-6.col-md-10.col-sm-12.col-xs-12
                q-card.shadow-w
                    q-card-section
                        .text-h5.q-mb-lg Enseña tu mundo

                        q-btn.q-mr-md(label="Registrarse con Facebook" :loading="loading.facebook" @click="registerFacebook" color="blue")
                        q-icon(name="check" color="green")
                        br
                        br
                        q-btn.q-mr-md(label="Registrarse con Google" :loading="loading.google" @click="registerGoogle" color="red")
                        q-icon(name="check" color="green")
                        q-input()
</template>

<script>
export default {
    data: () => ({
        registered: {
            facebook: false,
            google: false
        },
        loading: {
            facebook: false,
            google: false
        }
    }),
    methods: {
        registerFacebook(){
            this.loading.facebook = true
        },
        registerGoogle(){
            this.loading.google = true
        }
    }
}
</script>

<style>

</style>
