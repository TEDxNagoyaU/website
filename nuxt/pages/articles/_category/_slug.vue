<template>
  <div>
    <v-row
      justify="center"
    >
      <v-col cols="12" sm="10" md="10" lg="7" xl="7"><topic-path /></v-col>
      <v-col cols="12" sm="10" md="10" lg="7" xl="7">
        <h1 class="article-title">
          <span>{{ article.title }}</span>
        </h1>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col cols="12" sm="10" md="10" lg="7" xl="6">
        <article-body class="body" :article="article" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TopicPath from '~/components/TopicPath.vue'
import ArticleBody from '~/components/articles/ArticleBody.vue'
export default {
  components: {
    ArticleBody,
    TopicPath
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.category, params.slug).fetch()
    return {
      article, params
    }
  },
  head () {
    return {
      title: `${this.article.title} | ${this.params.category}`,
      meta: this.article.meta_tag.concat([
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://tedxnagoyau.com' + this.$route.path
        }
      ])
    }
  }
}
</script>


<style lang="scss">
.article-title {
  font-size: 1.4rem;
}

.headline {
  border-bottom: solid 1px rgb(221,221,221);
  margin-top: 49px;
  margin-bottom: 24px;
}
.nuxt-content {
  h1 {
    @extend .headline;
    font-size: 1.25rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.15rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.05rem;
    font-weight: 500;
  }
  h4 {
    font-size: 0.95;
    font-weight: 600;
  }
  p {
    line-height: 2.0rem;
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: auto;
      text-align: center;
    }
  }

}
</style>
