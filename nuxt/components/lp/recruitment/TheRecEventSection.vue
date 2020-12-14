<template>
  <v-container
    style="min-width: 100vw;"
    class="grey lighten-4"
  >
    <v-row>
      <v-col xs="12">
        <div id="setsumeikai">
          <v-card-title>新歓イベント</v-card-title>
          <v-card-subtitle>もしサークル選びの候補になったら</v-card-subtitle>
          <v-card-text>新メンバー募集のため、説明会とサロンイベントを開催します！</v-card-text>
          <v-row justify="left" class="mx-1">
            <v-col v-for="item in shinkanEvents" :key="item.title" xs="12" sm="6" md="6">
              <v-card height="100%">
                <!--なんとこのheight="100%"だけで高さが揃ってしまう-->
                <v-img :src="item.img" />
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
  name: 'TheRecEventSection',
  data () {
    return {
      shinkanEvents: [
        {
          title: '説明会',
          subtitle: '実際のミーティングに参加して雰囲気をつかもう',
          date: '4/16, 4/30',
          img: 'https://live.staticflickr.com/65535/49634567807_4dde461a02_b.jpg',
          text: 'TEDxNagoyaUについて、活動内容・イベント詳細はもちろん、「自分がやりたいことができるのか」「雰囲気は合っているか」を肌で確認していただけます！加入を少しでも検討される方には参加していただくことを強くおすすめしています。'
        },
        {
          title: 'TEDxNagoyaU Salon',
          subtitle: 'TEDxNagoyaUに興味が無くてもオススメ！！！',
          date: '',
          img: 'https://live.staticflickr.com/65535/49634344386_00b3cdfd7b_b.jpg',
          text: '毎年「これで参加を決めた！」という人が多いイベントです！新入生の方々の今後の大学生活に活かされること間違いなしのコンテンツになっています！！'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
