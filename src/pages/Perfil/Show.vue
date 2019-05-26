<template lang="pug">
    q-page
        .row.justify-center
            .col-xs-12.col-sm-12.col-lg-10
                .row.q-col-gutter-md
                    .col-lg-3.col-xl-3.col-md-12-col-sm-12.col-xs-12
                        q-card.q-my-md.shadow-w
                            q-card-section
                                .text-center
                                    q-avatar(size="90px")
                                        q-img( src="https://miro.medium.com/fit/c/240/240/0*By9cHY3uwOM7kkny.")
                                
                                .text-center.q-mt-md
                                    strong Nombre
                                    br
                                    span.text-grey @username
                                    br
                                    q-badge.q-ma-sm.q-pa-xs Explorador
                    .col-lg-9.col-xl-9.col-md-12-col-sm-12.col-xs-12
                        q-card.q-my-md.shadow-w
                            q-card-section
</template>

<script>
import { QAvatar, QBadge } from 'quasar'
export default {
    components: { QAvatar, QBadge }
}
</script>

<style>

</style>
