<template>
  <a v-if="isLink" :href="href" class="button"><slot /></a>
  <button v-else class="button"><slot /></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },

    href: {
      type: String,
      default: "#",
    },
  },
});
</script>
