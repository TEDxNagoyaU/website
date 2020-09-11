<template>
  <div>
    <v-row>
      <v-col>
        <p>TEDxNagoyaUの活動は多くの協賛企業様からの支援によって成り立っています。</p>
        <p>2020年も多くの協賛企業様からのご支援をいただきました。ありがとうございました。</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1
          style="font-size: 1.2rem"
          class="pl-1"
        >
          関連記事
        </h1>
      </v-col>
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
    const articles = await $content('articles', 'partner_interview', { deep: true }).limit(3).fetch()
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
