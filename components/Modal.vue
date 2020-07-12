<template>
  <b-modal
    :active.sync="isModalActive"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-modal
  >
    <div class="modal-card rounded-md" style="width: auto;">
      <section class="modal-card-body" style="max-width: 500px; width: 100%;">
        <h1 class="text-2xl text-center mb-8">Detail</h1>
        <template v-if="!isLoadingDetail">
          <template v-for="(item, index) in detailsObject">
            <b-field
              v-if="
                (item && !Array.isArray(item)) ||
                index === 'films' ||
                index === 'species'
              "
              :key="index"
              horizontal
              :label="index"
            >
              {{
                index === 'species' ? species : index === 'films' ? films : item
              }}
            </b-field>
          </template>
        </template>
        <div v-if="isLoadingDetail" style="min-width: 250px;">
          <b-skeleton size="is-large" width="80%"></b-skeleton>
          <b-skeleton size="is-large"></b-skeleton>
          <b-skeleton size="is-large" width="80%"></b-skeleton>
          <b-skeleton size="is-large"></b-skeleton>
          <b-skeleton size="is-large" width="80%"></b-skeleton>
        </div>

        <div class="text-center mt-8">
          <b-button class="text-center" rounded @click="toggleModal()"
            >Close</b-button
          >
        </div>
      </section>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      species: '',
      films: '',
    }
  },
  computed: {
    isModalActive: {
      get() {
        return this.$store.state.isModalActive
      },
      set() {
        this.$store.commit('setIsModalActive', false)
      },
    },
    detailsObject() {
      return this.$store.state.detailsObject
    },
    isLoadingDetail() {
      return this.$store.state.isLoadingDetail
    },
  },
  watch: {
    async 'detailsObject.species'() {
      const res = await this.$axios.$get(this.detailsObject.species)
      this.species = res.name
    },
    async 'detailsObject.films'() {
      const res = await this.$axios.$get(this.detailsObject.films)
      this.films = res.title
    },
  },
  methods: {
    toggleModal() {
      this.$store.commit('setIsModalActive', false)
    },
  },
}
</script>
