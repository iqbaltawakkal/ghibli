<template>
  <div class="container flex flex-col min-h-screen">
    <Navbar />
    <section class="my-32 flex-1">
      <template v-if="$route.name === 'index'">
        <Carousel />
      </template>
      <nuxt-child />
    </section>
    <Modal />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.table-wrapper {
  max-height: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>
