<template>
  <article-body :article="article" />
</template>

<script>
import ArticleBody from '~/components/ArticleBody.vue'
export default {
  components: {
    ArticleBody
  },
  asyncData($content, params){
    const article = await $content('articles', params.slug).fetch()
    return {
      article
    }
  }
}
</script>
