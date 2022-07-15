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
    default: null,
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
  <CardBox>
    <BaseLevel mobile>
      <div>
        <h3 class="text-lg leading-tight text-gray-500 dark:text-gray-400">
      <a href="#">{{ label }}</a>    
        </h3>
        <div class="text-md w-24 p-1 leading-tight">
          {{ description }}
        </div>
      </div>
      <img :src="image" width="55" alt="" />
    </BaseLevel>
  </CardBox>
</template>
