import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

const app = createApp(App)

app.use(bootstrap);
app.use(router)

app.mount('#app')
