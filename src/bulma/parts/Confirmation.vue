<template>
    <modal @close="closeConfirmation">
        <template #default="{ close }">
            <div class="box">
                <h5 class="subtitle is-5">
                    {{ i18n(state.action.button.message || "Are you sure?") }}
                </h5>
                <hr>
                <div class="level">
                    <div class="level-left"/>
                    <div class="level-right">
                        <div class="level-item">
                            <button class="button is-outlined"
                                @click="close">
                                {{ i18n("Cancel") }}
                            </button>
                            <button class="button is-danger ml-1"
                                v-focus
                                @click="doButtonAction(); close();">
                                {{ i18n("Yes") }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </modal>
</template>

<script>
import { focus } from '@liberu-ui/directives';
import { Modal } from '@liberu-ui/modal/bulma';

export default {
    name: 'Confirmation',

    components: { Modal },

    directives: { focus },

    inject: ['closeConfirmation', 'doButtonAction', 'i18n', 'state'],
};
</script>
