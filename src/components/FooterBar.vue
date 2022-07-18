<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '@/stores/layout.js'
import BaseLevel from '@/components/BaseLevel.vue'

const year = computed(() => new Date().getFullYear())

const isFooterBarVisible = computed(() => !useLayoutStore().isFullScreen)
</script>

<template>
  <footer
    v-show="isFooterBarVisible"
    class=" py-2 px-6"
  >
    <BaseLevel>
      <div class="text-center md:text-left text-gray-300">
        <b>&copy;2019-{{ year }} </b> Arastirman.com 
 
      </div>
     
    </BaseLevel>
  </footer>
</template>
