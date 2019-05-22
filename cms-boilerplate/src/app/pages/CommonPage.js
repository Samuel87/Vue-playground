import globMixin from '@/mixins/globMixin';

export default () => {
    // fix delimiter conflicts with liquid tags
    // Vue.options.delimiters = ['<%', '%>'];

    new Vue({
        el: '#app',
        mixins: [globMixin],
        data: {
            message: 'Hello Vue!',
        },
    });
};
