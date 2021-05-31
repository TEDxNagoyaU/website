<template>
  <v-col>
    <v-row>
      <v-col
        v-for="(speaker, i) in speakers"
        :key="i"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="350px"
            position="center top"
            :src="speaker.image"
          />
          <v-card-title>{{ speaker.name }}</v-card-title>
          <v-card-subtitle class="pb-0">
            {{ speaker.title }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ speaker.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              v-for="(url, name) in speaker.urls"
              :key="name"
              icon
              :href="url"
            >
              <v-icon v-if="name === 'homepage'" size="25">
                mdi-application
              </v-icon>
              <v-icon v-if="name === 'shop'" size="25">
                mdi-application
              </v-icon>
              <v-icon v-if="name === 'facebook'" size="25">
                mdi-facebook
              </v-icon>
              <v-icon v-if="name === 'instagram'" size="25">
                mdi-instagram
              </v-icon>
              <v-icon v-if="name === 'twitter'" size="25">
                mdi-twitter
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    speakers: {
      type: Array,
      default: () => []
    }
  }
}
</script>
