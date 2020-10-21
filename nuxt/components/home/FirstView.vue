<template>
  <v-img
    src="bgFirstViewSecond.jpg"
    height="100%"
    max-height="600px"
    dark
    class="align-center"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <!--
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">
            TEDxNagoyaU2020オンラインイベント開催が決定しました！
          </h1>
        </v-col>
        -->
        <v-col class="text-center" sm="6" xs="12">
          <h1 class="display-1 font-weight-thin mb-4">
            2020' TEDxNagoyaU Theme
          </h1>
          <v-img src="keyvisual_white.png" class="bg-filter" />
        </v-col>
        <v-col class="text-center" sm="6" xs="12">
          <h1 class="display-1 font-weight-thin mb-4 text-decoration-underline">
            Date 10/11
          </h1>
          <!-- @click.nativeすることで、nuxt-linkを使いながらもclickイベントでメソッドを起こすことができる。 -->
          <v-btn
            class="ma-2 red--text"
            color="white"
            to="/events/2020"
            nuxt
            depressed
            @click.native="eventOfClickedEventDetail"
          >
            VIEW MORE
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  methods: {
    eventOfClickedEventDetail () {
      this.$ga.event({
        eventCategory: 'Home',
        eventAction: 'clickButton',
        eventLabel: 'event2020',
        eventValue: 1
      })
    }
  }
}
</script>

<style scoped>
a{
  color:white !important;
  text-decoration: none;
}

.bg-filter {
  backdrop-filter: brightness(50%)
}
</style>
