<template>
  <v-parallax :src="imgLink.normalSize" :height="parallaxHeight">
    <v-container>
      <v-row align="center">
        <v-col xs="12" class="text-center">
          <h1 class="display-1 font-weight-thin mb-4">協賛のお願い</h1>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6" v-for="item in messageFromTeam" :key="item.title">
          <h2>{{item.title}}</h2>
          <p>{{item.body}}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'PleaseSponsor',
  data: function () {
    return {
      width: window.innerWidth,
      parallaxHeight: 500,
      messageFromTeam: [
        {
          title: '協賛金の使途',
          body: '撮影・配信機材費、コンテンツ準備費、イベント広告費などに充てられます。これらの費用を総じて、今年度のオンライン本番イベントを開催するには総計約40万円が必要となります。\n我々は学生のみで活動している団体でありますので、理念に共感してくださるサポーター企業様のお力添えが必要不可欠です。'
        },
        {
          title: '協賛していただくメリット',
          body: '弊団体にご協賛していただくことで、YouTubeに公開されるトーク動画へのロゴ掲載や公式SNSへの企業紹介文の掲載などによる宣伝効果が期待できます。その上、TEDxNagoyaUのイベントは、高い理想や価値観を持った学生と多く出会える場となっておりますので、今の優秀な学生が何を考え、どのように行動したいと考えているのかを知る機会にもなります。'
        },
        {
          title: '理念に共感',
          body: 'TEDxNagoyaUのイベントは毎回テーマが設定されます。このテーマは社会に関する問題意識や、皆が普段当たり前と思っていることを見直すといった鋭い視点が反映されております。このテーマに共感していただくことは、貴社の理想や目標を達成することの一助となりえます。'
        },
        {
          title: '協賛プラン',
          body: '協賛プランは、ロゴ掲載、企業宣伝、アンケート調査、物品協賛がございます。各項目の詳細は下記に説明がございます。その他ご提案いただければ、可能な限り対応させていただきます。'
        }
      ],
      imgLink: {
        normalSize: 'img/21.jpg',
        bigSize: 'img/21_big.jpg'
      }
    }
  },
  methods: {

  },
  created: function () {
    this.width = window.innerWidth;
    if (this.width < 500 ) {
      this.parallaxHeight = 1200
      this.imgLink.normalSize = this.imgLink.bigSize
    }else if (this.width < 599) {
      this.parallaxHeight = 900
    }else if (this.width < 800) {
      this.parallaxHeight = 800
    }else{
      this.parallaxHeight = 500
    }
  },
  /*mounted: function () {
    window.addEventListener('resize',this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize',this.handleResize)
  }*/
}
</script>

<style lang="css" scoped>
</style>
