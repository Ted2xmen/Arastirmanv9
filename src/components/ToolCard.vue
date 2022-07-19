<script setup>


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
  image: {
      type: String,
    default: null,
  }
});
</script>

<template>
  <div class="bg-gray-200 pb-6 hover:bg-gray-400 transition-all rounded-b-lg">
    <div class="flex items-center bg-yellow-200 pt-4 px-2 shadow-md space-x-1">
      <img :src="image" class="mb-5 p-1" width="50" alt="" />
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
  </div>
</template>
