<template>
  <div>

    <div>
      <the-first-view></the-first-view>
    </div>

    <div class="">
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

    <div class="">
      <past-sponsor-session></past-sponsor-session>
    </div>

    <div>
      <Contact></Contact>
    </div>


  </div>

</template>

<script>
// @ is an alias to /src
import TheFirstView from '@/components/TheFirstView.vue'
import MissionVisionSession from '@/components/MissionVisionSession.vue'
import PlanSession from '@/components/PlanSession.vue'
import TedxNagoyau from '@/components/TedxNagoyau.vue'
import PleaseSponsor from '@/components/PleaseSponsor.vue'
import PastSponsorSession from '@/components/PastSponsorSession.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    TheFirstView,
    MissionVisionSession,
    PlanSession,
    TedxNagoyau,
    PleaseSponsor,
    PastSponsorSession,
    Contact
  },

  data: function () {
    return {
      imgLink: {
        firstView: 'https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg',
        missionView: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
        visionView: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

        meritView: "https://superdevresources.com/wp-content/uploads/2016/02/5-backgrounds.jpg",//danger!!!!!!!!!
        cardA: "https://live.staticflickr.com/65535/48254749996_95807209b1_c.jpg",
        cardB: "https://live.staticflickr.com/65535/48247052851_1efa58fde2_c.jpg",
        cardC: "https://live.staticflickr.com/65535/48247052991_d905b95448_c.jpg",
      }
    }
  },
  mounted: function () {
    const title = '協賛のお願い | TEDxNagoyaU'
    const description = 'TEDxNagoyaUは名古屋大学でTEDxイベントを運営する学生のみで構成されたイベント運営団体です。'
    document.title = title
    document.querySelector("meta[property='og:title']")
      .setAttribute('content', title)
    document.querySelector("meta[name='description']")
      .setAttribute('content', description)
    document.querySelector("meta[property='og:description']")
      .setAttribute('content', description)
  }
}
</script>
