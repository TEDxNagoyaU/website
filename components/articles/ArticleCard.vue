<template>
  <v-card
    :nuxt="true"
    :to="article.path"
    outlined
    class="ma-1 mb-1"
  >
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="3">
          <v-img :src="article.thumbnail" class="align-end" />
        </v-col>
        <v-col cols="9">
          <v-card-title class="pa-0" v-text="article.title" />
          <v-card-text class="pa-0" v-text="article.description" />
        </v-col>
      </v-row>
    </v-container>
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
