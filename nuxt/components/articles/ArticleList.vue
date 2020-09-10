<template>
  <v-row
    dense
  >
    <v-col
      v-for="article in articles"
      :key="article.path"
      cols="12"
    >
      <article-list-card :article="article" />
    </v-col>
  </v-row>
</template>

<script>
import ArticleListCard from '~/components/articles/ArticleListCard.vue'
export default {
  name: 'ArticleList',
  components: {
    ArticleListCard
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>
