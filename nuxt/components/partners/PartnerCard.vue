<template>
  <v-card
    class="ma-1 mb-1"
    :nuxt="true"
    outlined
  >
    <v-img
      :v-if="partner.logo"
      class="white--text align-end"
      contain
      :src="partner.logo"
    />
    <v-card-title>{{ partner.name }}</v-card-title>
    <v-card-text class="text--primary">
      <nuxt-content :document="partner" />
    </v-card-text>
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
