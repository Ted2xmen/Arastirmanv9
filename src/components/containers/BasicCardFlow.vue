<script setup>
import BookmarkCard from "../BookmarkCard.vue";
import BigBookmarkCard from "../BigBookmarkCard.vue";
import CardBox from "../CardBox.vue";

defineProps({
  containerData: {
    type: Array,
  },
});

// todo bigbookmarkcard
</script>
 
<template>
  <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 2xl:grid-cols-4"> 
      <BigBookmarkCard
        v-for="(item, i) in containerData"
        :uri="item.uri"
        :image="item.iconuri"
        :label="item.title"
        :key="i"
      />
  
    </div>
  
</template>