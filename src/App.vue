<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useMainStore } from '@/stores/main.js'
import { useLayoutStore } from '@/stores/layout.js'
import menu from '@/menu.js'
import NavBar from '@/components/NavBar.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'

const mainStore = useMainStore()

mainStore.setUser({
  name: 'Ziyaretçi',
  email: 'john@example.com',
  avatar: null
})

const layoutStore = useLayoutStore()

const isAsideLgActive = computed(() => layoutStore.isAsideLgActive)

const overlayClick = () => {
  layoutStore.asideLgToggle(false)
}
</script>

<template>
  <NavBar />
  <AsideMenu :menu="menu" />
  <RouterView />
  <!-- <FooterBar /> -->
  <OverlayLayer
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>
