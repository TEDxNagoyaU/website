<template>
  <v-card>
    <v-img :src="partner.logo" />
    <v-card-title v-text="partner.name" />
    <nuxt-content :document="parnter" />
  </v-card>
</template>

<script>
export default {
  name: 'PartnerCard',
  props: {
    partner: {
      type: Object,
      required: true
    }
  }
}
</script>
