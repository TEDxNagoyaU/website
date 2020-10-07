<template>
  <div>
    <v-row>
      <v-col>
        <h1
          class="text-h4"
        >
          お問い合わせ
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-title>メールから</v-card-title>
          <v-card-subtitle>お問い合わせ全般に対応いたします。</v-card-subtitle>
          <v-card-text>
            <p>
              <a href="mailto:info[at]tedxnagoyau.com">info[at]tedxnagoyau.com</a> [at]は@へ変換してください。
            </p>
            <ul>
              <li>
                協賛企業様・協賛をご検討されている企業様は「コミュニケーションチーム 弓達」宛にご連絡ください。
              </li>
              <li>
                他TEDx団体様、またはTEDx運営をご検討されている方は「オーガナイズチーム 上田」宛にご連絡ください。
              </li>
              <li>
                ホームページに関するお問い合わせは「テックチーム 杉浦」宛にご連絡ください。
              </li>
              <li>
                その他お問い合わせは「オーガナイズチーム 山崎」宛にご連絡ください。
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-title>SNSから</v-card-title>
          <v-card-subtitle>ポップなトーンで対応します！</v-card-subtitle>
          <v-card-text>
            <a href="https://twitter.com/TEDxNagoyaU">Twitter</a>、<a href="https://facebook.com/tedxnagoyau">Facebook</a>、<a href="https://www.instagram.com/tedxnagoyau/">Instagram</a>で受け付けています。お好きな窓口からお問い合わせください！
            <ul>
              <li>簡単にご用件をお伝えください。担当の者に確認いたします。</li>
              <li>返信が滞ってしまう時期があります。ご容赦ください。重要・緊急を要する場合はメールにてご連絡いただくよう、お願いいたします。</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'お問い合わせ'
    }
  }
}
</script>
