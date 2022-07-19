<script setup>
import { ref } from "vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import CardBox from "@/components/CardBox.vue";

import BookmarkCard from "@/components/BookmarkCard.vue";

const titleStack = ref(["Araştırman", "Faydalı Araçlar"]);
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />

  <SectionMain class="mx-2">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
   <BookmarkCard
        class="h-36"
        hoverable
        v-for="(item, i) in 12"
        :key="i"
        image="/src/logos/evernote.png"
        label="Evernote"
      />

    </div>
  </SectionMain>
</template>
