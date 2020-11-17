<template>
  <div>
    <v-header />
    <v-about />
    <v-merit />
    <v-how-to-attend />
  </div>
</template>

<script>
import VAbout from '~/components/event/openchat/VAbout'
import VHeader from '~/components/event/openchat/VHeader'
import VHowToAttend from '~/components/event/openchat/VHowToAttend'
import VMerit from '~/components/event/openchat/VMerit'
export default {
  components: {
    VAbout,
    VHeader,
    VHowToAttend,
    VMerit
  },
  data () {
    return {
      theme: {
        title: '2020 TEDxNagoyaU Theme is ...',
        keyVisual: 'keyvisual_black.png',
        theme: 'steer your ship!',
        wishs: 'テーマへの思い',
        content: '今年のテーマは「Steer Your Ship!」（舵を取れ！）です。テーマを考える上で、私たちは人生を「航海」と位置付けました。オンライン開催を余儀なくされてしまいましたが、私たちは本イベントが、時には目指す方向を見失いながらも自らの手で前に進もうとするあなたにとって新たな船出となることを切に願い、運営・開催をしていく所存です。その日が来ることを、スタッフ一同心待ちにしております。'
      },
      info: {
        title: 'Event Information',
        abstruct: '今年はオンライン開催となりました。詳細は後日お知らせします。',
        date: '2020/10/11(日)'
      }
    }
  },
  head () {
    return {
      title: 'オープンチャットの参加方法'
    }
  }
}
</script>

<style>
h2{
margin: 2rem 0;
}
h3{

}
h4{

}
</style>>
