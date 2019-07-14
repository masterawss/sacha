<template lang="pug">
    q-card.q-ma-sm.shadow-w
        q-input( dense placeholder="Buscar ..."  borderless v-model="text" class="q-mx-md")
            template(v-slot:append)
                q-icon(v-if="text === ''" name="search")
                q-icon(v-else name="clear" class="cursor-pointer" @click="text = ''")
</template>

<script>
import { QInput } from 'quasar'
export default {
    components: {QInput},
    data: () => ({
        text: ''
    })
}
</script>

<style>

</style>
