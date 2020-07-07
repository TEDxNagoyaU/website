<template>
  <div>
    <the-show-youtube />
    <first-view />
  </div>
</template>

<script>
import TheShowYoutube from '~/components/home/TheShowYoutube'
import FirstView from '~/components/home/FirstView'

export default {
  components: {
    TheShowYoutube,
    FirstView
  },
  head () {
    return {
      titleTemplate: 'TEDxNagoyaU'
    }
  }
}
</script>
