<template>
  <div class="flex items-center">
    <span>Сортировка:</span>
    <div class="flex w-2/3">
      <div class="sort-radio">
        <v-radio :name="name" icon="fa-solid fa-arrow-down-short-wide" />
      </div>
      <div class="sort-radio">
        <v-radio :name="name" icon="fa-solid fa-arrow-up-short-wide" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import vRadio from "@/components/ui/vRadio.vue";

export default defineComponent({
  components: {
    vRadio,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
