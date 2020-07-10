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
      <b-navbar-item href="#">
        FILM
      </b-navbar-item>
      <b-navbar-item href="#">
        PEOPLE
      </b-navbar-item>
      <b-navbar-item href="#">
        LOCATION
      </b-navbar-item>
      <b-navbar-item href="#">
        SPECIES
      </b-navbar-item>
      <b-navbar-item href="#">
        VEHICLE
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="scss">
a.navbar-item {
  letter-spacing: 2px;
  img {
    max-height: 70px;
  }
  &:hover {
    color: darkgray;
  }
}
</style>
