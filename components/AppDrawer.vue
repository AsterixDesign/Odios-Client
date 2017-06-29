<template lang="pug">
  v-navigation-drawer.root.grey.lighten-4.pb-0(
    persistent,
    height='100%',
    light,
    v-model="drawerStatus",
    clipped,
    hide-overlay
  )
    v-list

      template(v-for='(item, i) in items')

        v-layout(
          row,
          v-if='item.heading',
          align-center,
          :key='i'
        )
          v-flex(xs6)
            v-subheader(v-if='item.heading')
              | {{ item.heading }}

        v-divider.my-4(
          dark,
          v-else-if='item.divider',
          :key='i'
        )

        v-list-item(
          :key='i',
          v-else
        )
          v-list-tile(
            :to="item.to",
            :router="item.router",
            :nuxt="item.nuxt"
          )
            v-list-tile-action
              v-icon(v-if="item.icon") {{ item.icon }}
              i.mdi.material-icons.icon--dark(
                v-else-if="item.micon",
                :class="`mdi-${item.micon}`"
              )
            v-list-tile-content
              v-list-tile-title
                | {{ item.text }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  const nuxt = {
    nuxt: true,
    router: true
  }
  export default {
    name: 'AppDrawer',
    data: () => ({
      items: [
        { heading: 'Main' },
        {
          icon: 'home',
          text: 'Home',
          to: '/',
          ...nuxt
        },
        {
          icon: 'explore',
          text: 'Discover',
          to: '/discover',
          ...nuxt
        },
        {
          icon: 'new_releases',
          text: 'New Releases',
          to: '/new',
          ...nuxt
        },
        {
          icon: 'subscriptions',
          text: 'Subscriptions',
          to: '/subscription',
          ...nuxt
        },
        {
          icon: 'timelapse',
          text: 'In Progress',
          to: 'in_progress',
          ...nuxt
        },
        {
          icon: 'playlist_play',
          text: 'Playlist',
          to: '/playlist',
          ...nuxt
        },
        { divider: true },
        { heading: 'More' },
        {
          icon: 'settings',
          text: 'Settings',
          to: '/settings',
          ...nuxt
        },
        {
          icon: 'help',
          text: 'About',
          to: '/about',
          ...nuxt
        }
      ]
    }),
    methods: {
      ...mapActions(['setSidebarStatus'])
    },
    computed: {
      ...mapGetters(['isSidebarOpen']),
      drawerStatus: {
        get () {
          return this.isSidebarOpen
        },
        set (value) {
          this.setSidebarStatus(value)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /*.logo*/
      /*img*/
        /*height 60px*/
        /*width 60px*/
      /*.text*/
        /*font-size 2em*/
        /*font-weight 800*/
</style>
