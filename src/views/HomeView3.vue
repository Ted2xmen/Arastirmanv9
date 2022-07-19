<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import HeaderHero from "@/components/containers/HeaderHero.vue";
import CardBox from "@/components/CardBox.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import BasicCardFlow from "@/components/containers/BasicCardFlow.vue";
import VerticalCardFlow from "@/components/containers/VerticalCardFlow.vue";

const titleStack = ref([
  "Araştırman",
  "Araştırmacılar için İnternet Kaynakları",
]);

const mainStore = useMainStore();
const bookmarkItems = computed(() => mainStore.libs.slice(0, 6));
const starter = computed(() => mainStore.starter.slice(0, 6));
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionMain class="mx-2 space-y-3">
    <HeaderHero />
    <BasicCardFlow :containerData="starter" /> 
    <VerticalCardFlow :containerData="bookmarkItems" />
  </SectionMain>
</template>
