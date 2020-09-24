<template>
  <v-container>
    <v-row>
      <h2 class="pl-5 text-h5">
        Articles
      </h2>
    </v-row>
    <article-list :articles="articles" />
    <v-row>
      <v-col>
        <v-btn
          block
          depressed
          to="/articles"
          nuxt
          @click.native="eventOfClickedShowMoreArticles"
        >
          もっと見る
        </v-btn>
      </v-col>
    </v-row>
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
  },
  methods: {
    eventOfClickedShowMoreArticles () {
      this.$ga.event({
        eventCategory: 'Home',
        eventAction: 'clickButton',
        eventLabel: 'showMoreArticle',
        eventValue: 1
      })
    }
  }
}
</script>
