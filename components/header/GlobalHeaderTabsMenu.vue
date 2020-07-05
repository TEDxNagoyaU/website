<template>
  <v-menu bottom open-on-hover offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        class="align-self-center"
        v-bind="attrs"
        v-on="on"
      >
        {{ title }}
      </v-btn>
    </template>
    <v-list>
      <global-header-list-item
        v-for="link in links"
        :key="link.path"
        :path="link.path"
        :name="link.name"
      />
    </v-list>
  </v-menu>
</template>

<script>
import GlobalHeaderListItem from '~/components/header/GlobalHeaderListItem.vue'
export default {
  name: 'GlobalHeaderTabsMenu',
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
