<template>
  <header
    class="flex items-center fixed top-0 left-0 w-full h-[50px] bg-cinnabar box-border z-10"
  >
    <div
      :class="collapsed ? 'w-[49px] delay-500' : 'w-[230px]'"
      class="relative p-x-[15px] text-white text-[20px] box-border transition-width duration-500 ease-out"
    >
      <Transition name="fade">
        <router-link
          v-if="!collapsed"
          :to="{ name: 'Home' }"
          class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white whitespace-nowrap"
        >
          <span class="font-bold">База&nbsp;</span>
          <span class="font-thin uppercase">Лидер</span>
        </router-link>
        <router-link
          v-else
          :to="{ name: 'Home' }"
          class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white whitespace-nowrap"
        >
          <span class="font-bold">Б</span>
          <span class="font-thin uppercase">Л</span>
        </router-link>
      </Transition>
    </div>
    <button @click="navigationTogglerClick" class="w-[42px] h-full text-white">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {
    function navigationTogglerClick(): void {
      context.emit("navigationTogglerClick");
    }

    return { navigationTogglerClick };
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity ease-out duration-500;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-enter-active {
  @apply delay-500;
}
</style>
