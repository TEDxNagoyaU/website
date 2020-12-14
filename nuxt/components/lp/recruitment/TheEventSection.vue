<template>
  <v-container
    style="min-width: 100vw;"
    class="grey lighten-4"
  >
    <v-row
    >
      <v-col xs="12">
        <div>
          <v-card-title>Event Content</v-card-title>
          <v-card-subtitle>どんなイベント？</v-card-subtitle>
          <v-card-text>イベントは1日を通して行い、登壇者のトークだけでなく、参加者同士の交流も多くあるのが特徴的です。</v-card-text>
          <v-row justify="center" class="mx-1">
            <v-col v-for="item in eventContents" :key="item.title" xs="12" sm="6" md="4">
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
  name: 'TheEventSection',
  data () {
    return {
      eventContents: [
        {
          title: 'Talk Session',
          subtitle: 'スピーカーによるトーク',
          img: 'https://live.staticflickr.com/1764/43251114892_a7f2f6c16a_k.jpg',
          // img: firstView,
          text: '7~9人のスピーカーがプレゼンテーションを行います。Technology Entertainment Design (TED)とあるように、様々なトピックでアイデアをプレゼンします。'
        },
        {
          title: 'Break Session',
          subtitle: 'トークに集中した後に',
          img: 'https://live.staticflickr.com/65535/49596215708_44d57902fe_k.jpg',
          text: 'トーク内容について参加者同士で考えたり、イベントのテーマについて深く考えることのできる時間です。トークの時間では伝えきれなかったスピーカーの熱い思いを聞くこともできます。'
        },
        {
          title: 'After Party',
          subtitle: '参加者同士でイベントの感想を共有',
          img: 'https://live.staticflickr.com/65535/48261788467_da6b0df5fd_k.jpg',
          text: '1日の終わりに、今日のイベントを食事と一緒に参加者同士で振り返ります。'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
