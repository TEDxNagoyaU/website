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
        <h1 class="font-weight-thin mb-4">
          開催：{{ date }}
        </h1>
      </v-col>
      <v-col cols="12">
        <v-img
          :aspect-ratio="16/9"
          :width="width"
          :src="timetable"
          v-if="timetable"
        />
      </v-col>
      <v-col cols="12">
        <h1 class="event-title display-1 font-weight-bold mb-4">
          <span>Speakers</span>
        </h1>
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
  },
  data () {
    const href = this.$route.path.split('/')
    const year = href[2]
    console.log(year)
    let table = ''
    if (year === '2020') {
      table = 'events/time_table.png'
    } else if (year === '2021') {
      table = ''
    } else {
      table = 'events/time_table.png'
    }
    return {
      timetable: table
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
