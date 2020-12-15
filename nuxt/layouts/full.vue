<template>
  <v-app light>
    <global-header />
    <v-main>
      <v-main>
        <nuxt />
      </v-main>
    </v-main>
    <global-footer />
  </v-app>
</template>

<script>
import GlobalHeader from '~/components/header/GlobalHeader.vue'
import GlobalFooter from '~/components/footer/GlobalFooter.vue'

export default {

  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>

<style scoped>
</style>
