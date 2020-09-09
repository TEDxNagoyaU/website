<template>
  <v-list>
    <v-subheader>{{ listHeader }}</v-subheader>
    <v-expansion-panels
      accordion
    >
      <v-expansion-panel
        v-for="(faq, i) in faqs"
        :key="i"
      >
        <v-expansion-panel-header>{{ faq.question }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <span v-html="faq.answer" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-list>
</template>

<script>
export default {
  name: 'VSectionFaqList',
  props: {
    listHeader: {
      type: String,
      required: true
    },
    faqs: {
      type: Array,
      required: true
    }
  }
}
</script>
