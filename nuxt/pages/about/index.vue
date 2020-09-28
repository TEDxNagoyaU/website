<template>
  <div>
    <v-section :title="ted.title" :src="ted.src" :alt="ted.alt">
      <p>TEDは、先進的な思想家と活動家による短時間のトーク（通常18分以内）により、「価値あるアイデアを広げる」ことに邁進する非営利団体です。これらの多くのトークは、TEDカンファレンスや、懇意なTEDサロン、そして独立して組織された数千もの世界中のTEDxイベントにおいて提供されます。これらのトークのビデオは<a href="https://www.ted.com/">TED.com</a>や他のプラットフォームで無料で視聴できます。TEDトークのオーディオ版は<a href="http://applepodcasts.com/tedtalksdaily">TED Talks Daily</a>で公開され、すべてのポッドキャストプラットフォームで聞くことができます。アイデアを広めるためのTEDのオープンで自由な取り組みには、新しいTEDトーク動画が毎日投稿される<a href="https://www.ted.com/">TED.com</a>、何千もの人々やグループに、自分達の手で地域に根差したTEDスタイルのイベントを世界中で開催することを許可する<a href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx</a>、注目に値するプロジェクトや活動の影響を広げるために世界中から革新者を選ぶ<a href="https://www.ted.com/participate/ted-fellows-program">TED Fellows Program</a>、数百万の生命に影響を与えうる批判的なアイデアを発掘し、資金を提供する<a href="https://audaciousproject.org/">The Audacious Project</a>、重要なアイデアが言語と国境の壁を越えて広がっていくことができるように、TEDトークの字幕付けをクラウドソーシングする<a href="https://www.ted.com/participate/translate">TED Translate</a>、そして、教育的な取り組みをする<a href="https://ed.ted.com/">TED-Ed</a>があります。TEDはさらに、職場での学びのためにTEDトークを再構成する、<a href="https://tedatwork.ted.com/">TED@Work</a>を提供しています。また、TEDはクリス・アンダーソンによる<a href="https://www.ted.com/podcasts/ted-interview">TED Interview</a>や、<a href="https://www.ted.com/podcasts/worklife">WorkLife with Adam Grant</a>、<a href="https://www.ted.com/podcasts/pindrop">Pindrop</a>、そして<a href="https://www.ted.com/podcasts/tedxshorts">TEDxSHORTS</a>を含むオリジナルのポッドキャストライブラリーを拡大させています。<a href="http://twitter.com/TEDTalks">Twitter</a>、<a href="http://www.facebook.com/TED">Facebook</a>、<a href="https://www.instagram.com/ted/">Instagram </a>、そして <a href="https://www.linkedin.com/company/ted-conferences">LinkedIn</a>でTEDをフォローしてください。</p>
    </v-section>
    <v-section :title="tedx.title" :src="tedx.src" :alt="tedx.alt">
      <p>
        TEDx（テデックス）とは、”ideas worth spreading”の精神に則り、人々にTEDのような体験の共有をもたらすことを目的として世界各地で独自に運営されているプログラムです。TEDxイベントでは、TEDトーク動画とライブスピーカーが、火花のようにきらめく、深い対話とつながりを組み合わせます。これらの、地域に根差した独自のイベントはTEDxとしてブランド化され、「x」は独自に運営されていることを意味します。TEDカンファレンスがTEDxプログラムのために一般的なガイダンスを提示していますが、個々のTEDxイベントは独自に運営されています。（一定のルールと規制に基づく）
      </p>
    </v-section>
    <v-section :title="tedxnu.title" :src="tedxnu.src" :alt="tedxnu.alt">
      <p>
        ”ideas worth spreading”というTEDの理念に共感した学生たちにより結成され、TEDから正式にライセンスを取得し、2013年に発足した非営利団体です。現在も名古屋大学を中心に、大学生のみで構成・運営されています。
      </p>
    </v-section>
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
        title: 'What is TED?',
        src: 'aboutTed.png',
        alt: 'TEDのロゴ'
      },
      tedx: {
        title: 'What is TEDx?',
        src: 'aboutTedx.jpg',
        alt: 'TEDxのロゴ、舞台装飾'
      },
      tedxnu: {
        title: 'What is TEDxNagoyaU?',
        src: 'aboutTedxNu.jpg',
        alt: 'TEDxNagoyaU 2019の代表挨拶'
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
