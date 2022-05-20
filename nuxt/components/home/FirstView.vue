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
        align="center"
        justify="center"
        height="100%"
        max-height="550px"
      >
        <!--
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">
            TEDxNagoyaU2020オンラインイベント開催が決定しました！
          </h1>
        </v-col> -->
                
       <v-col class="text-center" sm="6" xs="12"> -
          <h1 class="display-1 mb-4">サロン開催決定！</h1>
          <h2 class=" font-weight mb-4"></h2>
          
          <v-btn
            class="ma-2"
            color="white"
            depressed
            href="https://tedxnagoyau.github.io/2022salon2_website/"
            target="_blank"
          >
            詳細 
           </v-btn>
           <!--
          <v-btn
            class="ma-2"
            color="white"
            depressed
            href="https://docs.google.com/forms/d/e/1FAIpQLSdXmOpF0zvXZ6hYDejkTn0VN_uScg_Oek5DTAI6Syxcab5Oag/viewform"
            target="_blank"
          >
            参加申し込み
          </v-btn> -->
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
