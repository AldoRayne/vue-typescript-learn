import axios from "axios";

import { Commit } from "vuex";

import { Rents } from "@/types/rents";

export default {
  state: {
    sales: {} as Rents,
  },
  getters: {
    sales: (state: { sales: Rents }) => {
      return state.sales;
    },
  },
  mutations: {
    getSales(state: { sales: Rents }, payload: Rents) {
      state.sales = payload;
    },
  },
  actions: {
    async getSales({ commit }: { commit: Commit }) {
      const { data } = await axios.get(
        `https://baza-lider.info/api/v1/?get=estate&format=json&type=sale&region=1,2&access_token=re5lSc7y333hXhWTZWulOPiJ7ZBbdwVUWdvQd0XGyx9qu8THAeyQDlBT2yIfJcKd`
      );

      commit("getSales", data);
    },
  },
};
