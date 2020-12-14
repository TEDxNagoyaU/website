<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="event-title display-1 font-weight-bold mb-4">
          <span>{{ title }}</span>
        </h1>
      </v-col>
    </v-row>

    <v-row align="start" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-bold mb-4">
          開催：{{ date }}
        </h1>
      </v-col>
      <v-col cols="12">
        <v-img
          :aspect-ratio="16/9"
          :width="width"
          src="events/time_table.png"
        />
      </v-col>
      <v-col cols="12">
        <h1 class="event-title display-1 font-weight-bold mb-4">
          <span>Speakers</span>
        </h1>
      </v-col>
      <v-section-info-speaker-cards />
    </v-row>
  </div>
</template>

<script>
import VSectionInfoSpeakerCards from '~/components/event/VSectionInfoSpeakerCards'
export default {
  components: {
    VSectionInfoSpeakerCards
  },
  props: {
    title: {
      type: String,
      required: true
    },
    abstruct: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.event-title{
  color: rgb(133, 24, 24);
  border-bottom: 1px solid rgb(184, 49, 49);
  line-height: 1.5;
}
.event-title span{
  border-bottom: 6px solid rgb(184, 49, 49);
}
</style>>
