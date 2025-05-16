import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const pinia = createPinia(); // Inisialisasi pinia

createApp(App)
  .use(router)   // Menambahkan Vue Router
  .use(pinia)    // Menambahkan Pinia
  .mount('#app');
