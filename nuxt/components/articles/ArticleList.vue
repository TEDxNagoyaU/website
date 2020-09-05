<template>
  <v-row>
    <v-col
      v-for="article in articles"
      :key="article.path"
      xs="12"
      sm="6"
      md="4"
      lg="4"
    >
      <article-card :article="article" />
    </v-col>
  </v-row>
</template>

<script>
import ArticleCard from '~/components/articles/ArticleCard.vue'
export default {
  name: 'ArticleList',
  components: {
    ArticleCard
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>
