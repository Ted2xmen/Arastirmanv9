<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import ToolCard from "@/components/ToolCard.vue";
import BookmarkCard from "../BookmarkCard.vue";
import SectionTitleBarSub from "../SectionTitleBarSub.vue";

defineProps({
  containerData: {
    type: Array,
  },
  label: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },

  uri: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  badge: {
    type: String,
    default: null,
  },
  badgeTitle: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <!-- <SectionTitleBarSub :badgeTitle="badgeTitle" :badge="badge" :icon="mdiChartPie" :title="title" /> -->
  <!-- <div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
    <div class="flex flex-col justify-between overflow-auto h-full gap-2"> -->
  <div class="h-64 space-y-2">
    <BookmarkCard
      v-for="(item, i) in containerData"
      :uri="item.uri"
      :image="item.iconuri || item.iconUri"
      :label="item.title"
      :key="i"
    />
  </div>
  <!-- </div>
  </div> -->
</template>