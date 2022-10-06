<template>
  <filter-block>
    <combo-box placeholder="Комнат" :comboItems="roomComboList" />
    <sort-block name="sort-by-room" />
  </filter-block>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FilterBlock from "@/components/filterComponent/filterBlock.vue";
import SortBlock from "@/components/filterComponent/sortBlock.vue";
import ComboBox from "@/components/filterComponent/comboBox.vue";

export default defineComponent({
  components: {
    FilterBlock,
    SortBlock,
    ComboBox,
  },

  setup() {
    const roomComboList = ["1к", "2к", "3к", "4к", "5к+"];

    return { roomComboList };
  },
});
</script>
