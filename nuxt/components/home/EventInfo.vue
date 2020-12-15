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
          class="bg"
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <h1>TEDxNagoyaUは新メンバーを募集しています！</h1>
          </v-col>
          <v-col>
            <div
              class="pa-2"
              style="backdrop-filter: brightness(50%)"
            >
              <p>参加資格は以下の2点です</p>
              <ul>
                <li>週一回の定期ミーティングに参加できること</li>
                <li>名古屋近辺の学生であること</li>
              </ul>
              <p>
                詳細について説明する為に説明会を開催します！<br>
                TwitterのDMにて説明会への参加申し込みを受け付けています！<br>
                ご参加お待ちしております！
              </p>
              <p>
                Twitterアカウント<br>
                <a href="https://twitter.com/TEDxNagoyaU">https://twitter.com/TEDxNagoyaU</a>
              </p>
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

<style scoped>
.bg {
  background: rgba(0, 0, 0, 0.473);
  border-radius: 5px;
}
</style>
