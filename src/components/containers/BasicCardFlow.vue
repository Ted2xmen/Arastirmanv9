<script setup>
import { computed, defineComponent, ref } from "vue";
import BookmarkCard from "../BookmarkCard.vue";

  defineComponent({
  name: "BasicCardFlow",
  components: {
    BookmarkCard,
  
  },
  props: ["containerData"],
})

// defineProps({
//   label: {
//     type: String,
//     default: null,
//   },
//   description: {
//     type: String,
//     default: null,
//   },
//   uri: {
//     type: String,
//     default: null,
//   },
//   image: {
//       type: String,
//     default: null,
//   }
// });
</script>

<template>
     <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 ">
      <div class="flex flex-col justify-between overflow-auto h-96 gap-2 ">
        <BookmarkCard v-for="(item, i) in containerData" :key="i" />
      </div>
    </div>
</template>