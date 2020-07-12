<template>
  <b-navbar class="is-transparent">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://vignette.wikia.nocookie.net/logopedia/images/6/67/Studio_Ghibli_%281985-1991%29.gif/revision/latest/scale-to-width-down/340?cb=20170818234908"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="end">
      <nuxt-link class="navbar-item" to="/Film">FILM</nuxt-link>
      <nuxt-link class="navbar-item" to="/People">PEOPLE</nuxt-link>
      <nuxt-link class="navbar-item" to="/Location">LOCATION</nuxt-link>
      <nuxt-link class="navbar-item" to="/Species">SPECIES</nuxt-link>
      <nuxt-link class="navbar-item" to="/Vehicle">VEHICLE</nuxt-link>
    </template>
  </b-navbar>
</template>

<style lang="scss">
a.navbar-item {
  letter-spacing: 2px;
  img {
    max-height: 50px;
  }
  &:hover,
  &:focus,
  &:focus-within {
    color: darkgray;
  }
  &.nuxt-link-exact-active {
    color: darkgray;
  }
}
</style>
