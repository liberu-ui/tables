<template>
    <core-style-selector>
        <template #default="{ bindings, events }">
            <vue-select class="style-selector"
                :class="$attrs.class"
                v-bind="bindings"
                v-on="events">
                <template #selection>
                    <div class="is-flex is-align-items-center">
                        <span class="icon">
                            <fa icon="table"/>
                        </span>
                    </div>
                </template>
            </vue-select>
        </template>
    </core-style-selector>
</template>

<script>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { VueSelect } from '@liberu-ui/select/bulma';
import CoreStyleSelector from '../../../renderless/parts/top/CoreStyleSelector.vue';

library.add(faTable);

export default {
    name: 'StyleSelector',

    components: { CoreStyleSelector, Fa, VueSelect },
};
</script>

<style lang="scss">
    .vue-table .style-selector .dropdown {
        width: unset;

        .icon:first-child:last-child {
            margin-left: unset;
            margin-right: unset;
        }

        .dropdown-menu {
            width: unset;
        }
    }

    .dropdown.vue-dropdown .dropdown-trigger .button.input {
        min-height: 34px;
    }
</style>
