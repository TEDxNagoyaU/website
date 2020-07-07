<template>
  <div>
    <the-show-youtube />
    <first-view />
    <show-talks :speakers="speakers" />
  </div>
</template>

<script>
import TheShowYoutube from '~/components/home/TheShowYoutube'
import FirstView from '~/components/home/FirstView'

import ShowTalks from '~/components/home/ShowTalks'
export default {
  layout: 'full',
  components: {
    TheShowYoutube,
    FirstView,
    ShowTalks
  },
  head () {
    return {
      titleTemplate: 'TEDxNagoyaU'
    }
  },
  async asyncData ({ $content }) {
    const speakers = await $content('speakers', '2019').fetch()
    return {
      speakers
    }
  }
}
</script>
