<template lang="pug">
  q-layout(view='hHh lpR fFf')
    q-header(elevated)
      q-toolbar
        q-btn(flat='' dense='' round='' @click='leftDrawerOpen = !leftDrawerOpen' aria-label='Menu')
          q-icon(name='menu')
        q-toolbar-title(@click="$router.push({name: 'index'})")
          | SachaTrip
        //- div Quasar v{{ $q.version }}
    w-drawer( v-if="$q.scr" :open="leftDrawerOpen")
    q-page-container
      router-view
</template>

<script>
import { openURL } from 'quasar'
import WDrawer from '../components/drawer'
export default {
  name: 'MyLayout',
  components: { WDrawer },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
