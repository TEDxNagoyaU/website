<template>
  <v-list-group>
    <template v-slot:activator>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </template>
    <v-list>
      <global-header-list-item
        v-for="link in links"
        :key="link.path"
        :path="link.path"
        :name="link.name"
      />
    </v-list>
  </v-list-group>
</template>

<script>
import GlobalHeaderListItem from '~/components/header/GlobalHeaderListItem.vue'
export default {
  name: 'GlobalHeaderListGroup',
  components: {
    GlobalHeaderListItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    links: {
      type: Array, // [{path: '/speaker/2020', name: '2020'}, {...}]
      required: true
    }
  }
}
</script>
