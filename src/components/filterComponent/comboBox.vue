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
    <div class="relative">
      <v-input
        ref="searchInput"
        :placeholder="placeholder"
        v-model="inputValue"
        @click="comboListShow"
      />
      <span
        v-if="chosenItems.length"
        @click="comboboxClear"
        class="combobox__clear"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" class="clear-icon" />
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

import vInput from "@/components/ui/vInput.vue";

export default defineComponent({
  directives: {
    clickOutside: vClickOutside.directive,
  },

  components: {
    vInput,
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
    const searchInput = ref<InstanceType<typeof vInput>>();

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
          ? item.classList.add("text-white bg-slate-300")
          : item.classList.remove("text-white bg-slate-300");
      });
    }

    function comboListShow(): void {
      comboListStatus.value = true;
    }

    function comboListHide(): void {
      comboListStatus.value = false;
    }

    function comboboxClear(): void {
      if (searchInput.value?.inputValue) searchInput.value.inputValue = "";

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
      searchInput,
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

<style lang="scss" scoped>
.combobox {
  &__input-wrapper {
    &:deep input {
      padding-right: 20px;
    }
  }

  .clear-icon {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
