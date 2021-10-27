<template>
    <button
        :autofocus="autofocus"
        :class="[
            type ? 'hua-button--' + type : '',
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
    },
    computed: {
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt)
        },
    },
};
</script>
<style lang="scss" scoped></style>
