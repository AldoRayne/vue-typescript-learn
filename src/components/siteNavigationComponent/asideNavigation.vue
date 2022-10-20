<template>
  <aside
    @mouseenter="navigationToggle(true)"
    @mouseleave="navigationToggle(false)"
    :class="collapsed ? 'w-[49px] delay-500' : 'w-[230px]'"
    class="pt-[15px] fixed top-[50px] left-0 h-[calc(100%_-_50px)] bg-zinc-50 box-border overflow-y-auto transition-width ease-out duration-500"
  >
    <Transition name="slide-fade">
      <section>
        <span class="mx-[10px] mb-[10px] block text-slate-500 text-[12px]">
          Меню
        </span>
        <ul>
          <li
            class="pr-[5px] pl-[15px] py-[12px] cursor-pointer hover:bg-zinc-100"
          >
            <router-link to="/" class="flex items-center h-[20px]">
              <font-awesome-icon
                icon="fa-solid fa-house"
                class="mr-[5px] w-[20px] text-[14px] shrink-0"
              />
              <Transition name="fade">
                <span v-show="!collapsed" class="whitespace-nowrap">
                  Новости
                </span>
              </Transition>
            </router-link>
          </li>
          <li
            class="pr-[5px] pl-[15px] py-[12px] cursor-pointer hover:bg-zinc-100"
          >
            <span class="flex items-center h-[20px]">
              <font-awesome-icon
                icon="fa-solid fa-user"
                class="mr-[5px] w-[20px] text-[14px] shrink-0"
              />
              <Transition name="fade">
                <span v-show="!collapsed" class="whitespace-nowrap">
                  Мой профиль
                </span>
              </Transition>
            </span>
          </li>
          <li
            :class="{ 'bg-zinc-100': collapsePanel?.isExpanded }"
            class="pr-[5px] pl-[15px] py-[12px] cursor-pointer hover:bg-zinc-100"
          >
            <vue-collapsible-panel
              ref="collapsePanel"
              :expanded="false"
              :class="{ collapsed }"
              class="collapsePanel"
            >
              <template #title>
                <span class="flex items-center h-[20px]">
                  <font-awesome-icon
                    icon="fa-solid fa-database"
                    class="mr-[5px] w-[20px] text-[14px] shrink-0"
                  />
                  <Transition name="fade">
                    <span v-show="!collapsed" class="whitespace-nowrap">
                      База
                    </span>
                  </Transition>
                </span>
              </template>
              <template #content>
                <ul>
                  <router-link
                    :to="{ name: 'Rent' }"
                    active-class="!text-black"
                    class="py-[5px] pr-[5px] pl-[15px] block text-stone-600 text-[14px] hover:text-black"
                  >
                    Аренда
                  </router-link>
                  <router-link
                    :to="{ name: 'Sale' }"
                    active-class="!text-black"
                    class="py-[5px] pr-[5px] pl-[15px] block text-stone-600 text-[14px] hover:text-black"
                  >
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
.collapsePanel {
  &:deep .vcp__header {
    padding: 0;
  }

  &.collapsed:deep {
    .vcp__header-icon {
      opacity: 0;
      transition-delay: 500ms;
    }
  }
}
</style>
