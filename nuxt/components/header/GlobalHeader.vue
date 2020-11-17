<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link
          to="/"
        >
          <v-img
            src="tedxnagoyau_1line_white_background.png"
            height="20"
            contain
          />
        </nuxt-link>
      </v-toolbar-title>
      <v-tabs class="d-none d-md-flex">
        <global-header-tabs name="Home" path="/" />
        <global-header-tabs name="About" path="/about" />
        <global-header-tabs-menu title="Event" :links="eventLinks" />
        <global-header-tabs-menu title="Article" :links="articleLinks" />
        <global-header-tabs-menu title="Talks" :links="speakerLinks" />
        <global-header-tabs-menu title="Partner" :links="partnerLinks" />
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <global-header-list-item name="Home" path="/" />
        <global-header-list-item name="About" path="/about" />
        <global-header-list-group title="Event" :links="eventLinks" />
        <global-header-list-group title="Article" :links="articleLinks" />
        <global-header-list-group title="Talks" :links="speakerLinks" />
        <global-header-list-group title="Partner" :links="partnerLinks" />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import GlobalHeaderListItem from '~/components/header/GlobalHeaderListItem.vue'
import GlobalHeaderListGroup from '~/components/header/GlobalHeaderListGroup.vue'
import GlobalHeaderTabs from '~/components/header/GlobalHeaderTabs.vue'
import GlobalHeaderTabsMenu from '~/components/header/GlobalHeaderTabsMenu.vue'
export default {
  name: 'GlobalHeader',
  components: {
    GlobalHeaderListItem,
    GlobalHeaderListGroup,
    GlobalHeaderTabs,
    GlobalHeaderTabsMenu
  },
  data () {
    return {
      drawer: false,
      eventLinks: [
        {
          path: '/events/2020',
          name: '2020'
        }
      ],
      speakerLinks: [
        /* {
          path: '/talks/2020',
          name: '2020'
        }, */
        {
          path: '/talks/2019',
          name: '2019'
        },
        {
          path: '/talks/2018',
          name: '2018'
        },
        {
          path: '/talks/2017',
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
      ],
      articleLinks: [
        {
          path: '/articles',
          name: '全記事'
        },
        {
          path: '/articles/pastTalks',
          name: 'トーク紹介'
        },
        {
          path: '/articles/news',
          name: 'News'
        },
        {
          path: '/articles/partner_interview',
          name: '協賛企業インタビュー'
        }
      ]
    }
  }
}
</script>
