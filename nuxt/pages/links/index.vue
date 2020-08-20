<!--
nuxt@2.13から動的なパスもすべて取得できるはずだった。
だけどクローラーの精度がまだよくないのか、拾えないリンクがたくさんある。
そういうわけで内部リンク集ページを作成して、クローラーに嫌でも拾わせることにしたのだ。
-->
<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Speakers</v-card-title>
          <v-card-text>
            <ul>
              <li v-for="parentObj in speakersLinks" :key="parentObj.year">
                <nuxt-link :to="'/talks/' + parentObj.year">
                  {{ parentObj.year }}
                </nuxt-link>
                <ul>
                  <li v-for="childObj in parentObj.paths" :key="childObj.path">
                    <nuxt-link :to="childObj.path">
                      {{ childObj.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Partners</v-card-title>
          <v-card-text>
            <ul>
              <li
                v-for="obj in partnersLinks"
                :key="obj.path"
              >
                <nuxt-link :to="obj.path">
                  {{ obj.year }}
                </nuxt-link>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Articles</v-card-title>
          <v-card-text>
            <ul>
              <li
                v-for="article in articles"
                :key="article.path"
              >
                <nuxt-link :to="article.path">
                  {{ article.title }}
                </nuxt-link>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const speakersYearArray = ['2019', '2018', '2017']
    const speakersLinks = await Promise.all(speakersYearArray.map(async (year) => {
      const speakers = await $content('talks', year).fetch()
      const paths = speakers.map((obj) => {
        return {
          name: obj.name,
          path: obj.path
        }
      })
      return {
        year,
        paths
      }
    }))

    const partnersYearArray = ['2020', '2019', '2018', '2017']
    const partnersLinks = partnersYearArray.map((year) => {
      return {
        year,
        path: `/partners/${year}`
      }
    })

    const articles = await $content('articles', { deep: true }).fetch()

    return {
      speakersLinks,
      partnersLinks,
      articles
    }
  },
  head () {
    return {
      title: 'Links'
    }
  }
}
</script>
