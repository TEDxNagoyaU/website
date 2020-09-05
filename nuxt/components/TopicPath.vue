<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" divider="/" class="pa-0" />
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

      const items = slicePath.map((string, i, array) => {
        const path = `/${array.slice(0, i + 1).join('/')}`
        return {
          text: string,
          to: path,
          exact: true,
          nuxt: true
        }
      })
      return items
    }
  }
}
</script>
