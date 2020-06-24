<template>
  <div>
    <p>slug</p>
    <p>{{ p.slug }}</p>
    <p>params</p>
    <p>{{ p }}</p>
    <p>speakers</p>
    <p>{{ speakers }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const speakers = await $content('speakers', params.year).fetch()
    const p = params
    return { p, speakers }
  }
}
</script>
