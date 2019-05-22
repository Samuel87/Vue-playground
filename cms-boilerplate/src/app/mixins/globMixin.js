import { mq, checkMediaWidth } from '@/util/helpers';

// in mixins data and methods prefixed with $_ are proxied to avoid conflicts,
// but can be accessed by calling with this.$data

export default {
    data: () => ({
        isMobile: false, // we want these public so we don't proxy it
        mqSupported: true,
    }),
    mounted() {
        if (!mq) {
            this.mqSupported = false;
        } else {
            this.$_onWindowResize();

            window.addEventListener('resize', this.$_onWindowResize);
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.$_onWindowResize);
    },
    methods: {
        $_onWindowResize() {
            checkMediaWidth(mq, (matches) => {
                this.isMobile = matches;
            });
        },
    },
};
