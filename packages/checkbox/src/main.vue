<template>
    <label
        class="hua-checkbox"
        :class="[
            border && checkboxSize ? 'hua-checkbox--' + checkboxSize : '',
            { 'is-disabled': isDisabled },
            { 'is-bordered': border },
            { 'is-checked': isChecked }
        ]"
    >
    </label>
</template>

<script>
export default {
    name: 'HuaCheckbox',
    props: {
        value: {},
        size: String,
        border: Boolean
    },
    data() {
        return {};
    },
    computed: {
        isChecked() {},
        isDisabled() {},
        checkboxSize() {
            return 'medium/small/mini'.split('/').includes(this.size)
                ? this.size
                : 'medium';
        },
        isGroup() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'HuaCheckboxGroup') {
                    parent = parent.$parent;
                } else {
                    // this._checkboxGroup = parent;
                    return true;
                }
            }
            return false;
        }
    }
};
</script>
<style lang="scss" scoped></style>
