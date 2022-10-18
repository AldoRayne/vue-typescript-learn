<template>
  <td class="p-[5px] border text-center whitespace-nowrap">
    {{ realIndex }}
  </td>
  <td class="p-[5px] border text-left whitespace-normal">
    <div>
      <b>{{ rent.district }}</b>
    </div>
    <div>{{ rent.city }}</div>
    <div v-if="rent.street">{{ rent.street }}, {{ rent.house_number }}</div>
  </td>
  <td class="p-[5px] border text-center whitespace-nowrap">
    {{ rent.layout }}
  </td>
  <td class="p-[5px] border text-center whitespace-nowrap">
    {{ rent.rooms }}
  </td>
  <td class="p-[5px] border text-center whitespace-nowrap">
    {{ formattedFloors }}
  </td>
  <td class="p-[5px] border text-center whitespace-nowrap">
    {{ formattedLivingSpace }}
  </td>
  <td class="p-[5px] border text-center whitespace-nowrap">
    {{ formattedArea }}
  </td>
  <td class="p-[5px] border text-center whitespace-nowrap">
    {{ rent.price }}
    <template v-if="isPriceExist">{{ rent.currency }}</template>
  </td>
  <td class="p-[5px] border text-center whitespace-nowrap">
    <a :href="`tel:${rent.phone_number}`">{{ rent.phone_number }}</a>
  </td>
  <td v-html="formattedDate" />
  <td class="p-[5px] border text-center whitespace-nowrap"></td>
  <td class="p-[5px] border text-center whitespace-nowrap"></td>
  <td class="p-[5px] border text-center whitespace-nowrap"></td>
  <td class="p-[5px] border text-center whitespace-nowrap"></td>
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
