<template>
  <div class="mx-4">
    <h2 class="text-5xl text-center mb-8">Locations</h2>
    <b-table :data="list" :loading="isLoading">
      <template slot-scope="props">
        <b-table-column field="title" label="Name">
          <strong>{{ props.row.name }}</strong>
        </b-table-column>
        <b-table-column field="director" label="Climate">
          {{ props.row.climate }}
        </b-table-column>
        <b-table-column field="producer" label="Terrain">
          {{ props.row.terrain }}
        </b-table-column>
        <b-table-column label="Action" centered>
          <span
            class="icon has-text-info cursor-pointer"
            @click="getDetails(props.row.id)"
          >
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIGZpbGw9Im5vbmUiIHI9IjI0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB3aWR0aD0iNTAiLz48cGF0aCBkPSJNMjMuNzc5LDE2LjI0MWMtMC4yMTYsMC0wLjM1Ny0wLjE0NC0wLjM1Ny0wLjM1OXYtMi42MThjMC0wLjIxNSwwLjE0Mi0wLjM1OSwwLjM1Ny0wLjM1OWgyLjQzOSAgYzAuMjE1LDAsMC4zNTksMC4xNDQsMC4zNTksMC4zNTl2Mi42MThjMCwwLjIxNS0wLjE0NSwwLjM1OS0wLjM1OSwwLjM1OUgyMy43Nzl6IE0yMy44NTIsMzcuMjkzYy0wLjIxNSwwLTAuMzU4LTAuMTQzLTAuMzU4LTAuMzU4ICBWMjAuNDczYzAtMC4yMTUsMC4xNDQtMC4zNTksMC4zNTgtMC4zNTloMi4yOTVjMC4yMTYsMCwwLjM1OSwwLjE0NCwwLjM1OSwwLjM1OXYxNi40NjJjMCwwLjIxNi0wLjE0NCwwLjM1OC0wLjM1OSwwLjM1OEgyMy44NTJ6Ii8+PC9zdmc+"
            />
          </span>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.getters.getObject('locations')
    },
    isLoading() {
      return this.$store.state.isLoading
    },
  },
  created() {
    this.$store.dispatch('fetch', {
      url: 'https://ghibliapi.herokuapp.com/locations',
      key: 'locations',
    })
  },
  methods: {
    getDetails(id) {
      this.$store.dispatch('getDetail', {
        url: 'https://ghibliapi.herokuapp.com/locations/' + id,
      })
    },
  },
}
</script>
