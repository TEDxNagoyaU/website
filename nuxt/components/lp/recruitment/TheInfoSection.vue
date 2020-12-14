<template>
  <v-container
    style="min-width: 100vw;"
  >
    <v-row>
      <v-col>
        <div>
          <v-card-title>Info</v-card-title>
          <v-card-subtitle>迷っているあなたへ</v-card-subtitle>
          <v-card-text>サークル・部活選びの参考に、TEDxNagoyaUの特徴やメンバーの声をまとめました！</v-card-text>
          <v-row>
            <v-col xs="12" sm="12" md="6">
              <div>
                <v-card>
                  <v-card-title>メンバーの声</v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-expansion-panels>
                        <v-expansion-panel
                          v-for="(item, i) in memberPanels"
                          :key="i"
                          hide-actions
                        >
                          <v-expansion-panel-header>
                            <v-row align="center" class="spacer" no-gutters>
                              <v-col xs="1" sm="3" md="2" class="hidden-xs-only">
                                <v-avatar size="48px">
                                  <img :src="item.avator" alt="Avatar">
                                </v-avatar>
                              </v-col>
                              <v-col xs="4" sm="9" md="10">
                                <p />
                                <strong v-html="item.name" />
                                <p>{{ item.excerpt }}</p>
                              </v-col>
                            </v-row>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-divider />
                            <v-card-text style="white-space: pre-line;">
                              {{ item.message }}
                            </v-card-text>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-row>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
            <v-col xs="12" sm="12" md="6">
              <div>
                <v-card class="mb-6">
                  <v-card-title>こんな人に入って欲しい！</v-card-title>
                  <v-card-subtitle />
                  <v-card-text>大学生活、何もせずに過ごしたくない！一味違ったことをしたい！と思っているそこのあなた！！一度説明会に足を運んでみませんか？？17人の個性豊かなメンバーで、お待ちしています！</v-card-text>
                </v-card>
              </div>
              <div>
                <v-card class="mb-6">
                  <v-card-title>加入のメリット</v-card-title>
                  <v-card-text>
                    <ul>
                      <li v-for="(item,index) in meritItems" :key="index">
                        {{ item.text }}
                      </li>
                    </ul>
                    <p style="height: 0;user-select:none;opacity: 0">
                      hogehogehogehogehogehogehogehogehogehogehogehogehoge
                    </p><!--fu***************************************************k
                      DONT DELETE THIS HOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGE
                      If you delete, display asdfa;lksdfjalskdf;aks;fkaj
                    -->
                  </v-card-text>
                </v-card>
              </div>
              <div>
                <v-card>
                  <v-card-title>加入のデメリット</v-card-title>
                  <v-card-text>
                    <ul>
                      <li v-for="(item,index) in demeritItems" :key="index">
                        {{ item.text }}
                      </li>
                    </ul>
                    <p style="height: 0;user-select:none;opacity: 0">
                      hogehogehogehogehogehogehogehogehogehogehogehogehoge
                    </p><!--fu***************************************************k
                      DONT DELETE THIS HOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGE
                      If you delete, display asdfa;lksdfjalskdf;aks;fkaj
                    -->
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TheInfoSection',
  data () {
    return {
      memberPanels: [
        {
          avator: 'http://drive.google.com/uc?export=view&id=15xgHinkKTvtDk8ctNfNuDW8V6O6gHEW0',
          name: '上田蓮',
          excerpt: 'TEDxの世界へようこそ！',
          message: 'この団体では、アイデアとアイデア、人と人が繋がる瞬間を目の当たりにすることができます。熱意ある仲間と一緒に、多くの困難の先にある奇跡を見てみませんか？\n何かを学びたい、作り上げたい、成果を残したいと思う人は是非一度足を運んでみてください！\nお待ちしてます！'
        },
        {
          avator: 'http://drive.google.com/uc?export=view&id=13NWXJ-6u6ig44cwlZOWsdLHwJod5RjMZ',
          name: '弓達汰一',
          excerpt: 'ひと味違った大学生活に',
          message: 'この団体は大学に入って、周りの人とはひと味違った経験をしたいという人にオススメです。\n多くの大学生はバイトやサークルに明け暮れる生活を送っています。僕の周りにもバイトしかする事ないよーって行ってる人はたくさんいます。しかしこの団体に所属すると、大学の外の人たちと関わりを持つ機会が増えたり、自分の軸を持って行動しているような志の高い人とたくさん出会えます。\n特に自分の活動してるコミュニケーションチームは社会人との関わりも多く、実際に企業に行って交渉をするなど、大学生ではできないような経験ができます。\n周りとはひと味違う充実した大学生活を送ってみませんか。'
        },
        {
          avator: 'http://drive.google.com/uc?export=view&id=1BWaRN7g-IhoC9M5qRw3pdVfn89RiKvxU',
          name: '山崎紗耶',
          excerpt: '切磋琢磨できる仲間と出会える場',
          message: 'みなさんは、今までの人生を振り返って、影響の大きかったものってなんだと思いますか？\n私は、“友達・仲間”だと思っています。私は高校時代、友達と切磋琢磨して勉強していたし、仲間と一生懸命になって部活動を頑張っていた。友達、仲間がいるからこそ、頑張ることができた。こう考えると、みなさんの人生には、友達や仲間が大きな影響を及ぼしてはいなかったでしょうか？\n今、何かに挑戦しようと思っている人、成し遂げたいことのある人、貴重な大学生活を無駄にしたくない人、TEDxNagoyaUで、そんなあなたに素敵な影響を及ぼしてくれる、切磋琢磨できる仲間ときっと出会えるはずです。\nTEDxNagoyaUには、日々何かに挑戦して頑張っている仲間、そして、挑戦を応援してくれる仲間がたくさんいます。もちろん、TEDxNagoyaUの活動をする上でも、挑戦はたくさんあります。私自身、TEDxNagoyaUで挑戦する仲間と出会って、もっと頑張ろうと思うことがたくさんあります。\nそんな仲間とこのTEDxNagoyaUで出会って、あなたの大学生活ををもっと充実させませんか？'
        }
      ],
      meritItems: [
        { text: '学生だけでゼロから企画できる！' },
        { text: '日頃のミーティングや活動を通して、メンバーみんなが多方面で活躍していることを聞いて自分もモチベーションアップできる' },
        { text: '今後生きていく上で役に立つ考え方を学んだり、スキルを身につけたりすることができる' }
      ],
      demeritItems: [
        { text: 'タスクがたまってしまったり、本番前になると忙しい日々が続く' },
        { text: '他の人に入ってるサークルを説明するとき、説明が難しく大変' },
        { text: '不定期で予定が入ることも！' }
      ]
    }
  }
}
</script>
