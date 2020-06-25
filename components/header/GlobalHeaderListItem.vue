<template>
  <v-list-item :to="path" nuxt>
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
