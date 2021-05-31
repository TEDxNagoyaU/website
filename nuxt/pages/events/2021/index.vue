<template>
  <div>
    <v-section-info v-bind="info" />
    <v-section-info-speaker-cards :speakers="speakers" />
    <v-section-timeline />
    <v-section-faq />
  </div>
</template>

<script>
import VSectionInfo from '~/components/event/VSectionInfo'
import VSectionTimeline from '~/components/event/VSectionTimeline.vue'
import VSectionFaq from '~/components/event/VSectionFaq'
import VSectionInfoSpeakerCards from '~/components/event/VSectionInfoSpeakerCards'
export default {
  components: {
    VSectionInfo,
    VSectionTimeline,
    VSectionFaq,
    VSectionInfoSpeakerCards
  },
  data () {
    return {
      theme: {
        title: '2021 TEDxNagoyaU Theme',
        keyVisual: 'keyvisual_black.png',
        theme: 'steer your ship!',
        wishs: 'テーマへの思い',
        content: '今年のテーマは「Steer Your Ship!」（舵を取れ！）です。テーマを考える上で、私たちは人生を「航海」と位置付けました。オンライン開催を余儀なくされてしまいましたが、私たちは本イベントが、時には目指す方向を見失いながらも自らの手で前に進もうとするあなたにとって新たな船出となることを切に願い、運営・開催をしていく所存です。その日が来ることを、スタッフ一同心待ちにしております。'
      },
      info: {
        title: 'Event Information',
        date: '2021年7月4日(日) 13:00~17:45'
      },
      speakers: [
        {
          name: '???',
          title: '???',
          description: 'Coming Soon...',
          image: 'events/speaker2021/person1.png',
          urls: {
          }
        },
        {
          name: '???',
          title: '???',
          description: 'Coming Soon...',
          image: 'events/speaker2021/person1.png',
          urls: {
          }
        },
        {
          name: '???',
          title: '???',
          description: 'Coming Soon...',
          image: 'events/speaker2021/person1.png',
          urls: {
          }
        },
        {
          name: '???',
          title: '???',
          description: 'Coming Soon...',
          image: 'events/speaker2021/person1.png',
          urls: {
          }
        },
        {
          name: '???',
          title: '???',
          description: 'Coming Soon...',
          image: 'events/speaker2021/person1.png',
          urls: {
          }
        }
      ]
    }
  },
  head () {
    return {
      title: 'Steer Your Ship!'
    }
  }
}
</script>
