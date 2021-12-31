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
                <div class="hua-calendar-body">
                    <table class="hua-calendar-table">
                        <thead>
                            <tr>
                                <th
                                    v-for="item in week"
                                    :key="item"
                                    class="hua-calendar-column-header">
                                    <span class="hua-calendar-column-header-inner">{{ item }}</span>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div class="hua-calendar-footer"></div>
        </div>
    </div>
</template>

<script>
const zhMonth = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
const enMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const enWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const zhWeek = ['日', '一', '二', '三', '四', '五', '六'];

export default {
    name: 'HuaCalendar',
    props: {
        showDateInput: { // 是否显示顶部输入框
            type: Boolean,
            default: true,
        },
        lang: {
            type: String,
            default: 'zh',
        },
        firstDayOfWeek: { // 一周第一天是周一，默认是周日
            type: Boolean,
            default: true,
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
    computed: {
        week() {
            let temp = enWeek;
            if (this.lang === 'zh') {
                temp = zhWeek
            }
            if (this.firstDayOfWeek) {
                const monday = temp[0];
                temp = temp.slice(1)
                temp.push(monday)
            }
            return temp
        },
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
