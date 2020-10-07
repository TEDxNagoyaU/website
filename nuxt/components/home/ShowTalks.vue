<template>
  <div>
    <v-container>
      <v-row>
        <h1 class="pl-3 text-h5">
          TEDxNagoyaU Talk
        </h1>
      </v-row>
      <v-row align="center">
        <v-col
          v-for="speaker in shuffleSlicedSpeakers()"
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
                    <v-col class="pt-0 pb-0" cols="8">
                      <v-card-title class="white--text">
                        {{ speaker.title }}
                      </v-card-title>
                      <v-card-subtitle class="white--text">
                        {{ speaker.name }}
                      </v-card-subtitle>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center">
                      <show-talks-dialog :youtube-id="speaker.youtubeId" />
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ShowTalksDialog from '~/components/home/ShowTalksDialog.vue'
export default {
  name: 'ShowTalks',
  components: {
    ShowTalksDialog
  },
  props: {
    speakers: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      youtubeModalOn: false,
      youtubeModalData: ''
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
    shuffleSlicedSpeakers () {
      const numberOfDisplay = this.numberOfDisplay
      return [...this.speakers].sort(() => Math.random() - 0.5).slice(0, numberOfDisplay)
    }
  }
}
</script>
