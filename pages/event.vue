<template>
  <div>
    <v-section-theme v-bind="theme"></v-section-theme>
    <v-section-info v-bind="info"></v-section-info>
    <v-section-form v-bind="form"></v-section-form>
  </div>
</template>

<script>
import VSectionForm from '~/components/event/VSectionForm'
import VSectionInfo from '~/components/event/VSectionInfo'
import VSectionTheme from '~/components/event/VSectionTheme'
export default {
  layout: 'full',
  data () {
    return {
      theme: {
        title: '2020 TEDxNagoyaU Theme is ...',
        keyVisual: 'https://lh6.googleusercontent.com/TjwebgbuMUHaNrYD2r0OYPLInqh_hqFLNBK0_9Vj4hJvBhnKygjVLTnkIwXrk6cXgPL9QWxQx9-Ud-mM7iOvWdHxbKBQ36b-TaAVYrlc',
        theme: 'steer your ship!',
        wishs: 'テーマへの思い',
        content: 'TEDxとは、「ideas worth spreading」というTEDの 精神のもとに世界各地で発足し、 独自に運営されているイベントです。 世界各地の人々が、 TEDイベントのような経験を共有することができます。 TEDxイベントでは、TED Talksの 上映やライブ・スピーカーのプレゼンテーションによって深い議論が起こり、参加者同士の間に“つながり”が生まれます。 このように、各地域で独自に運営されるイベントを「TEDx」と呼び、 「x」は、「独自に開催されるTEDイベント」という意味を持ちます。TEDxイベントは、 TEDイベントの手引きにより運営されますが、 定められたルールの下で、独自に運営されています。'
      },
      info: {
        title: 'Event Information',
        abstruct: 'abstruct: 今年はオンライン開催となりました。',
        date: '2020/10/11(日)'
      },
      form: {
        title: 'Form'
      }
    }
  },
  components: {
    VSectionForm,
    VSectionInfo,
    VSectionTheme
  }
}
</script>
