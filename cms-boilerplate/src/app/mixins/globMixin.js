import mediaMatchMixin from '@/mixins/mediaMatchMixin';

// in mixins data and methods prefixed with $_ are proxied to avoid conflicts,
// but can be accessed by calling with this.$data

export default {
    mixins: [mediaMatchMixin],
    components: {
        // global components here
    },
};
