<template>
  <div>
    <p>slug</p>
    <p>{{ p.slug }}</p>
    <p>params</p>
    <p>{{ p }}</p>
    <p>speakers</p>
    <p>{{ speaker }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const speaker = await $content('speakers', params.year, params.slug).fetch()
    const p = params
    return { p, speaker }
  }
}
</script>
