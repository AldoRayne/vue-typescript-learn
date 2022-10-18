<template>
  <td class="td">
    {{ realIndex }}
  </td>
  <td class="td-wrap">
    <div>
      <b>{{ rent.district }}</b>
    </div>
    <div>{{ rent.city }}</div>
    <div v-if="rent.street">{{ rent.street }}, {{ rent.house_number }}</div>
  </td>
  <td class="td">
    {{ rent.layout }}
  </td>
  <td class="td">
    {{ rent.rooms }}
  </td>
  <td class="td">
    {{ formattedFloors }}
  </td>
  <td class="td">
    {{ formattedLivingSpace }}
  </td>
  <td class="td">
    {{ formattedArea }}
  </td>
  <td class="td">
    {{ rent.price }}
    <template v-if="isPriceExist">{{ rent.currency }}</template>
  </td>
  <td class="td">
    <a :href="`tel:${rent.phone_number}`">{{ rent.phone_number }}</a>
  </td>
  <td v-html="formattedDate" class="td" />
  <td class="td"></td>
  <td class="td"></td>
  <td class="td"></td>
  <td class="td"></td>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

import { RentItem } from "@/types/rents";

import emptyValueToDash from "@/functions/emptyValueToDash";

import { format, differenceInDays } from "date-fns";

export default defineComponent({
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
