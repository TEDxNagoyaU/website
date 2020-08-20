<template>
  <v-tab
    link
    nuxt
    :to="path"
  >
    {{ name }}
  </v-tab>
</template>

<script>
export default {
  name: 'GlobalHeaderTabs',
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>
