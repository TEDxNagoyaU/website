<template>
  <div class="content">
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  name: 'ArticleBody',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.content h2{
  border-left: 5px solid rgb(38, 38, 38) ;
}
</style>
