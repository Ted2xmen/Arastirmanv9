<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config.js";
import LineChart from "@/components/Charts/LineChart.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import SectionHeroBar from "@/components/SectionHeroBar.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import CardBox from "@/components/CardBox.vue";
import TableSampleClients from "@/components/TableSampleClients.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBoxTransaction from "@/components/CardBoxTransaction.vue";
import CardBoxClient from "@/components/CardBoxClient.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import BookmarkCard from "@/components/BookmarkCard.vue";
import HomeCarousel from "@/components/shared/HomeCarousel.vue";

const titleStack = ref(["Araştırman", "Önerilenler"]);

const mainStore = useMainStore();
const carousel = computed(() => mainStore.carousel);

const collections = computed(() => mainStore.collections);
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionMain class="mx-2 pt-5">
    <HomeCarousel :containerData="carousel" />

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6 pt-5">
      <BookmarkCard
        hoverable
        v-for="(item, i) in collections"
        :uri="item.uri"
        :image="item.iconuri"
        :label="item.title"
        :key="i"
      />
    </div>
  </SectionMain>
</template>
