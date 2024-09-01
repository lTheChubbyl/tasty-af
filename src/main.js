import "./assets/css/main.css";

import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseHalfHero from "./components/ui/BaseHalfHero.vue";
import BaseInput from "./components/ui/BaseInput.vue";

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.component("base-button", BaseButton);
app.component("base-half-hero", BaseHalfHero);
app.component("base-input", BaseInput);

app.mount("#app");
