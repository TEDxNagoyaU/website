<template>
  <div>
    <topic-path class="pl-1" />
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
  async asyncData ({ $content, params }) {
    const tag = params.slug
    const articles = await $content('articles', { deep: true }).where({ tags: { $contains: tag } }).sortBy('date', 'desc').fetch()
    return {
      articles,
      tag
    }
  },
  head () {
    return {
      title: this.tag
    }
  }
}
</script>
