<template>
    <core-dropdown-actions>
        <template #default="{ buttons, disabled, controlBindings,
            controlEvents, hasSelection }">
             <dropdown class="dropdown-actions is-right"
                ref="dropdown"
                :disabled="disabled">
                <template #label>
                    <span class="icon is-small">
                        <fa icon="cogs"/>
                    </span>
                </template>
                <template #items>
                    <dropdown-item v-for="button in buttons"
                        :key="button.name"
                        @mouseup="$refs.dropdown.hide()">
                        <control class="is-fullwidth"
                            v-bind="controlBindings(button)"
                            :key="`${button.label}-${button.icon}`"
                            :button="button"
                            v-on="controlEvents(button)"
                            v-if="!button.selection"/>
                        <control class="is-fullwidth"
                            v-bind="controlBindings(button)"
                            :key="`${button.label}-${button.icon}`"
                            :button="button"
                            v-on="controlEvents(button)"
                            v-else-if="hasSelection()"/>
                    </dropdown-item>
                </template>
            </dropdown>
        </template>
    </core-dropdown-actions>
</template>

<script>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownItem } from '@liberu-ui/dropdown/bulma';
import CoreDropdownActions from '../../../renderless/parts/top/CoreDropdownActions.vue';
import Control from './Control.vue';

library.add(faCogs);

export default {
    name: 'DropdownActions',

    components: {
        Control,
        CoreDropdownActions,
        Dropdown,
        DropdownItem,
        Fa,
    },
};
</script>

<style lang="scss">
    .vue-table .dropdown.dropdown-actions {
        width: unset;

        .dropdown-menu {
            width: unset;

            .dropdown-item {
                width: 200px;
                padding: 0;
            }
        }
    }
</style>
