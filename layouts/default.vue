<template>
  <v-app light>
    <global-header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import GlobalHeader from '~/components/header/GlobalHeader.vue'

export default {

  components: {
    GlobalHeader
  }
}
</script>
