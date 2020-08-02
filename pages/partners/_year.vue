<template>
  <div>
    <v-row>
      <v-col
        v-for="partner in partners"
        :key="partner.name"
      >
        <partner-card :partner="partner" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PartnerCard from '~/components/partners/PartnerCard.vue'

export default {
  components: {
    PartnerCard
  },
  async asyncData ({ $content, params }) {
    const partners = await $content('partners', params.year).fetch()
    partners.sort((a, b) => {
      return a.order - b.order
    })
    return { params, partners }
  },
  head () {
    return {
      title: this.params.year
    }
  }
}
</script>
