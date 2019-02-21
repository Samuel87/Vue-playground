import Vue from 'vue';
import Vuex from 'vuex';

import exampleModule from './modules/exampleModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        exampleModule,
    },
});

// store.state.exampleModule // -> `exampleModule`'s state
