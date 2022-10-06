<template>
  <div class="combobox" v-click-outside="comboListHide">
    <ul v-if="chosenItems.length" class="combobox__chosen">
      <li
        v-for="(item, index) in chosenItems"
        :key="index"
        @click="removeComboItem(item)"
        class="combobox__chosen__item"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" class="chosen-icon" />
        {{ item }}
      </li>
    </ul>
    <div class="combobox__input-wrapper">
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
    <ul v-show="comboListStatus" class="combobox__list">
      <li
        v-for="(item, index) in comboList"
        ref="comboElements"
        :key="index"
        @click="choseComboItem(item)"
        class="combobox__list__item"
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
          ? item.classList.add("added")
          : item.classList.remove("added");
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
  position: relative;

  &__list {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 190px;
    background: #fff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
    list-style-type: none;
    overflow-y: auto;
    z-index: 1;

    &__item {
      padding: 6px 12px;
      text-align: left;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: #3c8dbc;
      }

      &.added:not(:hover) {
        background: #ddd;
      }
    }
  }

  &__input-wrapper {
    position: relative;

    &:deep input {
      padding-right: 20px;
    }
  }

  &__chosen {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;

    &__item {
      margin: 0 5px 5px 0;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 12px;
      background: #3c8dbc;
      border: 1px solid #aaa;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}

.chosen-icon {
  margin-right: 5px;
  opacity: 0.7;
}

.clear-icon {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
