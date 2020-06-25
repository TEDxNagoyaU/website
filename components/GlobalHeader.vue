<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-img
        src="https://live.staticflickr.com/65535/49633281918_bcdc62932a_m.jpg"
        height="20"
        contain
      />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item to="/" nuxt>Home</v-list-item>
        <v-list-item to="/about" nuxt>About</v-list-item>
        <v-list-item to="/event" nuxt>Event</v-list-item>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Speaker</v-list-item-title>
          </template>
          <v-list>
            <v-list-item to="/speakers/2020" nuxt>2020</v-list-item>
            <v-list-item to="/speakers/2019" nuxt>2019</v-list-item>
          </v-list>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Partners</v-list-item-title>
          </template>
          <v-list>
            <v-list-item to="/partners/2020" nuxt>2020</v-list-item>
            <v-list-item to="/partners/2019" nuxt>2019</v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
  data () {
    return {
      drawer: false,
      links: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'about',
          path: '/about'
        }
      ]
    }
  }
}
</script>
