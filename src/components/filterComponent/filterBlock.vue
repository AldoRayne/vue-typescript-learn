<template>
  <div class="filter">
    <slot />
    <div class="filter__actions">
      <button class="btn">Применить</button>
      <button class="btn">Очистить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.filter {
  width: 300px;

  &:deep > *:not(:last-child) {
    margin-bottom: 15px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
  }
}
</style>
