import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App).use(router);
app.mount("#app");


// 卸载应用
//@ts-ignore
window.unmount = () => {
  app.unmount();
};
