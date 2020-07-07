<template>
  <v-app light>
    <global-header />
    <v-main class="main">
      <v-container>
        <nuxt />
      </v-container>
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
.main{
  margin-bottom: 108px;
  background: url("https://images.unsplash.com/photo-1574282289010-5f1105f670b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60no-repeat");
      background-size: auto;
  background-size: cover;
}
</style>
