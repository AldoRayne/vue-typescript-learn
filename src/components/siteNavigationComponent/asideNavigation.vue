<template>
  <aside
    @mouseenter="navigationToggle(true)"
    @mouseleave="navigationToggle(false)"
    :class="{ 'w-[49px] delay-500': collapsed }"
    class="pt-[15px] fixed top-[50px] left-0 w-[230px] h-[calc(100%_-_50px)] bg-zinc-50 box-border overflow-y-auto transition-width ease-out duration-500"
  >
    <Transition name="slide-fade">
      <section>
        <span class="mx-[10px] mb-[10px] block text-slate-500 text-[12px]">
          Меню
        </span>
        <ul>
          <li class="menu-item">
            <router-link to="/" class="menu-item-title">
              <font-awesome-icon
                icon="fa-solid fa-house"
                class="menu-item-icon"
              />
              <Transition name="fade">
                <span v-show="!collapsed" class="menu-item-name">
                  Новости
                </span>
              </Transition>
            </router-link>
          </li>
          <li class="menu-item">
            <span class="menu-item-title">
              <font-awesome-icon
                icon="fa-solid fa-user"
                class="menu-item-icon"
              />
              <Transition name="fade">
                <span v-show="!collapsed" class="menu-item-name">
                  Мой профиль
                </span>
              </Transition>
            </span>
          </li>
          <li
            :class="{ expanded: collapsePanel?.isExpanded }"
            class="menu-item"
          >
            <vue-collapsible-panel ref="collapsePanel" :expanded="false">
              <template #title>
                <span class="menu-item-title">
                  <font-awesome-icon
                    icon="fa-solid fa-database"
                    class="menu-item-icon"
                  />
                  <Transition name="fade">
                    <span v-show="!collapsed" class="menu-item-name">
                      База
                    </span>
                  </Transition>
                </span>
              </template>
              <template #content>
                <ul class="sub-menu">
                  <router-link :to="{ name: 'Rent' }" class="sub-menu__item">
                    Аренда
                  </router-link>
                  <router-link :to="{ name: 'Sale' }" class="sub-menu__item">
                    Продажа
                  </router-link>
                </ul>
              </template>
            </vue-collapsible-panel>
          </li>
        </ul>
      </section>
    </Transition>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

import { VueCollapsiblePanel } from "@dafcoe/vue-collapsible-panel";

import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";

export default defineComponent({
  components: {
    VueCollapsiblePanel,
  },

  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {
    const collapsePanel = ref<InstanceType<typeof VueCollapsiblePanel>>();
    const wasCollapsed = ref(false);

    watch(
      () => props.collapsed,
      (value) => {
        if (value && collapsePanel.value?.isExpanded)
          collapsePanel.value.toggle();
      }
    );

    function navigationToggle(mouseIn: boolean): void {
      if (mouseIn && props.collapsed) {
        wasCollapsed.value = true;
        context.emit("navigationToggle");
      } else if (!mouseIn && !props.collapsed && wasCollapsed.value)
        context.emit("navigationToggle");
    }

    return { collapsePanel, wasCollapsed, navigationToggle };
  },
});
</script>

<style lang="scss" scoped>
aside {
  &:deep {
    .vcp__header,
    .vcp__body-content {
      padding: 0;
    }

    .vcp__header-icon {
      transition: opacity 0.5s ease-out;
    }
  }

  &.collapsed {
    &:deep {
      .vcp__header-icon {
        opacity: 0;
        transition-delay: 0;
      }

      & + .content {
        margin-left: 49px;
        transition-delay: 0.5s;
      }
    }
  }
}

.sub-menu {
  padding-left: 0;
  list-style-type: none;

  &__item {
    padding: 5px 5px 5px 15px;
    display: block;
    color: #777;
    font-size: 14px;
    text-decoration: none;

    &.router-link-active,
    &:hover {
      color: #000;
    }
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

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.fade-enter-active,
.slide-fade-enter-active {
  transition-delay: 0.5s;
}
</style>
