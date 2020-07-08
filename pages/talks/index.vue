<template>
  <div>
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
  </div>
</template>

<script>
import SpeakerCard from '~/components/speakers/SpeakerCard.vue'
export default {
  components: {
    SpeakerCard
  },
  async asyncData ({ $content }) {
    const speakers = await $content('talks', { deep: true }).limit(12).fetch()
    return {
      speakers
    }
  },
  head () {
    return {
      titleTemplate: 'Speaker | TEDxNagoyaU'
    }
  }
}
</script>
