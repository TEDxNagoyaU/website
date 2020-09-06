<template>
  <div>
    <h1 class="event-title display-1 font-weight-bold mb-4">
      <span>FAQ</span>
    </h1>
    <v-card
    class="mx-auto"
  >
   <!--イベント開催前までのFAQ-->
    <v-list>
      <v-subheader>イベント開催前</v-subheader>
      <v-list-group
        value="true"
        v-for="faq in faqs_before_event"
        :key="faq"
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
    <!--イベント本番中のFAQ-->
     <v-list>
      <v-subheader>イベント本番中</v-subheader>
      <v-list-group
        value="true"
        v-for="faq in faqs_now_event"
        :key="faq"
      >
        <template v-slot:activator>
          <v-list-item-title>{{faq.question}}</v-list-item-title>
        </template>
        <v-divider></v-divider>
        <v-list-item
          v-for="answer in faq.answers"
          :key="answer"
          :inactive="inactive"
        >
            <v-list-item-content>
              <v-list-item-subtitle v-html="answer"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

      </v-list-group>
    </v-list>

  </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings'],
      ],
      faqs_before_event: {
        'faq_1' : {
          'question' : '申し込みしたのに、メールが届かない' ,
          'answers'  : ['<a href="mailto:info@tedxnagoyau.com">info@tedxnagoyau.com</a>に件名を申し込みメール不在にして送ってください。']},
        'faq_2' : {
          'question' : 'オープンチャットに入れない' ,
          'answers'  : ['<a href="/event/open_chat">こちらのサイト</a>より、案内しております。', 'それでも入れない場合は、メールにて個別に対応させていただきます。']},
        'faq_3' : {
          'question' : '参加するブレイクのブースが分からない。' ,
          'answers'  : ['ブースの詳細は下記に記載されています。また、希望されているブースはメールにてお問い合わせいただけますと、<br>現在のブースを通知いたします。']},
        'faq_4' : {
          'question' : '参加するブレイクのブースを変更したい' ,
          'answers'  : ['メールにて希望のブース変更を受け付けております。ただし、定員のため対応できない可能性がございます。<br>また、オープンチャットでは対応しかねますことをご了承ください。', '期限は10月9日23：59です。']},
        'faq_5' : {
          'question' : 'イベント参加を取りやめたい' ,
          'answers'  : ['メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。']},

      },
      faqs_now_event: {
        'faq_1' : {
          'question' : '参加するブレイクのブースが違う' ,
          'answers'  : ['メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。早急に対処させていただきます。オープンチャットでは、より素早く対応できますので、なるべくそちらの方で連絡してください。']},
        'faq_2' : {
          'question' : 'youtube視聴が出来ない' ,
          'answers'  : ['メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。早急に対処させていただきます。オープンチャットでは、より素早く対応できますので、なるべくそちらの方で連絡してください。']},
        'faq_3' : {
          'question' : 'Zoomに参加できない' ,
          'answers'  : ['メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。早急に対処させていただきます。オープンチャットでは、より素早く対応できますので、なるべくそちらの方で連絡してください。']},

      }
    }),
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
