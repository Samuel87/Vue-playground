export default () => {
    // fix delimiter conflicts with liquid tags
    // Vue.options.delimiters = ['<%', '%>'];

    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
        },
    });
};
