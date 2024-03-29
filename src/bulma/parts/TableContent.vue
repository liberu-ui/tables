<template>
    <top-controls v-bind="$attrs">
        <template #[slot]="props"
            v-for="slot in controlSlots()">
            <slot :name="slot"
                v-bind="props"/>
        </template>
    </top-controls>
    <div class="table-responsive"
        v-responsive="state.template.responsive">
        <table class="table is-fullwidth is-marginless"
            :class="state.template.style"
            :id="id"
            v-if="hasContent()">
            <table-header ref="header"/>
            <table-body v-bind="$attrs">
                <template #[slot]="props"
                    v-for="slot in bodySlots()">
                    <slot :name="slot"
                        v-bind="props"/>
                </template>
            </table-body>
            <table-footer v-if="hasFooter()">
                <template #[customTotal]="props"
                    v-for="customTotal in customTotals()">
                    <slot :name="customTotal"
                        v-bind="props"/>
                </template>
            </table-footer>
        </table>
        <loader v-if="state.meta.loading === true"/>
    </div>
    <bottom-controls v-bind="$attrs"
        v-if="hasContent()"/>
    <div class="has-text-centered no-records-found"
        v-if="isEmpty()">
        {{ i18n('No records were found') }}
    </div>
    <confirmation v-if="state.confirmation"/>
</template>

<script>
import Loader from '@liberu-ui/loader/bulma';
import TopControls from './top/Controls.vue';
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import TableFooter from './TableFooter.vue';
import BottomControls from './bottom/Controls.vue';
import Confirmation from './Confirmation.vue';
import vResponsive from '../responsive/vResponsive';

export default {
    name: 'TableContent',

    directives: { responsive: vResponsive },

    components: {
        TopControls,
        TableHeader,
        TableBody,
        TableFooter,
        Loader,
        BottomControls,
        Confirmation,
    },

    inject: [
        'bodySlots', 'controlSlots', 'customTotals', 'hasContent',
        'hasFooter', 'i18n', 'id', 'isEmpty', 'state', 'visibleColumns',
    ],

    inheritAttrs: false,

    computed: {
        columns() {
            return this.visibleColumns();
        },
    },
};
</script>

<style lang="scss">
    .vue-table {
        .table-responsive {
            width: 100%;
            overflow-x: auto;
            -ms-overflow-style: none;

            overflow: -moz-scrollbars-none;

            &::-webkit-scrollbar {
                display: none;
            }

            .table {
                font-size: 0.9em;
                td, th {
                    vertical-align: middle;
                }
            }
        }
        .no-records-found {
            padding: 1em;
        }
    }
</style>
