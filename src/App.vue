<template>
  <site-navigation />
  <div class="content">
    <router-view :key="$route.path" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SiteNavigation from "@/components/siteNavigationComponent/siteNavigation.vue";

export default defineComponent({
  components: {
    SiteNavigation,
  },
});
</script>

<style lang="scss" scoped>
.content {
  margin: 50px 0 0 230px;
  padding: 15px;
  transition: margin-left 0.5s ease-out;
}
</style>
