<template>
  <div>
    <topic-path />
    <nuxt-child />
  </div>
</template>

<script>
import TopicPath from '~/components/TopicPath.vue'
export default {
  components: {
    TopicPath
  },
  head () {
    return {
      titleTemplate: '%s | Partner | TEDxNagoyaU'
    }
  }
}
</script>
