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
  <div
    class="
      flex
      items-center
      p-1
      bg-green-900
      group
      hover:bg-green-400
      rounded-lg
      shadow-md
    "
  >
    <div class="p-1">
      <img
        :src="image"
        class="rounded-lg p-1"
        width="50"
        height="50"
        :alt="alt"
      />
    </div>
    <a
      :href="uri"
      target="_blank"
      rel="noopener noreferrer"
      class="text-white group-hover:text-black"
      >
      <header>
        <h2 class="text-sm leading-tight">
          {{ label }}
        </h2>
      </header>
      </a
    >
    <div>
      <h3 class="text-md w-24 p-1 leading-tight">
        {{ description }}
      </h3>
    </div>
  </div>
</template>
