<script setup>
import { ref } from "vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import CardBox from "@/components/CardBox.vue";

import BookmarkCard from "@/components/BookmarkCard.vue";

const titleStack = ref(["Araştırman", "Literatür Taraması"]);
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />

  <SectionMain>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
    <CardBox hoverable v-for="item in 3" :key="item">
        <img src="/src/logos/archive.png" width="100" alt="" />
      </CardBox>

      <BookmarkCard
        hoverable
        v-for="(item, i) in 9"
        :key="i"
        image="/src/logos/archive.png"
        label="Deneme"
      />
    </div>
  </SectionMain>
</template>
