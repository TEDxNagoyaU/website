<template>
  <v-row>
    <v-col
      v-for="speaker in speakers"
      :key="speaker.name"
      sm="4"
      md="3"
      lg="3"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card tile outlined>
          <v-img :src="speaker.img" class="d-flex align-end">
            <v-expand-transtion>
              <div
                v-if="hover"
                class="transition-fast-in-fast-out black"
                style="opacity: .5"
              >
                <v-card-title class="white--text">{{ speaker.title }}</v-card-title>
                <v-card-subtitle class="white--text">{{ speaker.name }}</v-card-subtitle>
              </div>
            </v-expand-transtion>
          </v-img>
      </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ShowTalks',
  props: {
    speakers: {
      type: Array,
      required: true
    }
  }
}
</script>
