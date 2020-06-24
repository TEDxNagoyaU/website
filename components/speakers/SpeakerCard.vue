<template>
  <v-card>
    <v-img :src="speaker.img"></v-img>
    <v-card-title v-text="speaker.name" />
    <v-card-subtitle v-text="speaker.position" />
    <v-card-text v-text="speaker.leadSentence" />
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
  }
}
</script>
