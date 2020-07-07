<template>
  <div>
    <v-section-theme v-bind="theme" />
    <v-section-info v-bind="info" />
  </div>
</template>

<script>
import VSectionInfo from '~/components/event/VSectionInfo'
import VSectionTheme from '~/components/event/VSectionTheme'
export default {
  layout: 'bg',
  components: {
    VSectionInfo,
    VSectionTheme
  },
  data () {
    return {
      theme: {
        title: '2020 TEDxNagoyaU Theme is ...',
        keyVisual: 'https://images.unsplash.com/photo-1572806380509-248c76eb81b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        theme: 'steer your ship!',
        wishs: 'テーマへの思い',
        content: 'TEDxとは、「ideas worth spreading」というTEDの 精神のもとに世界各地で発足し、 独自に運営されているイベントです。 世界各地の人々が、 TEDイベントのような経験を共有することができます。 TEDxイベントでは、TED Talksの 上映やライブ・スピーカーのプレゼンテーションによって深い議論が起こり、参加者同士の間に“つながり”が生まれます。 このように、各地域で独自に運営されるイベントを「TEDx」と呼び、 「x」は、「独自に開催されるTEDイベント」という意味を持ちます。TEDxイベントは、 TEDイベントの手引きにより運営されますが、 定められたルールの下で、独自に運営されています。'
      },
      info: {
        title: 'Event Information',
        abstruct: 'abstruct: 今年はオンライン開催となりました。',
        date: '2020/10/11(日)'
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
