<template>
  <section>
    <data-base-header />
    <v-table>
      <template #thead>
        <v-table-head>#</v-table-head>
        <v-table-head>Адрес</v-table-head>
        <v-table-head>
          <v-dropdown>
            <template #button-name>Тип</template>
            <template #content>
              <filter-by-type />
            </template>
          </v-dropdown>
        </v-table-head>
        <v-table-head>
          <v-dropdown>
            <template #button-name>Ком</template>
            <template #content>
              <filter-by-room />
            </template>
          </v-dropdown>
        </v-table-head>
        <v-table-head>
          <v-dropdown>
            <template #button-name>Этаж</template>
            <template #content>
              <filter-by-floor />
            </template>
          </v-dropdown>
        </v-table-head>
        <v-table-head>Площ</v-table-head>
        <v-table-head>Уч</v-table-head>
        <v-table-head>Цена</v-table-head>
        <v-table-head>Телефон</v-table-head>
        <v-table-head>Дата</v-table-head>
        <v-table-head>Прозвон</v-table-head>
        <v-table-head>Фото</v-table-head>
        <v-table-head>Метка</v-table-head>
        <v-table-head>Доп</v-table-head>
      </template>
      <template #tbody>
        <v-table-row v-for="(rent, index) in rents.items" :key="rent.id">
          <data-base-row :rent="rent" :index="index" />
        </v-table-row>
      </template>
    </v-table>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import vTable from "@/components/ui/vTable/vTable.vue";
import vTableHead from "@/components/ui/vTable/vTableHead.vue";
import vTableRow from "@/components/ui/vTable/vTableRow.vue";
import vDropdown from "@/components/ui/vDropdown.vue";
import DataBaseHeader from "@/components/dataBaseComponent/dataBaseHeader.vue";
import DataBaseRow from "@/components/dataBaseComponent/dataBaseRow.vue";
import FilterByType from "@/components/dataBaseComponent/filterByType.vue";
import FilterByRoom from "@/components/dataBaseComponent/filterByRoom.vue";
import FilterByFloor from "@/components/dataBaseComponent/filterByFloor.vue";

import { Rents } from "@/types/rents";

export default defineComponent({
  components: {
    vTable,
    vTableHead,
    vTableRow,
    vDropdown,
    DataBaseHeader,
    DataBaseRow,
    FilterByType,
    FilterByRoom,
    FilterByFloor,
  },

  props: {
    rents: {
      type: Object as PropType<Rents>,
      required: true,
    },
  },
});
</script>
