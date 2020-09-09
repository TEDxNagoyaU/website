<template>
  <v-app style="background-color: #F5F5F5">
    <v-main>
      <div>
        <the-first-view />
      </div>

      <div>
        <tedx-nagoyau />
      </div>

      <div>
        <mission-vision-session />
      </div>

      <div>
        <please-sponsor />
      </div>

      <div>
        <plan-session />
      </div>

      <div>
        <faq-list />
      </div>

      <div>
        <past-sponsor-session />
      </div>

      <div>
        <Contact />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import TheFirstView from '~/components/partnersLp/TheFirstView.vue'
import MissionVisionSession from '~/components/partnersLp/MissionVisionSession.vue'
import PlanSession from '~/components/partnersLp/PlanSession.vue'
import TedxNagoyau from '~/components/partnersLp/TedxNagoyau.vue'
import PleaseSponsor from '~/components/partnersLp/PleaseSponsor.vue'
import FaqList from '~/components/partnersLp/FaqList.vue'
import PastSponsorSession from '~/components/partnersLp/PastSponsorSession.vue'
import Contact from '~/components/partnersLp/Contact.vue'

export default {
  layout: 'nothing',
  components: {
    TheFirstView,
    MissionVisionSession,
    PlanSession,
    TedxNagoyau,
    PleaseSponsor,
    FaqList,
    PastSponsorSession,
    Contact
  },
  head () {
    return {
      title: '協賛のお願い',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'TEDxNagoyaUは名古屋大学を中心に活動する、学生のみで構成されたTEDx運営団体・イベントです。今年はYouTubeをZoomを活用したオンラインイベントを開催いたします。'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'TEDxNagoyaU'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://tedxnagoyau.com'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '協賛企業募集中'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'TEDxNagoyaUは名古屋大学を中心に活動する、学生のみで構成されたTEDx運営団体・イベントです。今年はYouTubeをZoomを活用したオンラインイベントを開催いたします。'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://tedxnagoyau.com/partnersLp/img/ogp.png'
        }
      ]
    }
  }
}
</script>
