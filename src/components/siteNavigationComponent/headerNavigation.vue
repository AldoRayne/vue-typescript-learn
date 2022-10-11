<template>
  <header>
    <div :class="{ collapsed }" class="logo">
      <Transition name="fade">
        <router-link
          v-if="!collapsed"
          :to="{ name: 'Home' }"
          class="logo__text"
        >
          <span class="bold">База&nbsp;</span>
          <span class="thin">Лидер</span>
        </router-link>
        <router-link v-else :to="{ name: 'Home' }" class="logo__text">
          <span class="bold">Б</span>
          <span class="thin">Л</span>
        </router-link>
      </Transition>
    </div>
    <button @click="navigationTogglerClick" class="expand">
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
header {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #dd4b39;
  box-sizing: border-box;
  z-index: 1;
}

.logo {
  position: relative;
  padding: 0 15px;
  width: 230px;
  color: #fff;
  font-size: 20px;
  box-sizing: border-box;
  transition: width 0.5s ease-out;

  &.collapsed {
    width: 49px;
    transition-delay: 0.5s;
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
  }
}

.bold {
  font-family: "Inter Bold", sans-serif;
}

.thin {
  font-family: "Inter Thin", sans-serif;
  text-transform: uppercase;
}

.expand {
  padding: 0;
  width: 42px;
  height: 100%;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: #d73925;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition-delay: 0.5s;
}
</style>
