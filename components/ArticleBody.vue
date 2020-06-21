<template>
  <nuxt-content :document="article" />
</template>

<script>
export default {
  name: 'ArticleBody',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
