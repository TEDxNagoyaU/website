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
        content: 'TEDxとは、「ideas worth spreading」の精神に基づき、TEDはTEDxと呼ばれるプログラムを作成しました。 TEDxは、TEDのような体験を共有するために人々を結びつける、ローカルな、独立して組織されたイベントです。このイベントはTEDxNagoyaUと呼ばれます。ここで、xは独立して組織されたTEDイベント、という意味を指します。TEDxNagoyaUイベントでは、TEDTalksのビデオと生のトークが組み合わさり、少人数のグループでの深い議論とつながりが誕生します。TED本部はTEDxプログラムの一般的なガイダンスを提供しますが、私たちを含む個々のTEDxイベントは本部とは独立して運営されています。',
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
