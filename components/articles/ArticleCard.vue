<template>
  <v-card
    class="ma-1 mb-1"
    max-width="300"
    :nuxt="true"
    :to="article.path"
    outlined
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="article.thumbnail"
    >

    </v-img>
    <v-card-title>{{article.title}}</v-card-title>
    <v-card-subtitle class="pb-0">{{article.date}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ article.description }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ArticleBody',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
a{
  padding: 0;
}
</style>
