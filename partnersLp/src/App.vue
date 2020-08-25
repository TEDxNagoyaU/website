<template>
  <v-app light>
    <global-header/>
    <v-content>
      <router-view/>
    </v-content>
    <global-footer/>
  </v-app>
</template>

<script>
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'

export default {
  name: 'App',

  components: {
    GlobalHeader,
    GlobalFooter
  },

  data: () => ({
    //
  }),
};
</script>
