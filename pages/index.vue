<template>
  <div>
    <show-talks :speakers="speakers" />
  </div>
</template>

<script>
import ShowTalks from '~/components/home/ShowTalks'
export default {
  components: {
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
