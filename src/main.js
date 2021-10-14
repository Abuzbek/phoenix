import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/tailwind.css";
import "./font/stylesheet.css";
const app = createApp(App);
app.mount("#app");
app.use(AOS.init());
