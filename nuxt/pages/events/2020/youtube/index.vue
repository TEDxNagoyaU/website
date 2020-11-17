<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>TEDxNagoyaU</v-card-title>
          <v-card-subtitle>2020年10月11日午前にURLを公開予定</v-card-subtitle>
          <v-card-text>
            <p>
              こちらは、TEDxNagoyaU (2020年10月11日オンライン開催)の配信URLをお知らせするためのページです。
            </p>
            <p>
              イベントのURLは当日12時までに公開されます。
            </p>
            <p>
              YouTubeでは12時45分から待機画面がスタートし、13時からタイムスケジュールが開始します。
            </p>
            <p
              v-if="youtubeUrl"
            >
              YouTube: <a :href="youtubeUrl">{{ youtubeUrl }}</a>
            </p>
            <p
              v-else
            >
              Youtube: Coming soon ...
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      youtubeUrl: 'https://youtu.be/UUqsEXR-8rc' // 公開時はここにリンクを入れる。
    }
  },
  head () {
    return {
      title: 'イベントのYouTubeリンクはこちらから'
    }
  }
}
</script>
