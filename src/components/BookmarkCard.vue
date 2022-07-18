<script setup>
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
   uri: {
    type: String,
    default: null,
  },
   alt: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: "https://www.svgrepo.com/show/139611/loading.svg",
  },
  color: {
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

  <div class="flex items-center p-1 bg-slate-400 group hover:bg-slate-300  rounded-lg shadow-md">
    <div class="p-1">
      <img :src="image" class="rounded-lg p-1 " width="50" height="50" :alt="alt" />
    </div>
<header>
  <h2 class="text-sm leading-tight  ">
      <a :href="uri" class="text-white  group-hover:text-black">{{ label }}</a>
    </h2>
</header>
<div>
   <h3 class="text-md w-24 p-1 leading-tight">
      {{ description }}
    </h3>
</div>
   
  </div>
</template>
