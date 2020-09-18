<template>
  <v-container>
    <v-row>
      <h2 class="pl-5 text-h5">
        Articles
      </h2>
    </v-row>
    <article-list :articles="articles" />
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
