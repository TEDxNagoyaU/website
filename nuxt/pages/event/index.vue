<template>
  <div>
    <v-section-theme v-bind="theme" />
    <v-section-info v-bind="info" />
    <v-section-timeline />
    <v-section-faq />
  </div>
</template>

<script>
import VSectionInfo from '~/components/event/VSectionInfo'
import VSectionTheme from '~/components/event/VSectionTheme'
import VSectionTimeline from '~/components/event/VSectionTimeline.vue'
import VSectionFaq from '~/components/event/VSectionFaq'
export default {
  layout: 'bg',
  components: {
    VSectionInfo,
    VSectionTheme,
    VSectionTimeline,
    VSectionFaq
  },
  data () {
    return {
      theme: {
        title: '2020 TEDxNagoyaU Theme',
        keyVisual: 'keyvisual_black.png',
        theme: 'steer your ship!',
        wishs: 'テーマへの思い',
        content: '今年のテーマは「Steer Your Ship!」（舵を取れ！）です。テーマを考える上で、私たちは人生を「航海」と位置付けました。オンライン開催を余儀なくされてしまいましたが、私たちは本イベントが、時には目指す方向を見失いながらも自らの手で前に進もうとするあなたにとって新たな船出となることを切に願い、運営・開催をしていく所存です。その日が来ることを、スタッフ一同心待ちにしております。'
      },
      info: {
        title: 'Event Information',
        date: '2020年10月11日(日) 13:00~17:00'
      }
    }
  },
  head () {
    return {
      title: 'Steer Your Ship!'
    }
  }
}
</script>
