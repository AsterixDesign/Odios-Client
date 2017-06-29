<template lang="pug">
  v-toolbar.root(
    fixed,
    light
  )
    v-toolbar-side-icon(
      light,
      @click.native.stop="toggleDrawer"
    )

    v-toolbar-logo Odios

    v-text-field.hidden-sm-and-down(
      prepend-icon="search",
      label="Search...",
      hide-details,
      single-line,
      light,
      disabled
    )

    v-spacer

    v-btn.hidden-md-and-up(icon,light, disabled)
      v-icon search
    v-btn(icon,light, disabled)
      v-icon account_circle
</template>

<script>
  import Types from 'vue-types'
  export default {
    name: 'AppBar',
    props: {
      toggleDrawer: Types.func
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /**/
</style>
