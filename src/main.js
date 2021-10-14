import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/tailwind.css";
import "./font/stylesheet.css";
createApp(App)
  .mount("#app")
  .use(AOS.init());
