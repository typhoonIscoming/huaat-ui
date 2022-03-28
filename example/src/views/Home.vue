<template>
    <div class="home">
        <HuaButton @click="handleClick">确认</HuaButton>
        <HuaLink @click="handleLinkClick">HuaLink</HuaLink>
        <HuaCheckbox></HuaCheckbox>
        <br />
        <div class="calendarBox">
            <span @click="sundayStart = !sundayStart">切换显示</span>
            <HuaCalendar
                v-model="start"
                :sundayStart="sundayStart"
                :disabledDate="isDisabled"
            />
        </div>
        <div class="calendarRange calendarBox">
            <HuaCalendarRange v-model="rangeDate" @onRange="handleRange" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            today: null,
            start: '',
            sundayStart: true,
            a: 1,
            b: 2,
            rangeDate: ['2022-03-10', '2022-03-27'],
        }
    },
    created() {
        const date = new Date();
        const today = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        this.today = +new Date(today);
        [this.a, this.b] = [this.b, this.a];
        console.log(this.a, this.b)
    },
    methods: {
        handleClick() {
            console.log(123)
        },
        handleLinkClick() {
            console.log(234)
        },
        isDisabled(date) {
            const current = +new Date(date);
            return this.today < current
        },
        handleRange(data) {
            const { start, end } = data;
            this.rangeDate = [start, end];
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