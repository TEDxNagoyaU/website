<template>
  <div>
    <h1>{{ speaker.name }}</h1>
    <v-row>
      <v-col>

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const speaker = await $content('speakers', params.year, params.slug).fetch()
    return { params, speaker }
  }
}
</script>
