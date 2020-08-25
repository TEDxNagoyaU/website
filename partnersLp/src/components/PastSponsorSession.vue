<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>昨年度協賛企業様ご芳名</v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="12" sm="7">
                <v-img :src="imgLink.logoPartner" alt="2019年パンフレット" @load="loaded()"></v-img>
                <!--
                {{loading}}
                <v-skeleton-loader type="image" :loading="loading">

                </v-skeleton-loader>
              -->
              </v-col>
              <v-col cols="12" sm="5">
                <span>Partners</span>
                <ul>
                  <li v-for="item in sponsorList2019normal" :key="item.name">{{item.name}} 様</li>
                </ul>
                <span>Inkind Partners</span>
                <ul>
                  <li v-for="item in sponsorList2019material" :key="item.name">{{item.name}} 様</li>
                </ul>
                <span>後援</span>
                <ul>
                  <li>名古屋大学</li>
                </ul>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PastSponsorSession',
  data: function () {
    return {
      imgLink: {
        logoPartner: 'img/logoMatrix.jpg'
      },
      sponsorList2019normal: [
        {
          name: '大同特殊鋼株式会社'
        },
        {
          name: '株式会社イエス'
        },
        {
          name: 'アビームシステムズ株式会社'
        },
        {
          name: 'イー・エフ・エデュケーション・ファースト・ジャパン'
        },
        {
          name: '株式会社青柳総本家'//30000
        },
        {
          name: '株式会社サーラコーポレーション'
        },
        {
          name: '株式会社ソフトバリー'//30000
        },
        {
          name: '株式会社キャディッシュ'//20000
        },
        {
          name: '中京テレビ放送株式会社'//20000
        },
        {
          name: '東京海上日動火災保険株式会社'//20000
        },
        {
          name: '株式会社Harmony For'//20000
        },
        {
          name: '株式会社イノベスト'//20000
        },
        {
          name: '株式会社コーチング・システムズ'//20000
        },
        {
          name: '株式会社ジェイエスティ'//10000
        }
      ],
      sponsorList2019material: [
        {
          name: '株式会社シーマ'
        },
        {
          name: 'Peatix Japan株式会社'
        },
        {
          name: '磯田園製茶株式会社'
        },
        {
          name: '株式会社 エス・ピー・プラネット'
        },
        {
          name: 'レッドブル・ジャパン株式会社'
        }
      ],
      loading: true,
    }
  },
  methods: {
    loaded: function () {
      console.log(this.loading);
      this.loading = false
      console.log(this.loading);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
