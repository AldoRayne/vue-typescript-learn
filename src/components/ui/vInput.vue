<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="inputValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="p-[5px] w-full border border-light-blue box-border"
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
  },

  setup() {
    const inputValue = ref("");

    return { inputValue };
  },
});
</script>
