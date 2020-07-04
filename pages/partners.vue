<template>
  <div>
    <topic-path />
    <nuxt-child />
    {{ params }}
  </div>
</template>

<script>
import TopicPath from '~/components/TopicPath.vue'
export default {
  components: {
    TopicPath
  },
  asyncData ({ params }) {
    return { params }
  },
  head () {
    return {
      titleTemplate: '%s | Partner | TEDxNagoyaU'
    }
  }
}
</script>
