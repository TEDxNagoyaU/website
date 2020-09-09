<template>
  <v-list>
    <v-subheader>{{ listHeader }}</v-subheader>
    <v-list-group
      value="true"
      v-for="(faq, index) in faqs"
      :key="index"
    >
      <template v-slot:activator>
        <v-list-item-title>{{faq.question}}</v-list-item-title>
      </template>
      <v-divider></v-divider>
      <v-list-item
        v-for="answer in faq.answers"
        :key="answer"
      >
        <v-list-item-content>
          <v-list-item-subtitle v-html="answer"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
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
