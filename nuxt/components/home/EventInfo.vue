<template>
  <div>
    <v-img
      src="bgFirstViewSecond.jpg"
      height="100%"
      max-height="600px"
      dark
      class="align-center"
    >
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <h1>イベントに関するお知らせ</h1>
          </v-col>
          <v-col>
            <div
              class="pa-2"
              style="backdrop-filter: brightness(50%)"
            >
              <ul>
                <li>動画の開始が2分40秒ほど遅延しております。</li>
                <li>ブレイク（スピーカーブース、Let's Steer Your Ship）の開始時間はタイムテーブル通りの14時30分スタートです。</li>
                <li>ブレイクのZoomの部屋はYouTubeの動画が終了する時刻には開いております。ご参加される参加者の皆様は14時25分までに入室していただくよう、お願いいたします。</li>
                <li>YouTubeのリンクは<a href="https://youtu.be/UUqsEXR-8rc">こちら</a>です。参加登録をしていなくてもご覧いただけます。</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'EventInfo'
}
</script>
