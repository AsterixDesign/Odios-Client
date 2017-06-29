<template lang="pug">
  v-app.root
    app-drawer
    app-bar(:toggleDrawer="toggleSidebar")
    main: v-container(fluid): nuxt
    v-footer footer
</template>

<script>
  import { mapActions } from 'vuex'

  import AppBar from '../components/AppBar.vue'
  import AppDrawer from '../components/AppDrawer.vue'

  export default {
    name: 'DefaultLayout',
    components: {
      AppBar,
      AppDrawer
    },
    methods: {
      ...mapActions(['toggleSidebar'])
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /* styles */
</style>
