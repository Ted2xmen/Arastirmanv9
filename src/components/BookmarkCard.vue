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
  <div
    class="
    
      bookmark-card
    "
  >
    <div class="p-1">
      <img
        :src="image"
        class="rounded-lg p-1 hover:scale-150 transition"
        width="50"
        height="50"
        :alt="alt"
      />
    </div>
    <a
      :href="uri"
      target="_blank"
      rel="noopener noreferrer"
      class=" "
    >
      <header>
        <h2 class="text-sm leading-tight">
          {{ label }}
        </h2>
      </header>
    </a>
    <div>
      <h3 class="text-md w-24 p-1 leading-tight">
        {{ description }}
      </h3>
    </div>
  </div>
</template>
