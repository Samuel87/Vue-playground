import Vue from 'vue';
import VueRouter from 'vue-router';

import Intro from '@/templates/Intro';
import Todo from '@/templates/Todo';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'intro',
        component: Intro
    },
    {
        path: '/todo',
        name: 'todo',
        component: Todo
    },
];

export default new VueRouter({
    base: __dirname,
    // base: __dirname + '/Vue/',
    routes,
});
