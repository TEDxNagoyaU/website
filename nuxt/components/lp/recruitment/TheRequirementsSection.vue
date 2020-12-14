<template>
  <v-container
    style="min-width: 100vw;"
    class="grey lighten-4"
  >
    <v-row>
      <v-col cols="12">
        <v-card-title>Requirements</v-card-title>
        <v-card-subtitle>加入までの流れです。Salonへの参加は必須ではありませんが、毎年好評のコンテンツのためぜひご参加ください。その他説明会、応募、面接は加入する上で必須事項になります。</v-card-subtitle>
        <v-card-text>
          <v-timeline dense>
            <v-timeline-item v-for="(item,i) in timeLineItems" :key="i" right>
              <v-card>
                <v-card-title>{{ i+1 }}、{{ item.title }}</v-card-title>
                <v-card-text>
                  <p>日程：{{ item.date }}</p>
                  <p>{{ item.text }}</p>
                </v-card-text>
                <v-card-text>
                  <v-btn
                    v-if="item.btnName"
                    color="primary"
                    large
                    depressed
                    class="mx-auto"
                    :disabled="item.btnDisabled"
                    @click="$vuetify.goTo(item.btnLink)"
                  >
                    {{ item.btnName }}<!--fu****************************************k-->
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TheRequirementsSection',
  data () {
    return {
      timeLineItems: [
        {
          title: '説明会に参加',
          date: '4/23, 5/7',
          text: 'TEDxNagoyaUに加入を希望される方には必ず説明会に参加していただいています。もし参加が難しい場合は別途対応させていただきますので、Twitterやメールでご連絡ください。',
          btnName: '説明会詳細',
          btnLink: '#setsumeikai',
          btnDisabled: false
        },
        /* {
          title: "Salonに参加",
          date: "4/30",
          text: "夏の本番イベントに向けて活動していくには、どんなものを作り上げていくのかイメージできることが大事です。サロンイベントを経験することで、加入後も明確なイメージを持ちながら活動できます！",
          btnName: null,
          btnLink: null,
          btnDisabled: false,
        }, */
        {
          title: '応募',
          date: '4/23 ~ 5/12',
          text: '「TEDxNagoyaUにメンバーとして参加したい！」と意思が固まったら、下記フォームから必要事項を入力してください。後日入力していただいた連絡先に面接日程の調整案内を送らせていただきます。',
          btnName: '申込フォーム',
          btnLink: 'https://docs.google.com/forms/d/e/1FAIpQLScjJBfaS_zjA8n2CURj7GIygOe0lAaaXdkVbe8QxpfIG7ZOLA/viewform?usp=sf_link',
          btnDisabled: true
        },
        {
          title: '面接',
          date: '5/7 ~ 5/19',
          text: 'TEDxNagoyaUは、運営がうまくいくことだけではなく、新メンバーの方々がうまく活動できるかどうかを重視しています。そのため、簡単な面接でなぜ加入したいのかやTEDxNagoyaUを選んでいただいた理由などについてお聞きしています。',
          btnName: null,
          btnLink: null,
          btnDisabled: null
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
