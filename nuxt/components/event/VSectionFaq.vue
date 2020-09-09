<template>
  <div>
    <h1 class="event-title display-1 font-weight-bold mb-4">
      <span>FAQ</span>
    </h1>
    <v-row
      justify="center"
    >
      <v-col
        cols="12"
        md="10"
        lg="6"
      >
        <v-section-faq-list
          id="faqs_before_event"
          list-header="イベント前によくある質問"
          :faqs="faqs_before_event"
        />
      </v-col>
      <v-col
        cols="12"
        md="10"
        lg="6"
      >
        <v-section-faq-list
          list-header="イベント直前・イベント中によくある質問"
          :faqs="faqs_now_event"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VSectionFaqList from '~/components/event/VSectionFaqList.vue'

export default {
  components: {
    VSectionFaqList
  },
  data: () => ({
    faqs_before_event: [
      {
        question: '申し込みしたのに、メールが届かない',
        answer: '<a href="mailto:info@tedxnagoyau.com">info@tedxnagoyau.com</a>に件名を申し込みメール不在にして送ってください。'
      },
      {
        question: 'オープンチャットに入れない',
        answer: '<a href="/event/open_chat">こちらのサイト</a>より、案内しております。それでも入れない場合は、メールにて個別に対応させていただきます。'
      },
      {
        question: '参加するブレイクのブースが分からない。',
        answer: 'ブースの詳細は下記に記載されています。また、希望されているブースはメールにてお問い合わせいただけますと、現在のブースを通知いたします。'
      },
      {
        question: '参加するブレイクのブースを変更したい',
        answer: 'メールにて希望のブース変更を受け付けております。ただし、定員のため対応できない可能性がございます。また、オープンチャットでは対応しかねますことをご了承ください。期限は10月9日23：59です。'
      },
      {
        question: 'イベント参加を取りやめたい',
        answer: 'メールまたはオープンチャットにて、お名前をご記名のもとご連絡ください。'
      }
    ],
    faqs_now_event: [
      {
        question: '参加するブレイクのブースが違う',
        answer: 'メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。早急に対処させていただきます。オープンチャットでは、より素早く対応できますので、なるべくそちらの方で連絡してください。'
      },
      {
        question: 'youtube視聴が出来ない',
        answer: 'メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。早急に対処させていただきます。オープンチャットでは、より素早く対応できますので、なるべくそちらの方で連絡してください。'
      },
      {
        question: 'Zoomに参加できない',
        answer: 'メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。早急に対処させていただきます。オープンチャットでは、より素早く対応できますので、なるべくそちらの方で連絡してください。'
      }
    ]
  })
}
</script>

<style>
.event-title{
  color: rgb(133, 24, 24);
  border-bottom: 1px solid rgb(184, 49, 49);
  line-height: 1.5;
}
.event-title span{
  border-bottom: 6px solid rgb(184, 49, 49);
}
</style>
