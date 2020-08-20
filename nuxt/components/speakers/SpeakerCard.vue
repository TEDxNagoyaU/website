<template>
  <v-card
    class="ma-1 mb-1"
    max-width="300"
    :nuxt="true"
    outlined
  >
    <v-img
      :src="speaker.img"
      class="white--text align-end"
    />
    <v-card-title v-text="speaker.name" />
    <v-card-subtitle v-text="speaker.position" />
    <v-card-text class="text--primary" v-text="speaker.leadSentence" />
    <v-card-actions>
      <v-btn
        v-if="speaker.detail"
        text
        :to="speaker.path"
        nuxt
      >
        Detail
      </v-btn>
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
