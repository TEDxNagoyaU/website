<template>
  <div>
    <the-show-youtube />
  </div>
</template>

<script>
import TheShowYoutube from '~/components/home/TheShowYoutube'
export default {
  components: {
    TheShowYoutube
  },
  head () {
    return {
      titleTemplate: 'TEDxNagoyaU'
    }
  }
}
</script>
