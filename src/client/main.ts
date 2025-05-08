import { createApp } from "vue";

import App from "./views/App.vue";
import store from "./store/index.ts";
import router from "./router";
import "./style.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
