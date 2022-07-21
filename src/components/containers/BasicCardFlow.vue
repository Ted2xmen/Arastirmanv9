<script setup>
import BigBookmarkCard from "@/components/shared/BigBookmarkCard.vue";
import CardBox from "../CardBox.vue";

defineProps({
  containerData: {
    type: Array,
  },
});

// todo bigbookmarkcard
</script>
 
<template>
  <div class="flex flex-row flex-wrap"> 
      <BigBookmarkCard
        v-for="(item, i) in containerData.slice(0,4)"
        :uri="item.uri"
        :image="item.iconuri"
        label=""
        :key="i"
      />
  
    </div>
  
</template>