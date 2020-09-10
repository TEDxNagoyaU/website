<template>
  <div>
    <h2>加入方法</h2>
    <ol>
      <li>
        <v-row>
          <v-col cols="12">
            <p>メールに添付されているリンク先に移動していただくか、またはQRコードを読み取ってください。</p>
          </v-col>
        </v-row>
      </li>
      <li>
        <v-row>
          <v-col cols="6">
            <v-img src="events/openchat/HowToAttend_2.jpg" />
          </v-col>
          <v-col cols="6">
            <p>左図の画面になりましたら、参加ボタンを押してください。その後、ニックネームが要求されますので、そこに氏名を入力していただき、再び参加ボタンを押してください。ルーム名が「TEDxNagoyaU（学生）もしくは（一般）」という表記になっていることをご確認ください。</p>
          </v-col>
        </v-row>
      </li>
      <li>
        <v-row>
          <v-col cols="6">
            <v-img src="events/openchat/HowToAttend_3.jpg" />
          </v-col>
          <v-col cols="6">
            <p>トークルームにご入室いただけましたら、通知がオフになっていることをご確認ください。その後、アナウンスに記載されている内容をご確認ください。</p>
          </v-col>
        </v-row>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
ol{
  counter-reset: number 0;
}
li{
  list-style: none;
  position: relative;
}
li::before{
  position: absolute;
  display: inline-block;
  counter-increment: number 1;
  content: counter(number) ".";
  top: -.3rem;
  left: -2rem;
  font-size: 2rem;
  color: rgb(52,199,99);
}
</style>>
