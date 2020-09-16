<template>
  <v-card
    class="ma-1 mb-1"
    :nuxt="true"
    :to="article.path"
    outlined
  >
    <v-container
      class="pa-0"
    >
      <v-row
        dense
        align="center"
      >
        <v-col
          xs="12"
          sm="4"
        >
          <v-img
            class="white--text align-end"
            contain
            max-height="200"
            :src="article.thumbnail"
          />
        </v-col>
        <v-col
          xs="12"
          sm="8"
        >
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle class="pb-0">
            {{ article.date }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ article.description }}</div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'ArticleListCard',
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
