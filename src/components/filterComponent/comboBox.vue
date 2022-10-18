<template>
  <div class="relative" v-click-outside="comboListHide">
    <ul v-if="chosenItems.length" class="flex flex-wrap">
      <li
        v-for="(item, index) in chosenItems"
        :key="index"
        @click="removeComboItem(item)"
        class="mr-[5px] mb-[5px] px-[10px] py-[5px] flex items-center text-white text-[12px] bg-light-blue border border-zinc-400 rounded-[4px] cursor-pointer"
      >
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="mr-[5px] opacity-70"
        />
        {{ item }}
      </li>
    </ul>
    <div class="relative pr-[20px] border border-light-blue">
      <input
        type="text"
        :placeholder="placeholder"
        v-model="inputValue"
        @click="comboListShow"
        class="p-[5px] w-full border-light-blue box-border focus-visible:outline-0 border-0"
      />
      <span
        v-if="chosenItems.length"
        @click="comboboxClear"
        class="absolute top-1/2 right-[5px] translate-y-[-50%] cursor-pointer"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </span>
    </div>
    <ul
      v-show="comboListStatus"
      class="absolute top-full left-0 w-full max-h-[190px] bg-white shadow-default overflow-y-auto z-10"
    >
      <li
        v-for="(item, index) in comboList"
        ref="comboElements"
        :key="index"
        @click="choseComboItem(item)"
        class="px-[12px] py-[6px] text-left cursor-pointer hover:text-white hover:bg-light-blue"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, watch, nextTick } from "vue";

import vClickOutside from "click-outside-vue3";

export default defineComponent({
  directives: {
    clickOutside: vClickOutside.directive,
  },

  props: {
    placeholder: {
      type: String,
      default: null,
    },

    comboItems: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },

  setup(props) {
    const inputValue = ref("");
    const comboListStatus = ref(false);
    const chosenItems = ref([] as string[]);
    const comboElements = ref([] as HTMLElement[]);

    const comboList = computed<string[]>(() =>
      props.comboItems.filter((item) => item.includes(inputValue.value))
    );

    watch([comboList, chosenItems], async () => {
      await nextTick();
      chosenItemsColoring();
    });

    function chosenItemsColoring(): void {
      comboElements.value.forEach((item) => {
        item.textContent && chosenItems.value.includes(item.textContent)
          ? item.classList.add("text-white", "bg-slate-400")
          : item.classList.remove("text-white", "bg-slate-400");
      });
    }

    function comboListShow(): void {
      comboListStatus.value = true;
    }

    function comboListHide(): void {
      comboListStatus.value = false;
    }

    function comboboxClear(): void {
      inputValue.value = "";
      chosenItems.value = [];
    }

    function removeComboItem(chosenItem: string): void {
      chosenItems.value = chosenItems.value.filter(
        (item) => item !== chosenItem
      );

      comboListHide();
    }

    function choseComboItem(chosenItem: string): void {
      const itemIsExist = !!chosenItems.value.find(
        (item) => item === chosenItem
      );

      if (itemIsExist) {
        removeComboItem(chosenItem);
      } else {
        chosenItems.value = [...chosenItems.value, chosenItem];

        comboListHide();
      }
    }

    return {
      inputValue,
      comboListStatus,
      chosenItems,
      comboElements,
      comboList,
      comboListShow,
      comboListHide,
      comboboxClear,
      removeComboItem,
      choseComboItem,
    };
  },
});
</script>
