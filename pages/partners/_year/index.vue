<template>
  <div>
    <p>year</p>
    <p>{{ params.year }}</p>
    <p>params</p>
    <p>{{ params }}</p>
    <p>partners</p>
    <p>{{ partners }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const partners = await $content('partners', params.year).fetch()
    return { params, partners }
  }
}
</script>
