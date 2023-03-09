import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'bootswatch/dist/slate/bootstrap.min.css';


createApp(App).use(router).mount('#app')
