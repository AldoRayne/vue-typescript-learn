<template>
  <td :class="{ left, wrap }">
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
  padding: 5px;
  border: 1px solid #f4f4f4;

  &:not(.left) {
    text-align: center;
  }

  &:not(.wrap) {
    white-space: nowrap;
  }
}
</style>
