<template lang="pug">
    q-drawer(v-model='open' bordered='' content-class='bg-grey-2')
      q-list
        q-item-label(header='') Essential Links
        q-item(clickable='' tag='a' target='_blank' href='http://v1.quasar-framework.org')
          q-item-section(avatar='')
            q-icon(name='school')
          q-item-section
            q-item-label Docs
            q-item-label(caption='') v1.quasar-framework.org
        q-item(clickable='' tag='a' target='_blank' href='https://github.com/quasarframework/')
          q-item-section(avatar='')
            q-icon(name='code')
          q-item-section
            q-item-label Github
            q-item-label(caption='') github.com/quasarframework
        q-item(clickable='' tag='a' target='_blank' href='http://chat.quasar-framework.org')
          q-item-section(avatar='')
            q-icon(name='chat')
          q-item-section
            q-item-label Discord Chat Channel
            q-item-label(caption='') chat.quasar-framework.org
        q-item(clickable='' tag='a' target='_blank' href='https://forum.quasar-framework.org')
          q-item-section(avatar='')
            q-icon(name='record_voice_over')
          q-item-section
            q-item-label Forum
            q-item-label(caption='') forum.quasar-framework.org
        q-item(clickable='' tag='a' target='_blank' href='https://twitter.com/quasarframework')
          q-item-section(avatar='')
            q-icon(name='rss_feed')
          q-item-section
            q-item-label Twitter
            q-item-label(caption='') @quasarframework
    
</template>

<script>
export default {
    props: ['open']
}
</script>

<style>

</style>
