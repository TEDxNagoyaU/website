<template>
  <v-footer absolute padless app>
    <v-container>
      <v-row
        dense
        justify="space-between"
      >
        <v-col
          xs="12"
          sm="6"
        >
          <v-container
            class="pa-0"
          >
            <v-row
              dense
            >
              <v-col
                cols="12"
              >
                <v-img
                  src="tedxnagoyau_1line_white_background.png"
                  max-width="100"
                />
              </v-col>
              <v-col
                cols="12"
              >
                <p
                  style="font-size: 14px;"
                >
                  This independent TEDx event is operated under license from TED.
                </p>
              </v-col>
              <v-col
                cols="12"
              >
                <v-btn
                  v-for="item in snsLinks"
                  :key="item.link"
                  icon
                  :href="item.link"
                >
                  <v-icon size="20">
                    {{ item.icon }}
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col
          xs="12"
          sm="4"
        >
          <v-container class="pa-0">
            <v-row dense>
              <v-col
                v-for="(item,i) in footerLinks"
                :key="i"
                cols="12"
              >
                <nuxt-link
                  :to="item.link"
                  class="no-active-link"
                >
                  {{ item.text }}
                </nuxt-link>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row justify="center">
        <span
          style="font-size: 0.8rem;"
        >&copy; {{ new Date().getFullYear() }} - TEDxNagoyaU</span>
      </v-row>
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
      ],
      footerLinks: [
        {
          link: '/about',
          text: 'About'
        },
        {
          link: '/manners',
          text: '行動規範'
        },
        {
          link: '/privacy_policy',
          text: 'プライバシーポリシー'
        },
        {
          link: '/articles/news',
          text: 'News'
        },
        {
          link: '/contact',
          text: 'お問い合わせ'
        }
      ]
    }
  }
}
</script>

<style scoped>
.no-active-link {
  color: grey;
  text-decoration: none;
  font-size: 14px;
}
</style>
