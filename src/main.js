import { createApp } from 'vue';
import VueTablerIcons from 'vue-tabler-icons';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './index.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueTablerIcons);
app.mount('#app');
