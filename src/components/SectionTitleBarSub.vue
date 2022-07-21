<script setup>
import Badge from "./shared/Badge.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
  badgeTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="px-6 sm:px-0 mb-6 flex items-center justify-between">
    <div class="flex items-center justify-start">
      <BaseIcon v-if="icon" :path="icon" class="mr-3" />
      <h1 class="text-2xl">
        {{ title }}
      </h1>
      <Badge :badgeTitle="badgeTitle" :badge="badge" />
    </div>
  </section>
</template>
