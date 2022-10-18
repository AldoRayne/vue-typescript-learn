<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="inputValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="{ 'border border-light-blue': !noBorder }"
    class="p-[5px] w-full box-border focus-visible:outline-0"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "text",
    },

    placeholder: {
      type: String,
      default: null,
    },

    noBorder: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const inputValue = ref("");

    return { inputValue };
  },
});
</script>
