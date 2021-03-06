import { createApp } from "vue";
import App from  "./App.vue";

import { router } from "./router/index"
import { store } from "./store";

const app = createApp(App);

//使用router

app.use(router);

//测试提交
app.use(store);
app.mount("#app");
