<template>
  <v-row>
    <v-col
      v-for="speaker in speakers"
      :key="speaker.name"
      xs="12"
      sm="6"
      md="4"
      lg="3"
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
    const speakers = await $content('talks', params.year).fetch()
    return { params, speakers }
  },
  head () {
    return {
      title: this.params.year
    }
  }
}
</script>
