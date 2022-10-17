import { createStore } from "vuex";

import rent from "./modules/rent";

export default createStore({
  modules: {
    rent,
  },
});
