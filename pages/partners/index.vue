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
  head () {
    return {
      titleTemplate: 'Partner | TEDxNagoyaU'
    }
  },
  async asyncData ({ $content }) {
    const articles = await $content('articles', 'hogehoge', { deep: true }).limit(3).fetch()
    return {
      articles
    }
  }
}
</script>
