import Vue from 'vue';
import { install } from 'hua-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'hua-ui/lib/styles/index.css';

install(Vue)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
