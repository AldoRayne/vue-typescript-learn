<template>
  <aside
    @mouseenter="navigationToggle(true)"
    @mouseleave="navigationToggle(false)"
    :class="{ collapsed }"
  >
    <Transition name="slide-fade">
      <section>
        <span class="title">Меню</span>
        <ul class="menu">
          <li class="menu__item">
            <router-link to="/" class="menu__item__title">
              <font-awesome-icon icon="fa-solid fa-house" class="icon" />
              <Transition name="fade">
                <span v-show="!collapsed" class="menu__item__name">
                  Новости
                </span>
              </Transition>
            </router-link>
          </li>
          <li class="menu__item">
            <span class="menu__item__title">
              <font-awesome-icon icon="fa-solid fa-user" class="icon" />
              <Transition name="fade">
                <span v-show="!collapsed" class="menu__item__name">
                  Мой профиль
                </span>
              </Transition>
            </span>
          </li>
          <li
            :class="{ expanded: collapsePanel?.isExpanded }"
            class="menu__item"
          >
            <vue-collapsible-panel ref="collapsePanel" :expanded="false">
              <template #title>
                <span class="menu__item__title">
                  <font-awesome-icon icon="fa-solid fa-database" class="icon" />
                  <Transition name="fade">
                    <span v-show="!collapsed" class="menu__item__name">
                      База
                    </span>
                  </Transition>
                </span>
              </template>
              <template #content>
                <ul class="sub-menu">
                  <router-link to="/rent" class="sub-menu__item">
                    Аренда
                  </router-link>
                  <router-link to="/sale" class="sub-menu__item">
                    Продажа
                  </router-link>
                  <li class="sub-menu__item">Посуточно</li>
                  <li class="sub-menu__item">Сниму</li>
                  <li class="sub-menu__item">Куплю</li>
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
  padding-top: 15px;
  position: fixed;
  top: 50px;
  left: 0;
  width: 230px;
  height: calc(100% - 50px);
  background: #f9fafc;
  box-sizing: border-box;
  overflow-y: auto;
  transition: width 0.5s ease-out;

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
    width: 49px;
    transition-delay: 0.5s;

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

.title {
  margin: 0 10px 10px;
  display: block;
  color: #848484;
  font-size: 12px;
}

.icon {
  margin-right: 5px;
  width: 20px;
  font-size: 14px;
  flex-shrink: 0;
}

.menu {
  padding: 0;
  list-style-type: none;

  &__item {
    padding: 12px 5px 12px 15px;
    cursor: pointer;

    &.expanded,
    &:hover {
      background: #f4f4f5;
    }

    &__title {
      display: flex;
      align-items: center;
      min-height: 20px;
      color: #000;
      text-decoration: none;
    }

    &__name {
      white-space: nowrap;
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
