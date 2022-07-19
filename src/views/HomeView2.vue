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
import HomeCarousel from "@/components/HomeCarousel.vue";
import ToolCard from "@/components/ToolCard.vue";

const titleStack = ref([
  "Araştırman",
  "Araştırmacılar için İnternet Kaynakları",
]);

const mainStore = useMainStore();

const clientBarItems = computed(() => mainStore.clients.slice(0, 3));

const transactionBarItems = computed(() => mainStore.history.slice(0, 3));

const bookmarkItems = computed(() => mainStore.libs.slice(0, 6));
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <!-- <SectionTitleBarSub :icon="mdiChartPie" title="Trends overview" /> -->

  <SectionMain class="mx-2 space-y-3">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
      <CardBox
        class="
          bg-hero
          shadow-md
          pt-12
          pr-6
          col-span-2
          bg-cover bg-center bg-no-repeat
        "
      >
        <h2 class="text-black text-2xl font-bold text-right">
          Araştırmacılar için İnternet Kaynakları
        </h2>
      </CardBox>

      <div class="space-y-2">
        <CardBox
          class="
            bg-hero2
            text-center
            shadow-md
            text-black text-2xl
            font-bold
            bg-cover bg-center bg-no-repeat
          "
        >
          Blog
        </CardBox>
        <CardBox
          class="
            bg-hero3
            text-center
            shadow-md
            text-white text-2xl
            font-bold
            bg-cover bg-center bg-no-repeat
          "
        >
          Twitter
        </CardBox>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 mb-6">
      <BookmarkCard
        hoverable
        v-for="(item, i) in bookmarkItems"
        :key="i"
        :uri="item.uri"
        :image="item.iconuri"
        :label="item.title"
      />
      

    


    </div>
    <div class="mx-8">
      <HomeCarousel :items="bookmarkItems" />
      
    </div>
    
   <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 ">
      <div class="flex flex-col justify-between overflow-auto h-96 gap-2 ">
        <ToolCard v-for="(item, i) in bookmarkItems"  :label="item.title"  :image="item.iconuri"  :key="i" />
      </div>

      <CardBox class=""> </CardBox>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col justify-between">
        <CardBoxTransaction
          hoverable
          v-for="(transaction, index) in transactionBarItems"
          :key="index"
          :amount="transaction.amount"
          :date="transaction.date"
          :business="transaction.business"
          :type="transaction.type"
          :name="transaction.name"
          :account="transaction.account"
        />
      </div>

      <CardBox class=""> </CardBox>
    </div>
  </SectionMain>
</template>
