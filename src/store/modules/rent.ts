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
      try {
        const { data } = await axios.get(
          `https://baza-lider.info/api/v1/?get=estate&format=json&type=rent&region=1,2&access_token=${process.env.VUE_APP_TOKEN}`
        );

        commit("getRents", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
