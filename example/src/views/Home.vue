<template>
    <div class="home">
        <HuaButton @click="handleClick">确认</HuaButton>
        <HuaLink @click="handleLinkClick">HuaLink</HuaLink>
        <HuaCheckbox></HuaCheckbox>
        <br />
        <div class="calendarBox">
            <HuaCalendar :disabledDate="isDisabled" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            today: null,
        }
    },
    created() {
        const date = new Date();
        const today = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        this.today = +new Date(today)
    },
    methods: {
        handleClick() {
            console.log(123)
        },
        handleLinkClick() {
            console.log(234)
        },
        isDisabled(date) {
            console.log('date', date)
            const current = +new Date(date);
            return this.today < current
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