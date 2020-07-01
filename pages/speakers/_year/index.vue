<template>
  <v-row>
    <v-col
      v-for="speaker in speakers"
      :key="speaker.name"
      cols="1"
      sm="2"
      md="3"
      lg="4"
    >
      <speaker-card :speaker="speaker" />
    </v-col>
  </v-row>
</template>

<script>
import SpeakerCard from '~/components/speakers/SpeakerCard.vue'

export default {
  components: {
    SpeakerCard
  },
  async asyncData ({ $content, params }) {
    const speakers = await $content('speakers', params.year).fetch()
    return { params, speakers }
  },
  head () {
    return {
      title: this.params.year
    }
  }
}
</script>
