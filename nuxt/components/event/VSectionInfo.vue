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
      <v-col class="text-center" cols="12" sm="6">
        <h1 class="display-1 font-weight-bold mb-4">
          概要
        </h1>
        <p>{{ date }}</p>
      </v-col>
      <v-col cols="12" sm="6">
        <p class="subheading">
          {{ abstruct }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
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
