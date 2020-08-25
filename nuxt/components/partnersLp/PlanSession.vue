<template >
  <v-container>
    <v-row><v-col>
      <h1 class="display-1 font-weight-thin mb-4">協賛プラン</h1>
      <p>TEDxNagoyaUにご協賛していただくにあたり、いくつかのプランをご用意させていただきました。下記プランの組み合わせにより、協賛金額が上下いたします。</p>
      <p>また、全ての協賛企業様の企業名を、弊団体のホームページに掲載させていただくほか、当日イベント（10/11）と活動報告会（10/25）にご招待致します。</p>
    </v-col></v-row>
    <v-row>
      <v-col v-for="item in planList" v-bind:key="item.title" xs="12" sm="6" md="4">
        <v-card height="100%">
          <v-img :src="item.img"></v-img>
          <v-card-title>{{item.title}}</v-card-title>
          <v-card-subtitle>{{item.price}}<span v-if="item.per"> / {{item.per}}</span></v-card-subtitle>
          <v-card-text>{{item.desc}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PlanSession',
  data () {
    return {
      defaultElevation: 20,
      planList: [
        {
          title: "ロゴ掲載",
          img: 'https://live.staticflickr.com/65535/48254817982_6cd3d3b7a4_c.jpg',
          price: "2万円～",
          desc: 'TEDxNagoyaUホームページ、イベントトーク動画（YouTube 公式TEDxチャンネル 総再生回数 約40万回、2020/07/03時点））など、TEDxNagoyaU2020イベントに関わる様々なところに、貴社のロゴを掲載させていただきます。',
          bool: true,
          overlay: true,
        },
        /*
        {
          title: 'サンプリング配布',
          img: 'https://live.staticflickr.com/65535/48218630792_2310204909_c.jpg',
          price: '3万円',
          desc: 'TEDxNagoyaU2020の参加者の方々にお渡しするお土産袋に、貴社のフライヤー、商品サンプル等を同梱致します。約60名の学生を含む、100名の参加者の手にお渡しいたします。',
        },
        */
       /*
        {
          title: 'ブース出展',
          img: 'https://live.staticflickr.com/1770/28473777837_bd1b3ea9d3_c.jpg',
          price: '3万円',
          desc: 'TEDxNagoyaUのイベントが開催されている本会場とは別の場所で貴社のブースを出展することが可能です。スペースの大きさは長机2つ分ほどとなっております。（画像は株式会社青柳総本家様がブース出展をした際の様子です。）',
        },
        */
       /*
        {
          title: 'パブリックビューイング参加枠',
          img: 'https://live.staticflickr.com/1781/43293189772_17f305dd61_c.jpg',
          price: '2万円',
          per: '1人あたり',
          desc: 'TEDxNagoyaU2020のイベントが開催されている会場とは別の場所に、パブリックビューイングを行える場所を設置致します。そちらでもTEDxNagoyaUのイベントをご観覧いただけます。当日参加枠と同様にイベント後のアフターパーティーにもご参加いただけます。\n当日参加枠とは異なり、途中退出等が可能となっておりますので、よりフレキシブルにイベントをお楽しみになりたい方におすすめです。',
        },
        */
       /*
        {
          title: '当日参加枠',
          img: 'https://live.staticflickr.com/65535/49596209408_5f5556046d_c.jpg',
          price: '3万円',
          per: '1人あたり',
          desc: 'イベント及び、終了後のアフターパーティーにご参加いただけます。イベントでは、スピーカーのトークを実際に聴講していただけるだけでなく、ブレイクタイム企画やアフターパーティーにて、スピーカーや運営スタッフを含めた参加者と交流していただけます。',
        },
        */
        {
          title: '企業宣伝',
          img: 'img/megahon.png',
          price: '3万円',
          desc: 'TEDxNagoyaUイベントにどのようなご協力をしていただいているかや、応援していただいている理由などをインタビューさせていただき、TEDxNagoyaUのホームページや公式SNSで発信いたします。'
        },
        {
          title: 'アンケート調査',
          img: 'img/yes_no.jpg',
          price: '目安2万円（3社限定）',
          desc: '貴社からの質問のアンケート結果と、年齢・出身地などの属性を掛け合わせた調査報告をいたします。対象である100名以上の学生に対し、調査したい質問や最近の若者の流行まで、お気軽にご質問いただけます。'
        },
        {
          title: '物品協賛',
          img: 'https://live.staticflickr.com/65535/48218583016_d25eddc1d1_c.jpg',
          price: 'ご相談ください',
          desc: '物品協賛は物品に応じて金額に換算し、ロゴ掲載や企業宣伝など、他の協賛プランに代えさせていただきます。',
        }
      ],
      imgLink: {
        test: ""
      },
    }
  },
  methods: {
  }
}
</script>
<style lang="css" scoped>
</style>
