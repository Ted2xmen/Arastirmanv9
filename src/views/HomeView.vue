<script setup>
import { computed, ref, onMounted } from "vue";
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

const titleStack = ref(["Araştırman", ""]);

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
  fillChartData();
});

const mainStore = useMainStore();

const clientBarItems = computed(() => mainStore.clients.slice(0, 3));

const transactionBarItems = computed(() => mainStore.history.slice(0, 4));
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionMain>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <CardBoxWidget
        trend="12%"
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiAccountMultiple"
        :number="512"
        label="Clients"
      />

      <BookmarkCard  image="logos/archive.png" label="Archive.org"  />

      <CardBox>
        <img src="logos/archive.png" width="100" alt="" />
      
      </CardBox>


      <CardBoxWidget
        trend="120%"
        trend-type="alert"
        color="text-blue-500"
        :number="7770"
        prefix="$"
        image="logos/harvard.png"
        label="Salesss"
      />
  
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col gap-2 justify-between">
        <CardBoxWidget
        trend="120%"
        trend-type="alert"
        color="text-blue-500"
        :number="7770"
        prefix="$"
        image="logos/harvard.png"
        label="Salesss"
      />
       <CardBoxWidget
        trend="120%"
        trend-type="alert"
        color="text-blue-500"
        :number="7770"
        prefix="$"
        image="logos/harvard.png"
        label="Salesss"
      />
      </div>
        <CardBoxTransaction
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

    <SectionTitleBarSub :icon="mdiChartPie" title="Trends overview" />

    <CardBox
      title="Performance"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="mb-6"
      @header-icon-click="fillChartData"
    >
      <div v-if="chartData">
        <line-chart :data="chartData" class="h-96" />
      </div>
    </CardBox>

    <SectionTitleBarSub :icon="mdiAccountMultiple" title="Clients" />

    <NotificationBar color="info" :icon="mdiMonitorCellphone">
      <b>Responsive table.</b> Collapses on mobile
    </NotificationBar>

    <CardBox :icon="mdiMonitorCellphone" title="Responsive table" has-table>
      <TableSampleClients />
    </CardBox>
  </SectionMain>
</template>
