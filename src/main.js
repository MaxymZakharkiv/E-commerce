import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import MInput from '@/components/ui-kit/MInput';

const app = createApp(App);

app.component('MInput', MInput);

app.use(store).use(router).mount('#app');
