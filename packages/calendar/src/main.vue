<template>
    <div class="hua-calendar">
        <div class="hua-calendar-panel">
            <!--日历头部-->
            <div class="hua-calendar-date-panel">
                <div class="hua-calendar-input-wrap" v-if="showDateInput">
                    <div class="hua-calendar-date-input-wrap">
                        <input class="hua-calendar-input" v-model="inputValue">
                    </div>
                    <span class="hua-calendar-clear-btn"></span>
                </div>
            </div>
            <!--日历日期部分-->
            <div class="hua-calendar-date-panel">
                <div class="hua-calendar-header">
                    <div style="position:relative;">
                        <span class="hua-calendar-prev-year-btn"></span>
                        <span class="hua-calendar-prev-month-btn" @click="prevMonth(myDate)"></span>
                        <span class="hua-calendar-my-select">
                            <span class="hua-calendar-month-select">{{ month }}</span>
                            <span class="hua-calendar-year-select">{{ year }}</span>
                        </span>
                        <span class="hua-calendar-next-month-btn" @click="nextMonth(myDate)"></span>
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
                        <tbody class="hua-calendar-tbody">
                            <tr
                                v-for="row in rows"
                                :key="row"
                            >
                                <td
                                    v-for="index in 7"
                                    :key="index"
                                    class="hua-calendar-cell"
                                >
                                    <div
                                        class="hua-calendar-date"
                                        :class="[
                                            ...parseClass(dayList[(row - 1) * 7 + index - 1]),
                                        ]"
                                        @click="handleSelected(dayList[(row - 1) * 7 + index - 1])"
                                        @mouseover="handleHover(dayList[(row - 1) * 7 + index - 1])"
                                    >
                                        {{ dayList[(row - 1) * 7 + index - 1].id }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="hua-calendar-footer"></div>
        </div>
    </div>
</template>

<script>
import tool from './utils';
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
        sundayStart: { // 一周第一天是周一，默认是周日
            type: Boolean,
            default: true,
        },
        disabledDate: {
            type: Function,
            default: () => {},
        },
        rangeCalendar: { // 是否是选择日期范围组件
            type: Boolean,
            default: true,
        },
        value: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            inputValue: '',
            month: '',
            year: '',
            today: '',
            myDate: new Date(),
            dayList: [],
        }
    },
    computed: {
        week() {
            let temp = enWeek;
            if (this.lang === 'zh') {
                temp = zhWeek
            }
            if (this.sundayStart) {
                const monday = temp[0];
                temp = temp.slice(1)
                temp.push(monday)
            }
            return temp
        },
        rows() {
            return this.dayList.length / 7;
        },
    },
    created() {
        this.initDate();
        this.getList(this.myDate);
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
        nextMonth(date) {
            date = tool.dateFormat(date);
            this.myDate = tool.getOtherMonth(this.myDate, 'nextMonth');
            this.getList(this.myDate);
        },
        prevMonth(date) { // 上一个月
            date = tool.dateFormat(date);
            this.myDate = tool.getOtherMonth(this.myDate, 'preMonth');
            this.getList(this.myDate);
        },
        getList() { // 获取显示的月的日期列表
            let arr = tool.getMonthList(this.myDate);
            this.dayList = arr.map(item => {
                if (this.disabledDate && typeof this.disabledDate === 'function') {
                    return { ...item, disabled: !!this.disabledDate(item.date) }
                }
                return item
            });
        },
        handleHover(item) {
            console.log('===', item)
        },
        isSelected(item) { // 是否选中
            return +new Date(this.value) === +new Date(item.date);
        },
        handleSelected(item) {
            // 点击选择
            if (item.disabled) {
                return
            }
            if (item.otherMonth === 'nowMonth' && !item.dayHide) {
                this.getList(this.myDate, item.date);
            }
            if (item.otherMonth !== 'nowMonth') {
                item.otherMonth === 'preMonth'
                    ? this.prevMonth(item.date)
                    : this.nextMonth(item.date);
            }
            this.$emit('input', item.date)
        },
        parseClass(item) { // 判断当前日期有哪些类
            const classList = [];
            const { otherMonth, isToday, disabled } = item;
            if (otherMonth === 'preMonth') {
                classList.push('prevMonth')
            } else if (otherMonth === 'nextMonth') {
                classList.push('nextMonth')
            }
            if (isToday) {
                classList.push('isToday')
            }
            if (disabled) {
                classList.push('disabled')
            }
            if (this.isSelected(item)) {
                classList.push('selected')
            }
            return classList
        },
    },
}
</script>
<style lang='scss' scoped>
</style>
