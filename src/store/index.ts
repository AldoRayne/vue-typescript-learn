import { createStore } from "vuex";

import rent from "./modules/rent";
import sale from "./modules/sale";

export default createStore({
  modules: {
    rent,
    sale,
  },
});
