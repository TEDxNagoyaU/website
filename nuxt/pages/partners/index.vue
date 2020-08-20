<template>
  <div>
    <v-row>
      <p>鋭意製作中です！</p>
    </v-row>
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
    const articles = await $content('articles', 'news', { deep: true }).limit(3).fetch()
    return {
      articles
    }
  },
  head () {
    return {
      titleTemplate: 'Partner | TEDxNagoyaU'
    }
  }
}
</script>
