<template>
  <div :class="cols">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cols: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
[class^="col"] {
  margin-bottom: 10px;
  padding: 0 5px;
  box-sizing: border-box;
}

.col {
  &-xs {
    &-12 {
      width: 100%;
    }

    &-6 {
      width: 50%;
    }
  }
}
</style>
