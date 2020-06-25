<template>
  <v-app light>
    <global-header />
    <v-main>
      <nuxt />
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import GlobalHeader from '~/components/GlobalHeader.vue'

export default {
  components: {
    GlobalHeader
  }
}
</script>
