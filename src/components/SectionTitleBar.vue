<script setup>
import {} from "@mdi/js";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButton from "@/components/BaseButton.vue";

defineProps({
  titleStack: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section class="p-6">
    <BaseLevel>
      <ul>
        <li
          v-for="(title, index) in titleStack"
          :key="index"
          class="
            stack-item
            inline-block
            pr-3
            text-lg md:text-2xl text-gray-500
            dark:text-gray-400
            last:pr-0 last:font-black last:text-black
          "
        >
          {{ title }}
        </li>
      </ul>

      <button
        class="
          border-0
          shadow-md
          p-2
          transition
          hover:bg-slate-500 hover:text-white
          px-4
          bg-blue-100
        "
      >
        Site Öner
      </button>
    </BaseLevel>
  </section>
</template>
