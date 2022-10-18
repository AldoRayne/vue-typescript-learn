<template>
  <td
    :class="{ 'text-center': !left, 'whitespace-nowrap': !wrap }"
    class="p-[5px] border"
  >
    <slot />
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    left: {
      type: Boolean,
      default: false,
    },

    wrap: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
