<template>
  <v-dialog
    v-model="dialog"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="red"
        v-bind="attrs"
        text
        v-on="on"
      >
        <v-icon large>
          mdi-youtube
        </v-icon>
      </v-btn>
    </template>
    <youtube
      ref="youtube"
      :video-id="youtubeId"
      :resize="true"
    />
  </v-dialog>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default {
  name: 'ShowTalksDiglog',
  props: {
    youtubeId: {
      type: String,
      required: false,
      default: 'hogehoge'
    }
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
