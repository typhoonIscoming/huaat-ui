<template>
    <div class="home">
        <HuaButton @click="handleClick">确认</HuaButton>
        <HuaLink @click="handleLinkClick">HuaLink</HuaLink>
    </div>
</template>

<script>

export default {
    name: 'Home',
    components: {
    },
    methods: {
        handleClick() {
            console.log(123)
        },
        handleLinkClick() {
            console.log(234)
        },
    },
};
</script>
