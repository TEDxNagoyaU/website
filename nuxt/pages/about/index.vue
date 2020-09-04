<template>
  <div>
    <v-section v-bind="ted" />
    <v-section v-bind="tedx" />
    <v-section v-bind="tedxnu" />
  </div>
</template>

<script>
import VSection from '~/components/about/VSection'
export default {
  layout: 'bg',
  components: {
    VSection
  },
  data () {
    return {
      ted: {
        title: 'TEDとは？',
        content: 'TEDとは1984年に設立された、世界的なプレゼンテーションのカンファレンスです。このカンファレンスは１年に１度、カナダのバンクーバーで開催され、5 日間で約70名が登壇します。TEDは、Technology、Entertainment、Designの頭文字を表し、未来を作るための「価値あるアイディアを広める（ideas worth spreading）」という目的をもっています。 このプレゼンテーションの動画はTED Talksとしてインターネット上で公開されており(http://www.ted.com/)、3200 本以上の動画を誰でも見ることができます。過去にはビル・ゲイツやビル・クリントン、アル・ゴアなど著名な人物が数多く登壇しています。',
        src: 'aboutTed.png'
      },
      tedx: {
        title: 'TEDxとは？',
        content: 'TEDxとは、「ideas worth spreading」というTEDの 精神のもとに世界各地で発足し、 独自に運営されているイベントです。 世界各地の人々が、 TEDイベントのような経験を共有することができます。 TEDxイベントでは、TED Talksの 上映やライブ・スピーカーのプレゼンテーションによって深い議論が起こり、参加者同士の間に“つながり”が生まれます。 このように、各地域で独自に運営されるイベントを「TEDx」と呼び、 「x」は、「独自に開催されるTEDイベント」という意味を持ちます。TEDxイベントは、 TEDイベントの手引きにより運営されますが、 定められたルールの下で、独自に運営されています。',
        src: 'aboutTedx.jpg'
      },
      tedxnu: {
        title: 'TEDxNagoyaUとは？',
        content: 'TEDxNagoyaU は、TED Talk に感銘を受けたメンバーが TEDx イベントを名古屋大学で開催しようという意気込みのもと、 2013年度に発足しました。 実行委員会は名古屋大学の学生を中心とした名古屋近辺の学生で構成され、運営を行っています。',
        src: 'aboutTedxNu.jpg'
      }
    }
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
