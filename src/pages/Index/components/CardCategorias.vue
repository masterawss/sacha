<template lang="pug">
    q-card.q-mx-sm.shadow-w(style="margin-top: -50px")
        q-card-section
            strong Categorías
            .row.q-mt-sm.q-col-gutter-sm
                .col-4.text-center(v-for="categoria in categorias" :key="categoria.id" @click="$router.push({name: 'lugares.lista', params:{categoria: categoria.nombre}})")
                    q-avatar(:color="categoria.color" text-color="white" icon="directions")
                    br
                    small {{ categoria.nombre }}
                
</template>

<script>
export default {
    data: () => ({
        categorias: [
            { id: 1, nombre: 'Aventura', color: 'red', },
            { id: 2, nombre: 'Acuático', color: 'cyan', },
            { id: 3, nombre: 'Selva', color: 'green', },
            { id: 4, nombre: 'Altura', color: 'indigo', },
            { id: 5, nombre: 'Desértico', color: 'orange', },
            { id: 6, nombre: 'Pacífico', color: 'teal', },
        ]
    })
}
</script>

<style>

</style>
