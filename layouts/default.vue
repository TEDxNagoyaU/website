<template>
  <v-app light>
    <global-header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}{{ DEPLOY_ENV }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import GlobalHeader from '~/components/GlobalHeader.vue'

export default {

  components: {
    GlobalHeader
  },
  data () {
    const DEPLOY_ENV = process.env.DEPLOY_ENV
    console.log(DEPLOY_ENV)
    return { DEPLOY_ENV }
  }
}
</script>
