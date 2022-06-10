<template>
  <div>
    <v-container>
      <v-row>
        <h1 class="pl-3 text-h5">
          <br/>
          TEDxNagoyaU Talk(2021)
        </h1>
      </v-row>
      <v-row align="center">
        <v-col
          v-for="speaker in slicedSpeakers()"
          :key="speaker.name"
          xs="12"
          sm="6"
          md="4"
        >
          <v-card>
            <v-img
              :src="speaker.img"
              lazy-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAAAAAAZai4+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkCRkOBjOCFGLKAAAAkklEQVR42u3OwQmAMADAwO4/ZaWga+gKQsEgF8j/xkw2vgZgYWFhYWFFwsLCKoSFhVUICwurEBYWViEsLKxCWFhYhbCwsAphYWEVwsLCKoSFhVXo36zjmut8jrF2h4WFVQgLC6sQFhZWISwsrEJYWFiFsLCwCmFhYRXCwsIqhIWFVQgLC6sQFhZWISwsrEJYb7oBmCDsEMs9N24AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDktMjVUMjM6MDY6NTErMDk6MDC+nySAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA5LTI1VDIzOjA2OjUxKzA5OjAwz8KcPAAAAABJRU5ErkJggg=="
              class="align-end"
            >
              <div
                style="background: rgba(0,0,0,0.3)"
              >
                <v-container class="pa-0">
                  <v-row>
                    <v-col class="pt-0 pb-0" cols="12">
                      <v-card-title class="white--text text-body-1">
                        {{ speaker.title }}
                      </v-card-title>
                      <v-card-subtitle class="white--text">
                        {{ speaker.name }}
                      </v-card-subtitle>
                    </v-col>
                    <v-col v-if="speaker.youtubeId" cols="12" class="d-flex align-center pt-0 pb-0">
                      <v-btn
                        color="red"
                        text
                        @click="youtubeModalOn = true; youtubeModalData = speaker.youtubeId"
                      >
                        <v-icon large>
                          mdi-youtube
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="youtubeModalOn"
    >
      <youtube
        ref="youtube"
        :video-id="youtubeModalData"
        :resize="true"
      />
    </v-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default {
  name: 'ShowTalks',
  props: {
    speakers: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      youtubeModalOn: false,
      youtubeModalData: null
    }
  },
  computed: {
    numberOfDisplay () {
      let number
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': number = 2; break
        case 'sm': number = 4; break
        case 'md': number = 6; break
        case 'lg': number = 6; break
        case 'xl': number = 6; break
        default: number = 2
      }
      return number
    }
  },
  methods: {
    slicedSpeakers () {
      const numberOfDisplay = this.numberOfDisplay
      return [...this.speakers].slice(0, numberOfDisplay)
    }
  }
}
</script>
