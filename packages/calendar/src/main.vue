<template>
    <div class="hua-calendar">
        <div class="hua-calendar-panel">
            <!--日历头部-->
            <div class="hua-calendar-date-panel">
                <div class="hua-calendar-input-wrap" v-if="showDateInput">
                    <div class="hua-calendar-date-input-wrap">
                        <input class="hua-calendar-input" v-model="value">
                    </div>
                    <span class="hua-calendar-clear-btn"></span>
                </div>
            </div>
            <!--日历日期部分-->
            <div class="hua-calendar-date-panel">
                <div class="hua-calendar-header">
                    <div style="position:relative;">
                        <span class="hua-calendar-prev-year-btn"></span>
                        <span class="hua-calendar-prev-month-btn"></span>
                        <span class="hua-calendar-my-select">
                            <span class="hua-calendar-month-select">{{ month }}</span>
                            <span class="hua-calendar-year-select">{{ year }}</span>
                        </span>
                        <span class="hua-calendar-next-month-btn"></span>
                        <span class="hua-calendar-next-year-btn"></span>
                    </div>
                </div>
            </div>
            <div class="hua-calendar-footer"></div>
        </div>
    </div>
</template>

<script>
const zhMonth = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',];
const enMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',];
export default {
    name: 'HuaCalendar',
    props: {
        textTop: {
            type: Array,
            default: () => ['日', '一', '二', '三', '四', '五', '六'],
        },
        showDateInput: { // 是否显示顶部输入框
            type: Boolean,
            default: true,
        },
        lang: {
            type: String,
            default: 'zh',
        },
    },
    data() {
        return {
            value: '',
            month: '',
            year: '',
            today: '',
        }
    },
    created() {
        this.initDate()
    },
    methods: {
        initDate() {
            const date = new Date();
            let month = zhMonth;
            if (this.lang === 'en') {
                month = enMonth
            }
            this.month = enMonth[date.getMonth()];
            this.year = date.getFullYear();
        },
    },
}
</script>
<style lang='scss' scoped>
</style>
