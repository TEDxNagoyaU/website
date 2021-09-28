<!--
このファイルはNuxtが/partners/以下のディレクトリを表示するために置いてある。
杉浦もまだよくわかっていない(2020/06/24)　←えええ…それは困るべ……（尾関）
-->
<template>
  <div>
    <topic-path />
    <nuxt-child />
  </div>
</template>

<script>
import TopicPath from '~/components/TopicPath.vue'
export default {
  components: {
    TopicPath
  },
  head () {
    return {
      titleTemplate: '%s | Talks | TEDxNagoyaU'
    }
  }
}
</script>
