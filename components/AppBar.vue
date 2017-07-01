<template lang="pug">
  v-toolbar.root(
    fixed,
    light
  )
    v-toolbar-side-icon(
      light,
      @click.native.stop="toggleDrawer"
    )

    nuxt-link.toolbar__logo(to="/")
      img(src="~assets/images/logo.svg" alt="Odios Logo")

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
  import NuxtLink from 'nuxt/dist/app/components/nuxt-link'
  export default {
    components: {NuxtLink},
    name: 'AppBar',
    props: {
      toggleDrawer: Types.func
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .toolbar__logo
      height 50px
      width 160px
      img
        max-width 100%
        max-height 100%
</style>
