<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import ToolCard from "@/components/ToolCard.vue";
import BigBookmarkCard from "../BigBookmarkCard.vue";
import BookmarkCard from "../BookmarkCard.vue";

defineProps({
  containerData: {
    type: Array,
  },
  label: {
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
});
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
    <div class="flex flex-col justify-between overflow-auto h-96 gap-2">
      <BookmarkCard
        v-for="(item, i) in containerData"
        :uri="item.uri"
        :image="item.iconuri"
        :label="item.title"
        :key="i"
      />
    </div>
  </div>
</template>