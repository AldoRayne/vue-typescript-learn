<template>
  <section>
    <data-base-header />
    <div class="w-full overflow-hidden">
      <table class="border">
        <thead>
          <th>#</th>
          <th>Адрес</th>
          <th>
            <v-dropdown>
              <template #button-name>Тип</template>
              <template #content>
                <filter-by-type />
              </template>
            </v-dropdown>
          </th>
          <th>
            <v-dropdown>
              <template #button-name>Ком</template>
              <template #content>
                <filter-by-room />
              </template>
            </v-dropdown>
          </th>
          <th>
            <v-dropdown>
              <template #button-name>Этаж</template>
              <template #content>
                <filter-by-floor />
              </template>
            </v-dropdown>
          </th>
          <th>Площ</th>
          <th>Уч</th>
          <th>Цена</th>
          <th>Телефон</th>
          <th>Дата</th>
          <th>Прозвон</th>
          <th>Фото</th>
          <th>Метка</th>
          <th>Доп</th>
        </thead>
        <tr v-for="(rent, index) in rents.items" :key="rent.id">
          <data-base-row :rent="rent" :index="index" />
        </tr>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import vDropdown from "@/components/ui/vDropdown.vue";
import DataBaseHeader from "@/components/dataBaseComponent/dataBaseHeader.vue";
import DataBaseRow from "@/components/dataBaseComponent/dataBaseRow.vue";
import FilterByType from "@/components/dataBaseComponent/filterByType.vue";
import FilterByRoom from "@/components/dataBaseComponent/filterByRoom.vue";
import FilterByFloor from "@/components/dataBaseComponent/filterByFloor.vue";

import { Rents } from "@/types/rents";

export default defineComponent({
  components: {
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
