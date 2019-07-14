<template lang="pug">
    div
        .q-my-sm
            strong Aventurero
        .row.q-col-gutter-md
            .col-3(v-for="insignia, i in insignias" :key="i").text-center
                    w-avatar-insignia(:insignia="insignia")
        //- q-dialog(v-model="modal_insignia")
</template>

<script>

import WAvatarInsignia from './AvatarInsignia'

export default {
    components: { WAvatarInsignia},
    data: () => ({
        insignias: [

            {
                img: 'https://cdn.quasar.dev/img/boy-avatar.png',
                nombre: 'Colgante',
                descripcion: 'Lorem ipsum asdalsd aldjaskdjnkla jhdlasjhdflkasfhljkh',
                progress: 1,
            },
            {
                img: 'https://cdn.quasar.dev/img/boy-avatar.png',
                nombre: 'Animalesco',
                descripcion: 'Lorem ipsum asdalsd aldjaskdjnkla jhdlasjhdflkasfhljkh',
                progress: Math.random(),
            },
            {
                img: 'https://cdn.quasar.dev/img/boy-avatar.png',
                nombre: 'Nervios de hierro',
                descripcion: 'Lorem ipsum asdalsd aldjaskdjnkla jhdlasjhdflkasfhljkh',
                progress: Math.random(),
            },
        ]
    })
}
</script>

<style>

</style>
