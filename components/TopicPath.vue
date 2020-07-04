<template>
  <div>
      <v-breadcrumbs divider="/">
    <v-breadcrumbs-item
      v-for="item in items"
      :key="item.path"
      exact
      nuxt
      :to="item.path"
    >{{ item.name }}</v-breadcrumbs-item>
  </v-breadcrumbs>
  <p>items: {{ items }}</p>
  <p>path: {{ path }}</p>
  </div>
</template>

<script>
export default {
  name: 'TopicPath',
  data () {
    return {
      items: [],
      path: ''
    }
  },
  beforeUpdate () {
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
    this.items = items
    this.path = path
  }
}
</script>
