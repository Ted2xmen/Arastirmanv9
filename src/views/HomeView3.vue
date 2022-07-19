<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import HeaderHero from "@/components/containers/HeaderHero.vue";
import CardBox from "@/components/CardBox.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import BasicCardFlow from "@/components/containers/BasicCardFlow.vue";
import VerticalCardFlow from "@/components/containers/VerticalCardFlow.vue";
import HomeCarousel from "@/components/HomeCarousel.vue";

const titleStack = ref([
  "Araştırman",
  "Araştırmacılar için İnternet Kaynakları",
]);

const mainStore = useMainStore();
const bookmarkItems = computed(() => mainStore.libs.slice(0, 10));
const starter = computed(() => mainStore.starter.slice(0, 10));
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionMain class="mx-2 space-y-6">
    <HeaderHero />
    <BasicCardFlow :containerData="starter" />
    <HomeCarousel :containerData="bookmarkItems" />
    <VerticalCardFlow :containerData="bookmarkItems" />
  </SectionMain>
</template>
