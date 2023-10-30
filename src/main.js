import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";
import router from "./router";

const app = createApp(App);

app.use(router);

app.use(VueGtag, {
    config: { id: "G-Z47MQ575DY" },
    appName: "Sam Ryan Portfolio",
    pageTrackerScreenviewEnabled: true,
    router,
});

app.mount("#app");
