export const state = () => ({
  object: {},
  isLoading: false,
  isModalActive: false,
  detailsObject: {},
  isLoadingDetail: false,
})

export const mutations = {
  setObject(state, { value, key }) {
    this._vm.$set(state.object, key, value)
  },
  setIsLoading(state, value) {
    state.isLoading = value
  },
  setDetailsObject(state, value) {
    state.detailsObject = value
  },
  setIsModalActive(state, value) {
    state.isModalActive = value
  },
  setIsLoadingDetail(state, value) {
    state.isLoadingDetail = value
  },
}

export const getters = {
  getObject: (state) => (key) => state.object[key],
}

export const actions = {
  async fetch({ commit }, { url, key }) {
    commit('setIsLoading', true)
    const res = await this.$axios.$get(url)
    commit('setObject', { value: res, key })
    commit('setIsLoading', false)
  },
  async getDetail({ commit }, { url }) {
    commit('setDetailsObject', {})
    commit('setIsModalActive', true)
    commit('setIsLoadingDetail', true)
    const res = await this.$axios.$get(url)
    commit('setDetailsObject', res)
    commit('setIsLoadingDetail', false)
  },
}
