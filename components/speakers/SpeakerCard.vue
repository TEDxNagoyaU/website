<template>
  <v-card>
    <v-img :src="speaker.img"></v-img>
    <v-card-title v-text="speaker.name" />
    <v-card-subtitle v-text="speaker.position" />
    <v-card-text v-text="speaker.leadSentence" />
    <v-card-actions>
      <v-btn
        text
        v-if="speaker.detail"
        :to="speaker.path"
        nuxt
      >Detail</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SpeakerCard',
  props: {
    speaker: {
      type: Object,
      required: true
    }
  },
  computed: {
    detail () {
      return false// this.speaker === undefined ? true : false
    }
  }
}
</script>
