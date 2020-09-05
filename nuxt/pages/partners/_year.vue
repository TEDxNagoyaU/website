<template>
  <div>
    <partner-list :partners="partners" />
  </div>
</template>

<script>
import PartnerList from '~/components/partners/PartnerList.vue'
export default {
  components: {
    PartnerList
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
