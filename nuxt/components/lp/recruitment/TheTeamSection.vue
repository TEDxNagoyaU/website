<template>
  <v-container
    style="min-width: 100vw;"
  >
    <v-row>
      <v-col xs="12">
        <div>
          <v-card-title>Teams</v-card-title>
          <v-card-subtitle>加入したらなにをする？</v-card-subtitle>
          <v-card-text>春から加入したメンバーは、7月（予定）のイベントに向けて以下の3つのチームに分かれて活動を行います。</v-card-text>
          <v-row justify="center" class="mx-1">
            <v-col v-for="item in teamContents" :key="item.title" xs="12" sm="6" md="4">
              <v-card height="100%">
                <!--なんとこのheight="100%"だけで高さが揃ってしまう-->
                <v-img :src="item.img" alt="" />
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                <v-card-text>{{ item.text }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TheTeamSection',
  data () {
    return {
      teamContents: [
        {
          title: 'Speaker Team',
          subtitle: 'スピーカーとトークを一緒に作り上げるチーム',
          img: 'https://live.staticflickr.com/1810/41531993540_04681e7caa_k.jpg',
          text: '本番イベントのメインコンテンツ、スピーカーのトーク内容に深く関わるチームです。スピーカーの決定から、トーク内容の磨き上げ、Body languageのやり方についてスピーカーの方々にアドバイスしていきます！2019年の登壇者の方々の情報はこちらから!'
        },
        {
          title: 'Communication Team',
          subtitle: '協力企業、大学等と連携するチーム',
          img: 'https://live.staticflickr.com/835/28473721867_c8a63a7647_k.jpg',
          text: '主にイベントの開催にお力添えいただく協賛企業様とのやり取りを行うチームです。具体的には、メールや電話などで連絡を行ってアポイントメントを取り、企業訪問を行い、協賛をいただくということをやっています。また,当日のブレイクタイムに行われるコンテンツ企画・制作も行っています。'
        },
        {
          title: 'Tech Team',
          subtitle: 'SNS, HPの管理からタスク自動化、当日機材操作まで',
          img: 'https://live.staticflickr.com/65535/48195485222_8dbbb4a284_h.jpg',
          text: '本番では舞台の映像照明音響を一手に引き受け、本番前は当ホームページ管理・SNS管理・団体内システムの構築などを行っている技術系チームです。なにかを作ること・便利にすることに興味がある人大歓迎！'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
