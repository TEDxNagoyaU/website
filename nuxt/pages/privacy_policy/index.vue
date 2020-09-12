<template>
  <div class="policy">
    <div class="paper">
      <div class="paper-header">
        <h2 class="header-title">
          個人情報保護指針
        </h2>
        <h3 class="header-sub">
          プライバシーポリシー
        </h3>
      </div>
      <div class="paper-content">
        <p>TEDxNagoyaU実行委員会（以下、「当組織」）は、以下の通り個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報の保護を推進いたします。</p>

        <h4>【個人情報の管理】</h4>
        <p>当組織は、皆様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。</p>

        <h4>【個人情報の利用目的】</h4>
        <p>当組織は、個人情報を以下の利用目的の達成に必要な範囲内で、利用いたします。以下に定めのない目的で個人情報を利用する場合、あらかじめご本人の同意を得た上で行います。</p>
        <ul>
          <li>イベントの申し込み受付</li>
          <li>お問い合わせへの回答</li>
          <li>イベントのご案内の送付</li>
          <li>イベント時の参加者の円滑な誘導</li>
          <li>イベント後の規約に基づいたアンケート実施</li>
          <li>イベント後の開催報告・広報</li>
          <li>個人として特定できない範囲で統計情報として集計し、当組織の企画開発や協賛企業への参考資料として利用する</li>
        </ul>
        <p />

        <h4>【個人情報の第三者への開示・提供の禁止】</h4>
        <p>当組織は、皆様よりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
        <ul>
          <li>法令に基づく場合</li>
          <li>人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき。</li>
          <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき。</li>
          <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。</li>
        </ul>
        <p />

        <h4>【個人情報の委託について】</h4>
        <p>利用目的の達成に必要な範囲内において、個人情報の取扱いを他の事業者に委託いたしません。</p>

        <h4>【個人情報の安全対策】</h4>
        <p>当組織は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じます。</p>

        <h4>【法令、規範の遵守と見直し】</h4>
        <p>当組織は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。プライバシーポリシーを変更する場合には、このページの変更を行い、下記最終更新日の更新を行います。</p>
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
      title: 'プライバシーポリシー'
    }
  }
}
</script>

<style scoped>
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
