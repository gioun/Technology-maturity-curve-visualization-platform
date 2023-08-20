import { createApp } from 'vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';



import router from './DataCenteredTech/router/index.js';


import App from './App.vue';



const app = createApp(App);


app.use(router);


app.use(Antd);
app.mount('#app');
