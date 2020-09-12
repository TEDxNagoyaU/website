<template>
  <div class="policy">
    <div class="paper">
      <div class="paper-header">
        <h2 class="header-title">
          行動規範
        </h2>
      </div>
      <div class="paper-content">
        <p>
          TEDxNagoyaU 実行委員会（以下、「当組織」）は、当組織が主催するイベントである TEDxNagoyaU（以下「本イベント」）の趣旨（<nuxt-link to="/about">
            https://tedxnagoyau.com/about
          </nuxt-link>）に則り、誰にとっても安心安全な環境で居心地の良い有意義な時間を過ごしていただけるように、ここに行動規範を定めます。
        </p>
        <p>本イベントの参加者（パティシパント、スピーカー、パートナー、ボランティアスタッフなど立場の如何を問わず本イベントに関わる全ての方）は、この行動規範をよく読み、理解し、かつ遵守してくださるよう、切に願うものです。</p>

        <h4>【本イベントの背景と求める行動】</h4>
        <p>本イベントは、人種、国籍、宗教、信条、障がい、性別、年齢、出身地、価値観および職種など多種多様な背景を持つ人々が参加するイベントであり、このような多様性を最大限に尊重しかつ歓迎しています。</p>
        <p>そのため、当組織は参加者間で交わされる言動は互いに思いやりを持ち、相手を尊重し、礼節を重んじた相応しいものであるべきと考えています。したがって、当組織は本イベントのすべての参加者に以下の行動を求めます。</p>
        <ul>
          <li>すべてのイベント参加者にとって、安全かつ協力的な環境を作るように行動すること</li>
          <li>他の参加者に対してハラスメント（いやがらせ）行為を行わないよう心掛けると同時に、万一自身のハラスメント行為（意識的、無意識的を問いません）について他者（当組織に限らず、全てのパティシパント、スピーカー、ボランティアスタッフ等）から指摘を受けた場合は、直ちにその行動を中止すること</li>
          <li>イベントおよび会場スタッフの指示に従うこと</li>
          <li>すべての適用ある法を遵守すること</li>
        </ul>
        <p />
        <h3>※ハラスメント行為とは</h3>
        <ul>
          <li>他の参加者に対するナンパ行為（容姿に関する発言、恋愛・性的興味を目的とした発言）や不適切な身体的接触を行うこと</li>
          <li>ジェンダー（社会的・心理的性別）、性的指向・性自認（LGBTQIA+など）、ジェンダーの表出、障がい、容ぼう、身体の大きさ、年齢、人種、国籍、民族、宗教について、当人が不快に感じる発言や差別を助長する言動を行うこと</li>
          <li>公共の場（インターネットを含む）に性的な画像を掲示したり、見せびらかしたりすること</li>
          <li>他の参加者に対して、故意の威嚇やストーキング、つきまとい、本人が嫌がらせと感じるような写真撮影や録音録画を行うこと</li>
          <li>カンファレンスの発表や、その他のイベントを妨害すること</li>
          <li>他の参加者に対して、カンファレンスやその他のイベントでセールス、勧誘、布教活動を行うこと</li>
          <li>その他、社会通念に照らしハラスメント（嫌がらせ・迷惑行為）と認められる一切の言動</li>
        </ul>
        <p />
        <h3>違反が認められた場合</h3>
        <p>当組織は、本行動規範の趣旨に反してハラスメント行為を行う参加者に対して警告を行うだけでなく、発表の中止やカンファレンス会場からの即時退場の指示を含め、当組織の裁量であらゆる処置を行うことができます。</p>
        <p>本イベントの参加者は、当組織の指示に即時かつ無条件に従うものとします。また、当組織の裁量によって会場から退場を指示された場合、該当者に対する参加料等の金銭の払い戻しは一切行いません。</p>
        <p>この行動規範はより適切な運用を行うために随時更新する可能性があります。</p>
      </div>
      <div class="paper-footer">
        <h4>お問い合わせ</h4>
        <p>当組織の個人情報の取扱に関するお問い合せは下記までご連絡ください。</p>
        <p>TEDxNagoyaU実行委員会</p>
        <p>Mail:<a href="mailto:info@tedxnagoyau.com">info@tedxnagoyau.com</a></p>
        <p>最終更新日：2020年9月9日</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: '行動規範'
    }
  }
}
</script>

<style>
.policy .paper {
  margin: 5rem 0;
  padding: 6rem 8rem 1rem;
  box-shadow: 1rem 1rem 2rem grey;
}
.policy .paper .paper-header {
  margin-bottom: 5rem;
}
.policy .paper .paper-header .header-title {
  margin: 0;
  border-left: .5rem solid rgb(189, 19, 19);
  padding-left: 1rem;
  font-weight: normal;
  font-size: 2rem;
}
.policy .paper .paper-header .header-sub {
  margin: .2rem 1.5rem;
  font-size: 1.2rem;
  font-weight: lighter;
  letter-spacing: .4rem;
  color: #535353;
}
.policy .paper .paper-content {
  margin-bottom: 5rem;
}
.policy .paper .paper-content p {
  line-height: 1.3;
}
.policy .paper .paper-content h4 {
  font-weight: bold;
}
.policy .paper .paper-content h3 {
  font-weight: bold;
  font-size: 1rem;
}
.policy .paper .paper-content ul {
  margin-left: 1rem;
}
.policy .paper .paper-footer {
  margin-bottom: 5rem;
}

@media (max-width: 910px) {

  .policy .paper {
    margin: 5rem 0;
    padding: 3rem 2rem 1rem;
    box-shadow: 1rem 1rem 2rem grey;
  }

  .policy .paper .paper-header {
    margin-bottom: 5rem;
  }

  .policy .paper .paper-header .header-title {
    margin: 0;
    padding-left: 1rem;
    font-weight: normal;
    font-size: 1.8rem;
  }

  .policy .paper .paper-header .header-sub {
    margin: .2rem 1.5rem;
    font-size: 1rem;
    font-weight: lighter;
    letter-spacing: .4rem;
    color: #535353;
  }

  .policy .paper .paper-content {
    margin-bottom: 5rem;
  }

  .policy .paper .paper-content p {
    line-height: 2;
  }

  .policy .paper .paper-content ul {
    margin-left: 1rem;
  }

  .policy .paper .paper-footer {
    margin-bottom: 5rem;
  }
}
@media (max-width: 374px) {

  .policy .paper {
    margin: 5rem 0;
    padding: 3rem 2rem 1rem;
    box-shadow: 1rem 1rem 2rem grey;
  }

  .policy .paper .paper-header {
    margin-bottom: 5rem;
  }

  .policy .paper .paper-header .header-title {
    margin: 0;
    padding-left: 1rem;
    font-weight: normal;
    font-size: 1.5rem;
  }

  .policy .paper .paper-header .header-sub {
    margin: .2rem 1.5rem;
    font-size: .65rem;
    font-weight: lighter;
    letter-spacing: .4rem;
    color: #535353;
  }

  .policy .paper .paper-content {
    margin-bottom: 5rem;
  }

  .policy .paper .paper-content p {
    line-height: 2;
  }

  .policy .paper .paper-content ul {
    margin-left: 1rem;
  }

  .policy .paper .paper-footer {
    margin-bottom: 5rem;
  }
}
</style>
