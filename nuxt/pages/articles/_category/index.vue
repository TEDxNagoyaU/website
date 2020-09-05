<template>
  <div>
    <article-list :articles="articles" />
  </div>
</template>
<script>
import ArticleList from '~/components/articles/ArticleList.vue'

export default {
  components: {
    ArticleList
  },
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.category).fetch()
    return { articles, params }
  },
  head () {
    return {
      title: this.params.category,
      meta: []
    }
  }
}
</script>
