<template>
  <v-footer absolute padless app>
    <v-container>
      <v-row>
        <v-col>
          <v-btn
            v-for="item in snsLinks"
            :key="item.link"
            icon
            :href="item.link"
          >
            <v-icon size="24px">{{ item.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center"><span>&copy; {{ new Date().getFullYear() }} - TEDxNagoyaU</span></v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {
      snsLinks: [
        {
          link: 'https://twitter.com/TEDxNagoyaU',
          icon: 'mdi-twitter'
        },
        {
          link: 'https://www.instagram.com/tedxnagoyau/',
          icon: 'mdi-instagram'
        },
        {
          link: 'https://www.facebook.com/tedxnagoyau/',
          icon: 'mdi-facebook'
        }
      ]
    }
  }
}
</script>
