<template>
  <div>
      <v-breadcrumbs divider="/">
    <v-breadcrumbs-item
      v-for="item in breadcrumbs"
      :key="item.path"
      exact
      nuxt
      :to="item.path"
    >{{ item.name }}</v-breadcrumbs-item>
  </v-breadcrumbs>
  <p>breadcrumbs: {{ breadcrumbs }}</p>
  <p>path: {{ path }}</p>
  </div>
</template>

<script>
export default {
  name: 'TopicPath',
  computed: {
    breadcrumbs () {
      const path = this.$route.path

      const slicePath = path.split('/')
      slicePath.shift()

      const items = slicePath.map((name, i, array) => {
        const path = `/${array.slice(0, i + 1).join('/')}`
        return {
          name,
          path
        }
      })
      /* const items = [
        {
          name: 'partners',
          path: '/partners'
        },
        {
          name: '2020',
          path: '2020'
        }
      ] */
      return items
    },
    path () {
      return this.$route.path
    }
  }
}
</script>
