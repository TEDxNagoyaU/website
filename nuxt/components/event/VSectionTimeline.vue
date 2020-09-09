<template>
  <div>
    <v-row>
      <v-timeline
        :dense="isTimelineDense"
      >
        <v-timeline-item
          v-for="(item, index) in events"
          :key="index"
        >
          <v-card>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.text }}</v-card-text>
            <v-card-actions>
              <v-btn
                outlined
                color="primary"
                :to="item.btnLink"
                v-if="item.btnText"
              >{{ item.btnText }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'VSectionTimeline',
  data () {
    return {
      events: [
        {
          title: '1, お申込み',
          text: 'お申込みは下記リンクから',
          btnText: 'お申込みフォーム',
          btnLink: 'https://tedxnagoyau.com'
        },
        {
          title: '2, 確認メールを受信',
          text: 'お申込みいただくと、登録していただいたメールアドレスに確認用メッセージを送信させていただきます。',
          btnText: 'メールが届かない場合',
          btnLink: 'https://tedxnagoyau.com'
        },
        {
          title: '3, オープンチャットへ参加',
          text: '円滑な運営のため、参加者の皆様にはLINE openChatへの参加をお願いしています。必須ではありませんが、イベント当日にも迅速な対応が可能となるため、ぜひご参加ください。',
          btnText: 'オープンチャットの参加方法',
          btnLink: '/event/open_chat'
        },
        {
          title: 'Extra, SNSのフォローお願いします！',
          text: 'TwitterやFacebook, Instagramを更新しています！スピーカー情報なども随時お知らせしていますので、ぜひフォローしてください！'
        }
      ]
    }
  },
  computed: {
    isTimelineDense () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
        default: return false
      }
    }
  }
}
</script>