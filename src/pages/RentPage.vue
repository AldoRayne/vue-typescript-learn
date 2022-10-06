<template>
  <v-preloader v-if="loading" />
  <DataBase v-else :rents="rents" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";

import vPreloader from "@/components/ui/vPreloader.vue";
import DataBase from "@/components/dataBaseComponent/dataBase.vue";

import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { Rents } from "@/types/rents";
import StoreData from "@/types/storeData";

import isEmptyObject from "@/functions/isEmptyObject";

export default defineComponent({
  components: {
    vPreloader,
    DataBase,
  },

  setup() {
    const store = useStore();
    const route = useRoute();

    const loading = ref(true);

    const storeData = computed<StoreData>(() => {
      return route.name === "Rent"
        ? { getterName: "rents", dispatchName: "getRents" }
        : { getterName: "sales", dispatchName: "getSales" };
    });

    const rents = computed<Rents>(() => {
      return store.getters[storeData.value.getterName];
    });

    onMounted(async () => {
      if (isEmptyObject(rents.value))
        await store.dispatch(storeData.value.dispatchName);

      loading.value = false;
    });

    return { loading, rents };
  },
});
</script>
