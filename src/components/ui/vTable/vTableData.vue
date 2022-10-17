<template>
  <td :class="{ left, wrap }" class="p-[5px] border">
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

<style lang="scss" scoped>
td {
  &:not(.left) {
    text-align: center;
  }

  &:not(.wrap) {
    white-space: nowrap;
  }
}
</style>
