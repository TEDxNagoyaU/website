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
    return { params, partners }
  }
}
</script>
