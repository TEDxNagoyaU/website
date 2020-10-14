<template>
  <div>
    <h1 class="event-title display-1 font-weight-bold mb-4">
      <span>Flow of Participate</span>
    </h1>
    <v-row
      justify="center"
    >
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="10"
      >
        <v-timeline
          :dense="isTimelineDense"
        >
          <v-timeline-item
            v-for="(item, index) in events"
            :key="index"
            :icon="item.icon"
            fill-dot
          >
            <v-card>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>{{ item.text }}</v-card-text>
              <v-card-actions
                class="pl-4"
              >
                <v-btn
                  v-if="item.btnText"
                  outlined
                  color="primary"
                  :href="item.btnLink"
                  :disabled="item.disabled"
                  @click.native="clickBtn(item.isFormLink)"
                >
                  {{ item.btnText }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
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
          btnLink: 'https://forms.gle/VBFtNkzgAiGfTz8S7',
          icon: 'mdi-text-subject',
          disabled: true,
          isFormLink: true
        },
        {
          title: '2, 確認メールを受信',
          text: 'お申込みいただくと、登録していただいたメールアドレスに確認用メッセージを送信させていただきます。',
          btnText: 'メールが届かない場合',
          btnLink: '/events/2020#faqs_before_event',
          icon: 'mdi-email',
          disabled: false,
          isFormLink: false
        },
        {
          title: '3, オープンチャットへ参加',
          text: '円滑な運営のため、参加者の皆様にはLINE openChatへの参加をお願いしています。必須ではありませんが、イベント当日にも迅速な対応が可能となるため、ぜひご参加ください。',
          btnText: 'オープンチャットの参加方法',
          btnLink: '/events/2020/open_chat',
          icon: 'mdi-chat',
          disabled: false,
          isFormLink: false
        },
        {
          title: 'Extra, SNSのフォローお願いします！',
          text: 'TwitterやFacebook, Instagramを更新しています！スピーカー情報なども随時お知らせしていますので、ぜひフォローしてください！',
          icon: 'mdi-share-variant-outline',
          disabled: false,
          isFormLink: false
        }
      ]
    }
  },
  computed: {
    isTimelineDense () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
        case 'lg': return false
        default: return false
      }
    }
  },
  methods: {
    clickBtn (isClickedFormLink) {
      if (!isClickedFormLink) {
        return
      }

      this.$ga.event({
        eventCategory: 'Event_2020',
        eventAction: 'clickLinkToForm',
        eventLabel: 'event2020',
        eventValue: 1
      })
    }
  }
}
</script>

<style>
.event-title{
  color: rgb(133, 24, 24);
  border-bottom: 1px solid rgb(184, 49, 49);
  line-height: 1.5;
}
.event-title span{
  border-bottom: 6px solid rgb(184, 49, 49);
}
</style>
