<template>
  <site-navigation ref="siteNavigation" />
  <div
    :class="siteNavigation?.collapsed ? 'ml-[49px] delay-500' : 'ml-[230px]'"
    class="mt-[50px] p-[15px] transition-margin-left ease-out duration-500"
  >
    <router-view :key="$route.path" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import SiteNavigation from "@/components/siteNavigationComponent/siteNavigation.vue";

export default defineComponent({
  components: {
    SiteNavigation,
  },

  setup() {
    const siteNavigation = ref<InstanceType<typeof SiteNavigation>>();

    return { siteNavigation };
  },
});
</script>
