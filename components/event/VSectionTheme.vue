<template>
  <v-parallax height=1070 dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-bold mb-4">{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="6">
        <h2 class="display-1 font-weight-bold mb-4">{{theme}}</h2>
      </v-col>
      <v-col  cols="6">
        <v-img :src=keyVisual aspect-ratio="2.7"></v-img>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="display-1 font-weight-bold mb-4">{{ wishs }}</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="6">
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
      </v-col>
      <v-col cols="6">
        <div>
          <p class="subheading">{{content}}</p>
          <p class="subheading">TEDxNagoyaU2020 代表 れんれん</p>
        </div>
      </v-col>
    </v-row>

  </v-parallax>
</template>

<script>
export default {
  props: ['title', 'keyVisual', 'theme', 'wishs', 'content']
}
</script>

<style scoped>
</style>>
