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
          v-for="speaker in shuffleSlicedSpeakers"
          :key="speaker.name"
          xs="12"
          sm="6"
        >
          <v-card>
            <v-img
              :src="speaker.img"
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
    // 画面幅に合わせてスピーカーの表示数を調整しつつ、シャッフルする関数
    shuffleSlicedSpeakers () {
      // const breakpoint = this.$vuetify.breakpoint.name
      // const numberOfDisplay = breakpoint === 'xs' ? 3 : breakpoint === 'sm' ? 4 : 6
      const numberOfDisplay = 4
      return Object.create(this.speakers).sort(() => Math.random() - 0.5).slice(0, numberOfDisplay)
    }
  }
}
</script>
