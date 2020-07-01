<template>
  <div class="article">
    <h1>{{ article.title }}</h1>
    <article-body :article="article" />
  </div>
</template>

<script>
import ArticleBody from '~/components/articles/ArticleBody.vue'
export default {
  components: {
    ArticleBody
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return {
      article, params
    }
  },
  head () {
    return {
      title: this.params.slug
    }
  }
}
</script>

<style>
.article h1{
  margin: 30px 0;
}
</style>
