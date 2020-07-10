<template>
  <b-carousel-list
    v-model="values"
    :data="items"
    :arrow="true"
    :repeat="true"
    :items-to-show="3.5"
    :as-indicator="true"
  />
</template>

<script>
export default {
  data() {
    return {
      arrow: true,
      arrowHover: true,
      drag: true,
      gray: false,
      opacity: false,
      values: 1,
      perList: 1,
      repeat: false,
      items: [
        {
          title: 'Slide 1',
          image:
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc',
        },
        {
          title: 'Slide 2',
          image:
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8rbq35XeWZXz_KJV5B_nR3KippiLluW2OnFK4TcoZ8Ukn6jBP',
        },
        {
          title: 'Slide 3',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHaufPE22zvNk5E7q-J9vVOnVl5lfuKdQFJnL7FhVyAgDIlqi',
        },
        {
          title: 'Slide 4',
          image:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRdajvHzODMm_1oGN_76hQIpfCVaMdKkiffcyKU68rMqspsXx9B',
        },
        {
          title: 'Slide 5',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUj7UnYxLXtFeZF0iYaxzgeR-RDidUtR20y9Kl_IblXS0lanr5',
        },
        {
          title: 'Slide 6',
          image:
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrH6xwURNOaY4WQUziER0TajYoubGkn87zct9q-tI2nb4aOR2y',
        },
        {
          title: 'Slide 7',
          image: 'http://www.movienewsletters.net/photos/121687R1.jpg',
        },
        {
          title: 'Slide 8',
          image:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKt62ofk-ko3kXHFOcqO5ZYjEhbO8itYTVSYvHPpNWUgeQ-VI_',
        },
        {
          title: 'Slide 9',
          image:
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNjvkqicvyX8WpuKxlGP8hmGa8ZZs5OOYO5XSKla2hny_2gFNP',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.carousel-list.has-shadow {
  box-shadow: none;
}
</style>
