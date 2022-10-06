<template>
  <div class="sort">
    <span class="sort__label">Сортировка:</span>
    <div class="sort__inputs">
      <div class="sort__input">
        <v-radio :name="name" icon="fa-solid fa-arrow-down-short-wide" />
      </div>
      <div class="sort__input">
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

<style lang="scss" scoped>
.sort {
  display: flex;
  align-items: center;

  &__inputs {
    display: flex;
    width: 66.66%;
  }

  &__input {
    display: flex;
    justify-content: center;
    width: 50%;
    flex-shrink: 0;
  }
}
</style>
