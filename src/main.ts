import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "@/global/style.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUpShortWide,
  faArrowDownShortWide,
  faXmark,
  faSpinner,
  faGauge,
  faBars,
  faHouse,
  faUser,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faArrowUpShortWide,
  faArrowDownShortWide,
  faXmark,
  faSpinner,
  faGauge,
  faBars,
  faHouse,
  faUser,
  faDatabase
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
