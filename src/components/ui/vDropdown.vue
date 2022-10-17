<template>
  <div class="mx-auto my-0 w-max relative" v-click-outside="dropdownClose">
    <button class="whitespace-nowrap" @click="dropdownToggle">
      <slot name="button-name"></slot>
      <span
        class="inline-block w-0 h-0 ml-[2px] align-middle border-t-4 border-r-4 border-l-4 border-t-black border-r-transparent border-l-transparent"
      ></span>
    </button>
    <div
      v-show="dropdownActive"
      class="p-[15px] absolute top-px-15 left-0 bg-white shadow-default"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import vClickOutside from "click-outside-vue3";

export default defineComponent({
  directives: {
    clickOutside: vClickOutside.directive,
  },

  setup() {
    const dropdownActive = ref(false);

    function dropdownToggle(): void {
      dropdownActive.value = !dropdownActive.value;
    }

    function dropdownClose(): void {
      dropdownActive.value = false;
    }

    return { dropdownActive, dropdownToggle, dropdownClose };
  },
});
</script>
