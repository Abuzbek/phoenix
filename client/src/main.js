import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/tailwind.css";
import "./font/stylesheet.css";
import i18n from './i18n'
const app = createApp(App).use(i18n);
app.mount("#app");
app.use(AOS.init());
