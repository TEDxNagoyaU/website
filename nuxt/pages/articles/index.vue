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
  async asyncData ({ $content }) {
    const articles = await $content('articles', { deep: true }).sortBy('createdAt', 'desc').fetch()
    return { articles }
  },
  head () {
    return {
      title: '全記事'
    }
  }
}
</script>
