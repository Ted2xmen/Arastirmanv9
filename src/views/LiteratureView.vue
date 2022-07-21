<script setup>
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import CardBox from "@/components/CardBox.vue";
import BookmarkCard from "@/components/BookmarkCard.vue";
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";

const titleStack = ref(["Araştırman", "Literatür Taraması"]);

const mainStore = useMainStore();

const libraryItems = computed(() => mainStore.libs);
const birincil = computed(() => mainStore.starter);
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionMain class="mx-2">
    <SectionTitleBarSub :icon="mdiChartPie" title="Birincil Kaynaklar" />
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 mb-6">
      <BookmarkCard
        v-for="(item, i) in birincil"
        :key="i"
        :uri="item.uri"
        :image="item.iconuri"
        :label="item.title"
        :alt="item.title"
      />
    </div>
    

    <SectionTitleBarSub :icon="mdiChartPie" title="Üniversite Kütüphaneleri" />
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 mb-6">
      <BookmarkCard
        v-for="(item, i) in libraryItems"
        :key="i"
        :uri="item.uri"
        :image="item.iconuri"
        :label="item.title"
        :alt="item.title"
      />
    </div>

    <SectionTitleBarSub :icon="mdiChartPie" title="Araştırma Kütüphaneleri" />
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 mb-6">
      <BookmarkCard
        v-for="(item, i) in libraryItems"
        :key="i"
        :uri="item.uri"
        :image="item.iconuri"
        :label="item.title"
        :alt="item.title"
      />
    </div>
    

  </SectionMain>
</template>
