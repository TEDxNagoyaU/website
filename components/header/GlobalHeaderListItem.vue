<template>
  <v-list-item nuxt link :to="path">
    {{ name }}
  </v-list-item>
</template>

<script>
export default {
  name: 'GlobalHeaderListItem',
  props: {
    path: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
