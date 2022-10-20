import axios from "axios";

import { Commit } from "vuex";

import { Rents } from "@/types/rents";
import { PayloadData } from "@/types/storeData";

export default {
  state: {
    rents: {} as Rents,
    sales: {} as Rents,
  },
  getters: {
    rents: (state: { rents: Rents }) => {
      return state.rents;
    },
    sales: (state: { sales: Rents }) => {
      return state.sales;
    },
  },
  mutations: {
    getRents(state: { rents: Rents }, payload: Rents) {
      state.rents = payload;
    },
    getSales(state: { sales: Rents }, payload: Rents) {
      state.sales = payload;
    },
  },
  actions: {
    async getRents({ commit }: { commit: Commit }, payload: PayloadData) {
      try {
        const { data } = await axios.get<Rents>(
          `https://baza-lider.info/api/v1/?get=estate&format=json&type=${payload.dispatchType}&region=1,2&access_token=${process.env.VUE_APP_TOKEN}`
        );

        commit(`${payload.dispatchName}`, data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
