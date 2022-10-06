<template>
  <div class="dropdown" v-click-outside="dropdownClose">
    <button class="dropdown__toggle" @click="dropdownToggle">
      <slot name="button-name"></slot>
      <span class="carret"></span>
    </button>
    <div v-show="dropdownActive" class="dropdown__menu">
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

<style lang="scss" scoped>
.dropdown {
  margin: 0 auto;
  width: max-content;
  position: relative;

  &__toggle {
    white-space: nowrap;
  }

  &__menu {
    padding: 15px;
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    background: #fff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
  }
}

.carret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
</style>
