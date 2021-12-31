import Vue from 'vue';
import HuaUI from 'hua-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'hua-ui/packages/theme-chalk/src/index.scss';

Vue.use(HuaUI)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
