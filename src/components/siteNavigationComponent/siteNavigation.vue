<template>
  <header-navigation
    @navigationTogglerClick="navigationTogglerClick"
    :collapsed="collapsed"
  />
  <aside-navigation
    ref="asideNavigation"
    @navigationToggle="navigationToggle"
    :collapsed="collapsed"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import HeaderNavigation from "@/components/siteNavigationComponent/headerNavigation.vue";
import AsideNavigation from "@/components/siteNavigationComponent/asideNavigation.vue";

export default defineComponent({
  components: {
    HeaderNavigation,
    AsideNavigation,
  },

  setup() {
    const collapsed = ref(false);
    const asideNavigation = ref<InstanceType<typeof AsideNavigation>>();

    function navigationToggle(): void {
      collapsed.value = !collapsed.value;
    }

    function navigationTogglerClick(): void {
      if (asideNavigation.value?.wasCollapsed)
        asideNavigation.value.wasCollapsed = false;

      navigationToggle();
    }

    return {
      collapsed,
      asideNavigation,
      navigationToggle,
      navigationTogglerClick,
    };
  },
});
</script>
