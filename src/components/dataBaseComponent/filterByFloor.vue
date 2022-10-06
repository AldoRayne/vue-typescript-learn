<template>
  <filter-block>
    <v-row>
      <v-col cols="col-xs-6">
        <combo-box placeholder="Этаж от" :comboItems="floorFromComboList" />
      </v-col>
      <v-col cols="col-xs-6">
        <combo-box placeholder="Этаж до" :comboItems="floorToComboList" />
      </v-col>
      <v-col cols="col-xs-12">
        <sort-block name="sort-by-floor" />
      </v-col>
      <v-col cols="col-xs-6">
        <combo-box placeholder="Этажей от" :comboItems="floorFromComboList" />
      </v-col>
      <v-col cols="col-xs-6">
        <combo-box placeholder="Этажей до" :comboItems="floorToComboList" />
      </v-col>
      <v-col cols="col-xs-12">
        <sort-block name="sort-by-floors" />
      </v-col>
    </v-row>
  </filter-block>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import vRow from "@/components/ui/grid/vRow.vue";
import vCol from "@/components/ui/grid/vCol.vue";
import FilterBlock from "@/components/filterComponent/filterBlock.vue";
import SortBlock from "@/components/filterComponent/sortBlock.vue";
import ComboBox from "@/components/filterComponent/comboBox.vue";

export default defineComponent({
  components: {
    vRow,
    vCol,
    FilterBlock,
    SortBlock,
    ComboBox,
  },

  setup() {
    const floorFromComboList = [
      "от 1-эт",
      "от 2-эт",
      "от 3-эт",
      "от 4-эт",
      "от 5-эт",
      "от 6-эт",
      "от 7-эт",
      "от 8-эт",
      "от 9-эт",
      "от 10-эт",
      "от 11-эт",
      "от 12-эт",
      "от 13-эт",
      "от 14-эт",
      "от 15-эт",
      "от 16-эт",
      "от 17-эт",
      "от 18-эт",
      "от 19-эт",
      "от 20-эт",
      "от 21-эт",
      "от 22-эт",
      "от 23-эт",
      "от 24-эт",
      "от 25-эт",
      "от 26-эт",
      "от 27-эт",
      "от 28-эт",
      "от 29-эт",
      "от 30-эт",
      "от 31-эт",
      "от 32-эт",
      "от 33-эт",
      "от 34-эт",
      "от 35-эт",
      "от 36-эт",
      "от 37-эт",
      "от 38-эт",
      "от 39-эт",
      "от 40-эт",
    ];

    const floorToComboList = [
      "до 1-эт",
      "до 2-эт",
      "до 3-эт",
      "до 4-эт",
      "до 5-эт",
      "до 6-эт",
      "до 7-эт",
      "до 8-эт",
      "до 9-эт",
      "до 10-эт",
      "до 11-эт",
      "до 12-эт",
      "до 13-эт",
      "до 14-эт",
      "до 15-эт",
      "до 16-эт",
      "до 17-эт",
      "до 18-эт",
      "до 19-эт",
      "до 20-эт",
      "до 21-эт",
      "до 22-эт",
      "до 23-эт",
      "до 24-эт",
      "до 25-эт",
      "до 26-эт",
      "до 27-эт",
      "до 28-эт",
      "до 29-эт",
      "до 30-эт",
      "до 31-эт",
      "до 32-эт",
      "до 33-эт",
      "до 34-эт",
      "до 35-эт",
      "до 36-эт",
      "до 37-эт",
      "до 38-эт",
      "до 39-эт",
      "до 40-эт",
    ];

    return { floorFromComboList, floorToComboList };
  },
});
</script>
