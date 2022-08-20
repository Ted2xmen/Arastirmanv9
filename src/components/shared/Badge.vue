<script setup>
defineProps({
  badge: {
    type: String,
    default: null,
  },
  badgeTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    :style="{ backgroundColor: badge }"
    class="mx-1 p-1 rounded-lg text-white text-xs"
  >
    {{ badgeTitle }}
  </div>
</template>
