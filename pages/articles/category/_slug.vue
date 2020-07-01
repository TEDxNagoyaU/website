<template>
  <div>
    <v-row>
      <v-col
        v-for="article in articles"
        :key="article.path"
      >
        <article-card :article="article" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ArticleCard from '~/components/articles/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  },
  async asyncData ({ $content, params }) {
    const articles = await $content('articles').where({ category: params.slug }).fetch()
    return { articles, params }
  },
  head () {
    return {
      title: this.params.slug
    }
  }
}
</script>
