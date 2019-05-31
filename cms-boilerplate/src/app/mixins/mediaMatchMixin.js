import { mq, checkMediaWidth } from '@/util/helpers';

export default {
    data: () => ({
        isHandset: false,
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
                this.isHandset = matches;
            });
        },
    },
};
