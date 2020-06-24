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
        <h1 class="display-1 font-weight-thin mb-4">{{ title }}</h1>

        <h4 class="subheading">{{content}}</h4>
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
v-parallax{
  width: 100%;
}
</style>>

</style>
