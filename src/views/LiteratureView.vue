<script setup>
import { ref } from "vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import CardBox from "@/components/CardBox.vue";

import BookmarkCard from "@/components/BookmarkCard.vue";
import BigBookmarkCard from "@/components/BigBookmarkCard.vue";

const titleStack = ref(["Araştırman", "Literatür Taraması"]);
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />

  <SectionMain class="mx-2">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <BookmarkCard
        v-for="(item, i) in 9"
        :key="i"
        image="/src/logos/jstor.png"
        label="Deneme deneme deneme deneme deneme"
      />

      <BigBookmarkCard
        v-for="(item, i) in 12"
        :key="i"
        image="/src/logos/archive.png"
        description="kj daklsjdkjds skdjfklsdjfks jksdsakdaklsj aksjdkasjdkjf k"
        label="Deneme deneme deneme deneme"
      >
      </BigBookmarkCard>
    </div>
  </SectionMain>
</template>
