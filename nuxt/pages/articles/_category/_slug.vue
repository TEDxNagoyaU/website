<template>
  <div>
    <v-row
      justify="center"
    >
      <v-col cols="12" sm="10" md="10" lg="7" xl="7">
        <topic-path />
      </v-col>
      <v-col cols="12" sm="10" md="10" lg="7" xl="7">
        <h1 class="article-title">
          <span>{{ article.title }}</span>
        </h1>
        <span class="text--disabled creation_date">作成日時: {{ article.date }}</span>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col cols="12" sm="10" md="10" lg="7" xl="6">
        <article-body :article="article" />
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col
        xs="12"
        sm="10"
        md="10"
        lg="7"
        xl="7"
      >
        <span
          v-for="tag in article.tags"
          :key="tag"
        >
          <nuxt-link
            :to="`/articles/tags/${tag}`"
            style="text-decoration: none;"
          >
            <v-icon>mdi-tag</v-icon>
            {{ tag }}
          </nuxt-link>
        </span>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      dense
    >
      <v-col
        xs="12"
        sm="10"
        md="10"
        lg="7"
        xl="7"
      >
        <h1
          style="font-size: 1.2rem"
          class="pl-1"
        >
          関連記事
        </h1>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      dense
    >
      <v-col
        xs="12"
        sm="10"
        md="10"
        lg="7"
        xl="7"
      >
        <article-list :articles="categorizedArticles" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TopicPath from '~/components/TopicPath.vue'
import ArticleBody from '~/components/articles/ArticleBody.vue'
import ArticleList from '~/components/articles/ArticleList.vue'
export default {
  components: {
    ArticleBody,
    TopicPath,
    ArticleList
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.category, params.slug).fetch()

    // 関連記事に自分を表示しないようにする部分。
    let categorizedArticles = await $content('articles', params.category).limit(6).fetch()
    categorizedArticles = categorizedArticles.filter((article) => {
      return article.slug !== params.slug
    })

    return {
      article,
      categorizedArticles,
      params
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

.creation_date {
  font-size: 0.7rem
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
