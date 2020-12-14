<template>
  <v-card
    outlined
    class="ma-1 mb-1"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">
            {{ title }}
          </h1>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col xs="12" sm="12" md="6">
          <v-img
            :src="src"
            :alt="alt"
          />
        </v-col>
        <v-col xs="12" sm="12" md="5">
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
/*
 * slotには文章を入れる。
 */
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>>
