<template>
  <v-img
    src="bgFirstViewSecond.jpg"
    height="100%"
    max-height="600px"
    dark
    class="align-center"
  >
    <v-container fluid fill-height>
      <v-row
        class="bg-filter"
        justify="center"
        height="100%"
        max-height="550px"
      >
        <!--
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">
            TEDxNagoyaU2020オンラインイベント開催が決定しました！
          </h1>
        </v-col>
        -->

        <h1 class="display-1 mb-4">TEDxNagoyaU2022メインイベントを開催します！</h1>
          <h2 class=" font-weight mb-4"></h2><br/>
          <v-btn
            class="ma-2"
            color="white"
            depressed
            href="https://tedxnagoyau.github.io/2022_event_web/"
            target="_blank"
          >
            特設サイト
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
        eventLabel: 'event2021',
        eventValue: 1
      })
    }
  }
}
</script>

<style scoped lang="scss">
$red: #d51212;
$inf-red: rgb(253,34,107);
$inf-orange: rgb(254,179,52);
$inf-blue: rgb(30,119,242);
$inf-light-blue: rgb(38,215,213);
$blue: rgb(25, 25, 154);
$black: rgb(33, 33, 33);
$white: #fff;

.row{
  height: 95%;
}
a{
  text-decoration: none;
}
.v-btn{
  background: linear-gradient(to right, $inf-orange, $inf-red, $inf-orange);
  background-size: 200% auto;
  border: none;
  transition: all 1s ease;
  color: $white;
  font-weight: bold;
  &:hover{
    background-position: right center;
  }
}
.bg-filter {
  backdrop-filter: brightness(50%)
}
</style>
