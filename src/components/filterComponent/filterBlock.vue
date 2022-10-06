<template>
  <div class="filter">
    <slot />
    <div class="filter__actions">
      <v-button>Применить</v-button>
      <v-button>Очистить</v-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import vButton from "@/components/ui/vButton.vue";

export default defineComponent({
  components: {
    vButton,
  },

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
