<template>
  <v-app style="background-color: #F5F5F5">
    <v-main>
      <div>
        <the-first-view></the-first-view>
      </div>

      <div>
        <tedx-nagoyau></tedx-nagoyau>
      </div>

      <div>
        <mission-vision-session></mission-vision-session>
      </div>

      <div>
        <please-sponsor></please-sponsor>
      </div>

      <div>
        <plan-session></plan-session>
      </div>

      <div>
        <past-sponsor-session></past-sponsor-session>
      </div>

      <div>
        <Contact></Contact>
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
    PastSponsorSession,
    Contact
  }
}
</script>