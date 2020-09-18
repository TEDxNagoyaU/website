<template>
  <div>
    <!--
  <h2
    class="d-none d-sm-block"
  >TEDxNagoyaU Talk</h2>
  <v-carousel class="align-center d-none d-sm-block">
    <v-carousel-item
      v-for="speaker in speakers"
      :key="speaker.name"
      class="pa-0"
    >
      <v-card color="white">
        <v-container class="pa-0">
          <v-row>
            <v-col
              cols="6"
              class="pa-0"
            >
              <v-img
                max-height="500px"
                :src="speaker.img"
              >
              </v-img>
            </v-col>
            <v-col cols="6">
              <v-card-title class="black--text">{{ speaker.title }}</v-card-title>
              <v-card-subtitle class="black--text">{{ speaker.name }}</v-card-subtitle>
              <v-card-text class="black--text">{{ speaker.leadSentence }}</v-card-text>
              <v-card-actions>
                <show-talks-dialog :youtubeId="speaker.youtubeId"/>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-carousel-item>
  </v-carousel>
  -->
    <!--
  ここまでパソコン向け。vuetifyのmd以上が対応
  スマホタブレットの表示はここから。vuetify の sm以下が対応
  -->

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
          sm="12"
          md="6"
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
    shuffleSlicedSpeakers () {
      return Object.create(this.speakers).sort(() => Math.random() - 0.5).slice(0, 4)
    }
  }
}
</script>
