<template>
  <label class="flex items-center cursor-pointer">
    <div class="relative w-[18px] h-[18px]">
      <input type="radio" :name="name" class="invisible peer" />
      <span
        class="flex justify-center items-center absolute top-0 left-0 w-full h-full border rounded-full border-slate-300 after:block after:w-[8px] after:h-[8px] after:rounded-full peer-checked:after:bg-light-blue"
      ></span>
    </div>
    <font-awesome-icon v-if="icon" :icon="icon" class="ml-[10px]" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      default: null,
    },
  },
});
</script>
