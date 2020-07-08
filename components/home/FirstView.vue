<template>
  <v-parallax
    dark
    src="/bgFirstView.jpg"
    height="500"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-bold mb-4">TedxNagoyaU2020オンラインイベント開催が決定しました！</h1>
      </v-col>
      <v-col class="text-center" sm="6" xs="12">
        <h1 class="display-1 font-weight-thin mb-4">2020 TedxNagoyaU Theme</h1>
        <v-img src="/keyVisual.png"></v-img>
      </v-col>
      <v-col class="text-center" sm="6" xs="12">
        <h1 class="display-1 font-weight-thin mb-4 text-decoration-underline">Date 10/11</h1>
        <nuxt-link to="/event">
          <v-btn class="ma-2" outlined color="white">view more</v-btn>
        </nuxt-link>

      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {

}
</script>

<style scoped>
a{
  color:white !important;
  text-decoration: none;
}
</style>
