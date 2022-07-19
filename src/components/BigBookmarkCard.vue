<script setup>
import { mdiCog } from "@mdi/js";
import CardBox from "@/components/CardBox.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import PillTagTrend from "@/components/PillTagTrend.vue";
import BaseButton from "@/components/BaseButton.vue";

defineProps({
  label: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: "https://www.svgrepo.com/show/139611/loading.svg",
  },
  uri: {
    type: String,
    default: null,
  },
  trend: {
    type: String,
    default: null,
  },
  trendType: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div
    class="
      flex
      border-x-4
      border-red-800
      hover:border-x-8
      transition-all
    bg-yellow-200
      rounded-lg
      py-4
      px-2
      shadow-md
      space-x-1
    "
  >
    <img :src="image" class="" width="50" alt="" />
    <div>
      <h2 class="text-md font-bold leading-tight text-gray-500">
        <a :href="uri" class="">{{ label }}</a>
      </h2>
      <h3 class="text-xs text-gray-500 p-1 leading-tight">
        {{ description }}
      </h3>
      <div class="inline-flex"></div>
    </div>
  </div>
</template>
