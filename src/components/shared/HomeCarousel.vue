<template>
  <div class="px-15 rounded-xl">
    <Carousel :settings="settings" :autoplay="4000" :breakpoints="breakpoints">
      <Slide v-for="slide in containerData" :key="slide">
        <div class="carousel__item py-8">
          <!-- <img :src="slide.iconuri" width="80" alt="" /> -->
          <div class="px-2">
            <a :href="slide.uri" target="_blank" rel="noopener noreferrer" >
            <img
              class="rounded-lg cursor-pointer opacity-90 hover:opacity-100"
              :src="
                `${slide.iconuri}` ||
                `https://www.svgrepo.com/show/139611/loading.svg`
              "
              width="120"
              height="120"
              alt=""
            />
            </a>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style >
.carousel__icon {
  fill: black;
}
</style>

<script >
import { defineComponent, computed } from "vue";

import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import CardBox from "../CardBox.vue";

export default defineComponent({
  name: "home-carousel",
  components: {
    Carousel,
    Slide,
    Navigation,
    CardBox,
  },
  props: ["containerData"],
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
       1624: {
        itemsToShow: 6,
        snapAlign: "start",
      },
    },
  }),
});
</script>
