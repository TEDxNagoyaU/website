<template>
  <div>
    <h1>Work In Progress</h1>
    <p>{{ allCategory }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    let allCategory
    try {
      allCategory = await $content('articles').only(['category']).fetch()
    } catch (error) {
      console.error(error)
    }
    return { allCategory }
  },
  head () {
    return {
      title: 'list'
    }
  }
}
</script>
