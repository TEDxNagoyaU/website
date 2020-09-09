<template>
  <div>
    <v-parallax :src="imgLink.missionView">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            Mission( 活動目的 )
          </h1>
          <h3 class="subheading">
            ありたい姿に向かって挑戦し、ひとりひとりが楽しく生きる社会の実現に貢献する
          </h3>
          <p />
          <p style="line-height:2em">
            "should" (しなければならない) があふれる社会から、"want" (やりたい) があふれる社会へ。
          </p>
        </v-col>
      </v-row>
    </v-parallax>

    <v-parallax :src="imgLink.visionView">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            Vision( 目指す姿 )
          </h1>
          <h3 class="subheading">
            あらゆる人と人、アイデアとアイデアをつなげ、挑戦するに足る高いエネルギーを生み出す場にする
          </h3>
          <p><br v-if="false"></p>
          <p style="line-height:2em">
            新しいアイデアに触れ、様々な人と交流することで新たな自分を見つけ、一歩踏み出すエネルギーを創出する。
          </p>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'MissionVisionSession',
  data () {
    return {
      imgLink: {
        missionView: '/partnersLp/img/25.jpg',
        visionView: '/partnersLp/img/23.jpg'
      }
    }
  }
}
</script>

<style>

</style>
