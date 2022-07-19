<template>
  <section class="mx-2 space-y-3">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
      <CardBox
        class="
          bg-hero
          shadow-lg
          pt-12
          pr-6
          col-span-2
          bg-cover bg-center bg-no-repeat
        "
      >
        <h2 class="text-black text-2xl font-bold text-right">
          Araştırmacılar için İnternet Kaynakları
        </h2>
      </CardBox>

      <div class="space-y-2">
        <CardBox
          class="
            bg-hero2
            text-center
            shadow-lg
            text-black text-2xl
            font-bold
            bg-cover bg-center bg-no-repeat
          "
        >
          Blog
        </CardBox>
        <CardBox
          class="
            bg-hero3
            text-center
            shadow-lg
            text-white text-2xl
            font-bold
            bg-cover bg-center bg-no-repeat
          "
        >
          Twitter
        </CardBox>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardBox from "@/components/CardBox.vue";
</script>