<template>
  <div class="article">
    <h1 class="article-title"><span>{{ article.title }}</span></h1>
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
      article
    }
  }
}
</script>

<style>
.article .article-title{
  margin: 30px 0;
  border-bottom: 1px solid #000;
}
.article .article-title span{
  border-bottom: 5px solid #000;
}

</style>
