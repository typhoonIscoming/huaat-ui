<template>
    <button
        :autofocus="autofocus"
        :class="[
            'hua-button--' + buttonType,
            buttonSize ? 'el-button--' + buttonSize : '',
            {
                'is-disabled': disabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle
            }
        ]"
        @click="handleClick"
    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: "HuaButton",
    props: {
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean,
        size: String,
        type: String,
    },
    computed: {
        buttonSize() {
            return ['medium','small', 'mini'].includes(this.size) ? this.size : 'medium';
        },
        buttonType() {
            return 'primary/success/warning/danger/info/text'.split('/').includes(this.type) ? this.type : 'primary';
        },
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt)
        },
    },
};
</script>
<style lang="scss" scoped></style>
