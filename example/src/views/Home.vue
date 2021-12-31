<template>
    <div class="home">
        <HuaButton @click="handleClick">确认</HuaButton>
        <HuaLink @click="handleLinkClick">HuaLink</HuaLink>
        <HuaCheckbox></HuaCheckbox>
        <br />
        <div class="calendarBox">
            <HuaCalendar />
        </div>
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
<style lang="scss" scoped>
.calendarBox{
    width: fit-content;
    margin: 20px auto 0;
}
</style>