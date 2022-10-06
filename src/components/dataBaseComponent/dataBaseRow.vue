<template>
  <v-table-data>
    {{ realIndex }}
  </v-table-data>
  <v-table-data left wrap>
    <div>
      <b>{{ rent.district }}</b>
    </div>
    <div>{{ rent.city }}</div>
    <div v-if="rent.street">{{ rent.street }}, {{ rent.house_number }}</div>
  </v-table-data>
  <v-table-data>
    {{ rent.layout }}
  </v-table-data>
  <v-table-data>
    {{ rent.rooms }}
  </v-table-data>
  <v-table-data>
    {{ formattedFloors }}
  </v-table-data>
  <v-table-data>
    {{ formattedLivingSpace }}
  </v-table-data>
  <v-table-data>
    {{ formattedArea }}
  </v-table-data>
  <v-table-data>
    {{ rent.price }}
    <template v-if="isPriceExist">{{ rent.currency }}</template>
  </v-table-data>
  <v-table-data>
    <a :href="`tel:${rent.phone_number}`">{{ rent.phone_number }}</a>
  </v-table-data>
  <v-table-data v-html="formattedDate" />
  <v-table-data></v-table-data>
  <v-table-data></v-table-data>
  <v-table-data></v-table-data>
  <v-table-data></v-table-data>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

import vTableData from "@/components/ui/vTable/vTableData.vue";

import { RentItem } from "@/types/rents";

import emptyValueToDash from "@/functions/emptyValueToDash";

import { format, differenceInDays } from "date-fns";

export default defineComponent({
  components: {
    vTableData,
  },

  props: {
    index: {
      type: Number,
      required: true,
    },

    rent: {
      type: Object as PropType<RentItem>,
      required: true,
    },
  },

  setup(props) {
    const realIndex = computed<number>(() => props.index + 1);

    const formattedFloors = computed<string>(
      () => `${emptyValueToDash(props.rent.floor)} /
      ${emptyValueToDash(props.rent.floor)}`
    );

    const formattedLivingSpace = computed<string>(
      () => `${emptyValueToDash(props.rent.total)} /
      ${emptyValueToDash(props.rent.living)} /
      ${emptyValueToDash(props.rent.kitchen)}`
    );

    const isPriceExist = computed<boolean>(() => props.rent.price !== "-");

    const formattedArea = computed<string>(() =>
      emptyValueToDash(props.rent.area)
    );

    const formattedDate = computed<string>(() => {
      const dateSplit = props.rent.dt_update.split(" ");

      const [rentDate] = dateSplit;
      const rentTime = dateSplit.pop();
      const currentDate = format(new Date(), "yyyy-MM-dd");

      if (currentDate !== rentDate) {
        const dateDiff = differenceInDays(
          new Date(currentDate),
          new Date(rentDate)
        );

        return dateDiff > 1 ? rentDate : `Вчера, <br> ${rentTime}`;
      }

      return `Сегодня, <br> ${rentTime}`;
    });

    return {
      realIndex,
      formattedFloors,
      formattedLivingSpace,
      isPriceExist,
      formattedArea,
      formattedDate,
    };
  },
});
</script>
