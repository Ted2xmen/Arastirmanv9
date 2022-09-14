<script setup>
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import CardBox from "@/components/CardBox.vue";

import BookmarkCard from "@/components/BookmarkCard.vue";
import { useMainStore } from "@/stores/main";
import { computed, ref } from "vue";

const mainStore = useMainStore();

const tools = computed(() => mainStore.tools);

const titleStack = ref(["Araştırman", "Faydalı Araçlar"]);
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />

  <SectionMain class="mx-2">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <BookmarkCard
        class="h-36"
        hoverable
        v-for="(item, i) in tools"
        :key="i"
        :uri="item.uri"
        :image="item.iconuri || item.iconUri" 
        :label="item.title"
        :alt="item.title"
      />
    </div>
  </SectionMain>
</template>
