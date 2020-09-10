<template>
  <v-row>
    <v-col
      v-for="partner in partners"
      :key="partner.name"
      xs="12"
      sm="6"
      md="4"
    >
      <partner-card :partner="partner" />
    </v-col>
  </v-row>
</template>

<script>
import PartnerCard from '~/components/partners/PartnerCard.vue'
export default {
  name: 'PartnerList',
  components: {
    PartnerCard
  },
  props: {
    partners: {
      required: true,
      type: Array
    }
  }
}
</script>
