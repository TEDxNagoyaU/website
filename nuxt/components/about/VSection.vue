<template>
  <v-card
    outlined
    class="ma-1 mb-1"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="6" sm="12">
        <h1 class="display-1 font-weight-bold mb-4">
          {{ title }}
        </h1>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" md="6" sm="12">
        <v-img :src="src" aspect-ratio="1.7" />
      </v-col>
      <v-col md="5" sm="12">
        <p class="subheading">
          {{ content }}
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>>
