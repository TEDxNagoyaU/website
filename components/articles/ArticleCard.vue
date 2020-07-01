<template>
  <v-card
    class="ma-1 mb-1"
    max-width="400"
    :nuxt="true"
    :to="article.path"
    outlined
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="article.thumbnail"
    >
      <v-card-title>{{article.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
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
