<template>
  <p>{{ allCategory }}</p>
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
  }
}
</script>
