<template>
  <div>
    <v-section-theme v-bind="theme" />
    <v-section-info v-bind="info" />
    <v-section-info-speaker-cards :speakers="speakers" />
    <v-section-timeline />
    <v-section-faq />
  </div>
</template>

<script>
import VSectionInfo from '~/components/event/VSectionInfo'
import VSectionTheme from '~/components/event/VSectionTheme'
import VSectionTimeline from '~/components/event/VSectionTimeline.vue'
import VSectionFaq from '~/components/event/VSectionFaq'
import VSectionInfoSpeakerCards from '~/components/event/VSectionInfoSpeakerCards'
export default {
  layout: 'bg',
  components: {
    VSectionInfo,
    VSectionTheme,
    VSectionTimeline,
    VSectionFaq,
    VSectionInfoSpeakerCards
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
      },
      speakers: [
        {
          name: '石黒由美子',
          title: 'アーティスティックスイミング元日本代表',
          description: '交通事故で大けがを負った少女。入院中にテレビで見たシンクロに憧れ、夢ノートへペンを走らせた。「オリンピックにでる！」顔面麻痺、視力障害、難聴など様々な後遺症を乗り越え、2008年北京オリンピック出場。奇跡とも言える逆転劇をみせた彼女が語るのは〝帰る場所があるということ“',
          image: 'events/speaker/ishiguro.jpg',
          urls: {
            homepage: 'https://s-rights.co.jp/member/ishiguro-yumiko',
            facebook: 'https://www.facebook.com/yumiko.ishiguro.12',
            instagram: 'https://instagram.com/synchro_yumiko',
            twitter: 'https://twitter.com/yumikoishiguro'
          }
        },
        {
          name: '柳井谷浩太',
          title: '高校生で世界二周',
          description: '高校生活が嫌になり、逃げ出すために世界一周しようと決意。世界一周をする中で、自分自身を認めてあげることができるようになった。本当の自分と向き合うために大切なこととは？',
          image: 'events/speaker/yana.jpg',
          urls: {
            twitter: 'https://www.twitter.com/yananezumi/'
          }
        },
        {
          name: 'SHOGEN',
          title: 'アフリカンペイントアーティスト',
          description: '色を絞れば絞るほど幸せに近づけるとされていることから、6色のみで描かれるタンザニアのペンキアート「ティンガティンガ」。事前のコネクション無しに単身タンザニアに渡り、現地の人々と共に過ごしたSHOGENが、彼らから学び大切にしているのは「思い込み」。「思い込み」こそが自分自身に魔法をかけ、人を幸せにする。',
          image: 'events/speaker/shogen.jpg',
          urls: {
            homepage: 'http://www.nzu-risana.com',
            facebook: 'https://m.facebook.com/shogen01/',
            instagram: 'https://instagram.com/uedashogen?igshid=19wikx5pj6jt3',
            twitter: 'https://twitter.com/SHOGEN0329?s=21'
          }
        },
        {
          name: '山崎姫菜子',
          title: 'sobolon代表',
          description: '"可愛い"で地球を守る！海洋プラスチックアクセサリーsobolon代表。自分の中にあった「可愛い」×「環境問題」という相反する2つの要素を、バランスをとるのではなく、掛け合わせ一つにすることで、新たな問題解決方法を提案。そんな彼女が語る、みんなで幸せになれる「自分自身の在り方」とは？',
          image: 'events/speaker/yamazaki.jpg',
          urls: {
            homepage: 'https://www.sobolon.com/',
            shop: 'https://sobolon3695.thebase.in/',
            instagram: 'https://instagram.com/sobolon3695?igshid=8trl18gsklr0'
          }
        },
        {
          name: '田中秀孝',
          title: '名古屋大学　宇宙地球環境研究所　特任教授',
          description: '日本初の有人宇宙システム「国際宇宙ステーション日本実験棟」の提案・開発から打ち上げまで携わってきた。この経験から培った知識、考え方を以ってフロンティア宇宙を目指す人の育成に励む。これからの社会変革と共に、私たちは宇宙開発・利用を身近に感じることになる。新しい時代を生きていく地球人へのメッセージを語る。',
          image: 'events/speaker/tanaka.jpg',
          urls: {
          }
        },
        {
          name: '山田卓哉',
          title: '大ナゴヤ大学　学長',
          description: '北海道出身。現在、大ナゴヤ大学の学長として名古屋市を中心とした東海エリアのまちの魅力を題材に学びあいの場をつくる。「やりたいこと」を追求し続け、仕事や生き方としてカタチにするヒントとは？',
          image: 'events/speaker/yamada.jpg',
          urls: {
            homepage: 'https://dai-nagoya.univnet.jp',
            instagram: 'https://instagram.com/yamatakkun?igshid=1diqy3lnmycl',
            twitter: 'https://twitter.com/tahku?s=21'
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
