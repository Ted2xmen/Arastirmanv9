<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import HeaderHero from "@/components/containers/HeaderHero.vue";
import CardBox from "@/components/CardBox.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import BasicCardFlow from "@/components/containers/BasicCardFlow.vue";
import HomeCarousel from "@/components/HomeCarousel.vue";
import MainContainer from "@/components/containers/MainContainer.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

const titleStack = ref([
  "Araştırman",
  "Araştırmacılar için İnternet Kaynakları",
]);

const mainStore = useMainStore();
const bookmarkItems = computed(() => mainStore.libs.slice(0, 10));
const starter = computed(() => mainStore.starter.slice(0, 10));
const uniLibs = computed(() => mainStore.uniLibs.slice(0, 9));
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionMain class="mx-2 space-y-6">
    <HeaderHero />
    <BasicCardFlow :containerData="starter" />
    <HomeCarousel :containerData="bookmarkItems" />


<!--uni and tools home-->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 py-7">
      <div class="flex flex-col justify-between">
        <SectionTitleBarSub
          badge="orange"
          title="Literatür Taraması"
          badgeTitle="Son Eklenenler"
        />
        <div class="overflow-x-auto rounded-xl">
          <MainContainer :containerData="uniLibs" />
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <SectionTitleBarSub
          badge="green"
          title="Faydalı Araçlar"
          badgeTitle="Son Eklenenler"
        />
        <div class="overflow-x-auto rounded-xl">
          <MainContainer :containerData="uniLibs" />
        </div>
      </div>
    </section>
<!--uni and tools home-->


  </SectionMain>
</template>
