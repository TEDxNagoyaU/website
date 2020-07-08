<template>
  <div>
    <h1>{{ speaker.name }}</h1>
    <v-row>
      <v-col />
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const speaker = await $content('talks', params.year, params.slug).fetch()
    return { params, speaker }
  },
  head () {
    return {
      title: this.speaker.name
    }
  }
}
</script>
