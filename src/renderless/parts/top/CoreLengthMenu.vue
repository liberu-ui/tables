<script>
export default {
    name: 'CoreLengthMenu',

    inject: ['fetch', 'i18n', 'state'],

    computed: {
        options() {
            return this.state.template.lengthMenu.map(value => ({ value }));
        },
    },

    methods: {
        update(value) {
            this.state.meta.length = value;
            this.fetch();
        },
    },

    render() {
        return this.$slots.default({
            bindings: {
                disableClear: true,
                i18n: this.i18n,
                label: 'value',
                options: this.options,
                trackBy: 'value',
                modelValue: this.state.meta.length,
            },
            events: {
                'update:modelValue': this.update,
            },
        });
    },
};
</script>
