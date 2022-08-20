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
  <div class="bigbookmark-card">
    <img :src="image" class="" width="50" alt="" />
    <div class="flex items-center">
      <h2 class="text-md mx-1 font-bold leading-tight">
        <a :href="uri" class="">{{ label }}</a>
      </h2>
      <!-- <h3 class="text-xs  p-1 leading-tight">
        {{ description }} 
      </h3> -->
    </div>
  </div>
</template>
