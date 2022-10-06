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

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: 6px 12px;
  display: block;
  width: max-content;
  color: #fff;
  font-size: 14px;
  background: #367fa9;
  border: none;
  text-decoration: none;
  cursor: pointer;
}
</style>
