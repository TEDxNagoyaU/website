<template>
  <v-container>
    <v-row>
      <h2 class="pl-2">
        Articles
      </h2>
    </v-row>
    <v-row><article-list :articles="articles" /></v-row>
  </v-container>
</template>

<script>
import ArticleList from '~/components/articles/ArticleList.vue'
export default {
  name: 'ShowArticles',
  components: {
    ArticleList
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>
