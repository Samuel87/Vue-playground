import Vue from 'vue';
import VueResource from 'vue-resource';

import router from './router';
import store from './store';
import App from './App.vue';
import style from './assets/css/style.css'; // global style appended to head tag


Vue.use(VueResource);
// this.$http.get('/').then(response => {}, response => { console.log('error') });

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
