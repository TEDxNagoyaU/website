<template>
  <div class="article">
    <h1 class="article-title">
      <span>{{ article.title }}</span>
    </h1>
    <article-body class="body" :article="article" />
    <div v-if="article.category" class="category">
      <h4>category: {{ params.category }}</h4>
    </div>
    <div v-if="article.tags" class="tag">
      <h4>tags: {{ article.tags }}</h4>
    </div>
  </div>
</template>

<script>
import ArticleBody from '~/components/articles/ArticleBody.vue'
export default {
  components: {
    ArticleBody
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.category, params.slug).fetch()
    return {
      article, params
    }
  },
  head () {
    return {
      title: `${this.params.slug} | ${this.params.category}`,
      meta: this.article.meta
    }
  }
}
</script>

<style>

.article .article-title{
  margin: 30px 0;
  color: rgb(133, 24, 24);
  border-bottom: 1px solid rgb(184, 49, 49);
  line-height: 1.5;
}
.article .article-title span{
  border-bottom: 6px solid rgb(184, 49, 49);
}
.body{
  border-bottom: 1px solid #000;
}
</style>
