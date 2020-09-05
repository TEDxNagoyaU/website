<template>
  <div>
    <topic-path />
    <article-list :articles="articles" />
  </div>
</template>

<script>
import TopicPath from '~/components/TopicPath.vue'
import ArticleList from '~/components/articles/ArticleList.vue'

export default {
  components: {
    ArticleList,
    TopicPath
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
