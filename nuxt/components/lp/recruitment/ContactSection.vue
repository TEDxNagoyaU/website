<template>
  <v-row justify="center">
    <v-col xs="12" sm="6" md="6">
      <div class="">
        <v-card>
          <v-card-title>Contact</v-card-title>

          <v-card-text>不明な点や心配な点などがありましたら、お気軽にご連絡ください。</v-card-text>
          <v-list>
            <v-list-item v-for="item in contactList" :key="item.title">
              <v-list-item-icon>
                <v-icon :href="item.link">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <a :href="item.link"><v-list-item-title>{{ item.title }}</v-list-item-title></a>
                <v-list-item-subtitle v-if="item.subtitle">
                  {{ item.subtitle }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ContactSection',
  data () {
    return {
      contactList: [
        {
          title: '@TEDxNagoyaU',
          subtitle: '最新情報を毎日更新中！',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/TEDxNagoyaU'
        },
        {
          title: '@tedxnagoyau',
          subtitle: null,
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/tedxnagoyau/'
        },
        {
          title: 'info@tedxnagoyau.com',
          subtitle: null,
          icon: 'mdi-email',
          link: 'mailto:info@tedxnagoyau.com'
        },
        {
          title: '/tedxnagoyau',
          subtitle: null,
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/tedxnagoyau/'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
