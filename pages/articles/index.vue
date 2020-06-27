<template>
  <v-row>
    <v-col
      v-for="article in articles"
      :key="article.path"
    >
      <article-card :article="article" />
    </v-col>
  </v-row>
</template>
<script>

import ArticleCard from '~/components/articles/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  },
  async asyncData ({ $content }) {
    const articles = await $content('articles').sortBy('createdAt', 'desc').fetch()
    return { articles }
  }
}
</script>
