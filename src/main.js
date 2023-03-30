import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './routes';
import { createPinia } from 'pinia';

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app');
