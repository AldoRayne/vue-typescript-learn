<template>
  <filter-block>
    <combo-box placeholder="Тип" :comboItems="typesComboList" />
    <sort-block name="sort-by-type" />
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
    const typesComboList = [
      "часть дома",
      "участок под жилье",
      "участок",
      "торговая площадь",
      "таунхауc",
      "стоянка",
      "склад",
      "сельхоз участок",
      "салон",
      "ресторан",
      "помещение",
      "парковка",
      "паркинг",
      "офис",
      "объект спорта",
      "объект промышленности",
      "объект производства",
      "объект питания",
      "объект отдыха",
      "объект мероприятий",
      "объект красоты",
      "объект здоровья",
      "объект автосервиса",
      "недострой",
      "машиноместо",
      "маф",
      "магазин",
      "коттедж",
      "комната",
      "коммерческий участок",
      "койко-место",
      "квартира в новострое",
      "квартира",
      "кафе",
      "здание",
      "зал",
      "дуплекс",
      "другое",
      "дом (новострой)",
      "дом",
      "дачный участок",
      "дача (новострой)",
      "дача",
      "гостинка",
      "гараж",
      "бар",
    ];

    return { typesComboList };
  },
});
</script>
