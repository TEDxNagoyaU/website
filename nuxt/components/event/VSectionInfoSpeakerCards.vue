<template>
  <v-col>
    <v-row>
      <v-col
        v-for="(speaker, i) in speakers"
        :key="i"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="350px"
            position="center top"
            :src="speaker.image"
          />
          <v-card-title>{{ speaker.name }}</v-card-title>
          <v-card-subtitle class="pb-0">
            {{ speaker.title }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ speaker.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              v-for="(url, name) in speaker.urls"
              :key="name"
              icon
              :href="url"
            >
              <v-icon v-if="name === 'homepage'" size="25">
                mdi-application
              </v-icon>
              <v-icon v-if="name === 'shop'" size="25">
                mdi-application
              </v-icon>
              <v-icon v-if="name === 'facebook'" size="25">
                mdi-facebook
              </v-icon>
              <v-icon v-if="name === 'instagram'" size="25">
                mdi-instagram
              </v-icon>
              <v-icon v-if="name === 'twitter'" size="25">
                mdi-twitter
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>
