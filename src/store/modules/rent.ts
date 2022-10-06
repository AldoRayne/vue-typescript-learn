import axios from "axios";

import { Commit } from "vuex";

import { Rents } from "@/types/rents";

export default {
  state: {
    rents: {} as Rents,
  },
  getters: {
    rents: (state: { rents: Rents }) => {
      return state.rents;
    },
  },
  mutations: {
    getRents(state: { rents: Rents }, payload: Rents) {
      state.rents = payload;
    },
  },
  actions: {
    async getRents({ commit }: { commit: Commit }) {
      const { data } = await axios.get(
        `https://baza-lider.info/api/v1/?get=estate&format=json&type=rent&region=1,2&access_token=re5lSc7y333hXhWTZWulOPiJ7ZBbdwVUWdvQd0XGyx9qu8THAeyQDlBT2yIfJcKd`
      );

      commit("getRents", data);
    },
  },
};
