<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-img
        src="https://live.staticflickr.com/65535/49633281918_bcdc62932a_m.jpg"
        height="20"
        contain
      />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <global-header-list-item name="Home" path="/" />
        <global-header-list-item name="About" path="/about" />
        <global-header-list-item name="Event" path="/event" />
        <global-header-list-item name="Article" path="/articles" />
        <global-header-list-group title="Speaker" :links="speakerLinks" />
        <global-header-list-group title="Partner" :links="partnerLinks" />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import GlobalHeaderListItem from '~/components/header/GlobalHeaderListItem.vue'
import GlobalHeaderListGroup from '~/components/header/GlobalHeaderListGroup.vue'
export default {
  name: 'GlobalHeader',
  components: {
    GlobalHeaderListItem,
    GlobalHeaderListGroup
  },
  data () {
    return {
      drawer: false,
      speakerLinks: [
        {
          path: '/speakers/2020',
          name: '2020'
        },
        {
          path: '/speakers/2019',
          name: '2019'
        },
        {
          path: '/speakers/2018',
          name: '2018'
        },
        {
          path: '/speakers/2017',
          name: '2017'
        }
      ],
      partnerLinks: [
        {
          path: '/partners/2020',
          name: '2020'
        },
        {
          path: '/partners/2019',
          name: '2019'
        },
        {
          path: '/partners/2018',
          name: '2018'
        },
        {
          path: '/partners/2017',
          name: '2017'
        }
      ]
    }
  }
}
</script>
