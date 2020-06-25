<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
      <v-row
      align="center"
      justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">{{ title }}</h1>
        </v-col>
      </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="6">

        <p class="subheading">{{content}}</p>
      </v-col>
      <v-col class="text-center" cols="6">
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
      </v-col>
    </v-row>

  </v-parallax>
</template>

<script>
export default {
  props: ['title', 'content']
}
</script>

<style scoped>
</style>>
