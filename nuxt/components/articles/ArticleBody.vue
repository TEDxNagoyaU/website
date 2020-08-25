<template>
  <div class="content">
    <nuxt-content :document="article" />
  </div>
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
