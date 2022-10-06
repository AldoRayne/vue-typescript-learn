<template>
  <label class="radio">
    <div class="radio__inner">
      <input type="radio" :name="name" class="radio__input" />
      <span class="radio__style"></span>
    </div>
    <font-awesome-icon v-if="icon" :icon="icon" class="icon" />
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

<style lang="scss" scoped>
.radio {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__inner {
    position: relative;
    width: 18px;
    height: 18px;
  }

  &__input {
    visibility: hidden;

    &:checked + .radio__style:after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background: #3c8dbc;
      border-radius: 100%;
    }
  }

  &__style {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 100%;
  }
}

.icon {
  margin-left: 10px;
}
</style>
