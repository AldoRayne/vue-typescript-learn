<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="inputValue"
    @input="$emit('update:modelValue', $event.target.value)"
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

<style scoped>
input {
  padding: 5px;
  width: 100%;
  border: 1px solid #3c8dbc;
  box-sizing: border-box;
}
</style>
