<!--
<template>
  <div>
    <p>{{ uniqueTags }}</p>
    <p>{{ tagsArticle }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const tags = await $content('articles', { deep: true }).only(['tags']).fetch()
    const tagsSet = new Set(tags.map((obj) => {
      const tagsArray = obj.tags
      return tagsArray
    }).flat())
    const uniqueTags = Array.from(tagsSet).sort()

    const tagsArticles = await Promise.all(uniqueTags.map(async (tag) => {
      const articles = await {} // await $content('articles', { deep: true }).search('tags', tag).fetch()
      return {
        tag,
        articles
      }
    }))

    return { uniqueTags, tagsArticles }
  }
}
</script>
-->
