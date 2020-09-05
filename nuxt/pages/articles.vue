<template>
  <div>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  head () {
    return {
      titleTemplate: '%s | articles | TEDxNagoyaU'
    }
  }
}
</script>
