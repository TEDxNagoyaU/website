<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="event-title display-1 font-weight-bold mb-4">
          <span>{{ title }}</span>
        </h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-img :src="keyVisual" aspect-ratio="3.7" />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="event-title display-1 font-weight-bold mb-4">
          <span>{{ wishs }}</span>
        </h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12" sm="6">
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" />
      </v-col>
      <v-col cols="12" sm="6">
        <div>
          <p class="subheading">
            {{ content }}
          </p>
          <p class="subheading">
            TEDxNagoyaU2020 代表 れんれん
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['title', 'keyVisual', 'theme', 'wishs', 'content']
}
</script>

<style scoped>
.event-title{
  color: rgb(133, 24, 24);
  border-bottom: 1px solid rgb(184, 49, 49);
  line-height: 1.5;
}
.event-title span{
  border-bottom: 6px solid rgb(184, 49, 49);
}
</style>>
