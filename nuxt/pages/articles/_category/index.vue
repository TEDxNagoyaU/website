<template>
  <div>
    <v-row>
      <v-col>
        <topic-path />
      </v-col>
    </v-row>
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
    const articles = await $content('articles', params.category).sortBy('date', 'desc').fetch()
    return { articles, params }
  },
  head () {
    return {
      title: this.params.category,
      meta: []
    }
  }
}
</script>
