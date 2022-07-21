<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import HeaderHero from "@/components/containers/HeaderHero.vue";
import CardBox from "@/components/CardBox.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import BasicCardFlow from "@/components/containers/BasicCardFlow.vue";
import HomeCarousel from "@/components/shared/HomeCarousel.vue";
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
  <SectionMain class="mx-1 space-y-2">
    <HeaderHero />

    <HomeCarousel :containerData="bookmarkItems" />

    <!--second hero-->
    <section
      class="grid grid-cols-1 md:grid-cols-3 content-center gap-5 mx-5 py-3"
    >
      <div class="flex flex-col justify-between">
        <SectionTitleBarSub
          badge="black"
          title="Birincil Kaynaklar"
          badgeTitle="Öneriler"
        />
        <div class="rounded-xl overflow-x-auto">
          <MainContainer :containerData="starter" />
        </div>
      </div>

      <div class="flex flex-col justify-start">
        <SectionTitleBarSub badge="red" title="Faydalı Araçlar" badgeTitle="Önerilenler" />
        <div class="rounded-xl overflow-x-auto">
          <MainContainer :containerData="starter" />
        </div>
      </div>

      <div class="flex flex-col 2xl:mt-8">
        <SectionTitleBarSub badge="" title="" badgeTitle="" />
        <CardBox
          class="
            bg-about
            shadow-lg
            flex
            items-end
            flex-1
            object-center
            bg-no-repeat bg-cover
          "
        >
          <ul class="text-lg font-serif space-y-1">
            <li>Birincil Kaynaklar - (12)</li>
            <li>Faydalı Araçlar - (22)</li>
            <li>Literatür Taraması - (44)</li>
            <li>Diğer - (44)</li>
          </ul>
        </CardBox>
      </div>
    </section>
    <!--second hero-->

    <!--uni and others home-->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 py-3">
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
          title="Diğer"
          badgeTitle="Son Eklenenler"
        />
        <div class="overflow-x-auto rounded-xl">
          <MainContainer :containerData="uniLibs" />
        </div>
      </div>
    </section>
    <!--uni and others home-->
  </SectionMain>
</template>
