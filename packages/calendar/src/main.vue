<template>
    <div class="hua-calendar">
        <div class="hua-calendar-panel">
            <!--日历头部-->
            <div class="hua-calendar-date-panel">
                <div class="hua-calendar-input-wrap" v-if="showDateInput">
                    <div class="hua-calendar-date-input-wrap">
                        <input class="hua-calendar-input" v-model="inputValue">
                    </div>
                    <span class="hua-calendar-clear-btn" @click="handleClear"></span>
                </div>
            </div>
            <!--日历日期部分-->
            <div class="hua-calendar-date-panel">
                <div class="hua-calendar-header">
                    <div style="position:relative;">
                        <span class="hua-calendar-prev-year-btn" @click="prevYear(myDate)"></span>
                        <span class="hua-calendar-prev-month-btn" @click="prevMonth(myDate)"></span>
                        <span class="hua-calendar-my-select">
                            <span class="hua-calendar-month-select">{{ month }}</span>
                            <span class="hua-calendar-year-select">{{ year }}</span>
                        </span>
                        <span class="hua-calendar-next-month-btn" @click="nextMonth(myDate)"></span>
                        <span class="hua-calendar-next-year-btn" @click="nextYear(myDate)"></span>
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
                                        @click="handleSelected(dayList[(row - 1) * 7 + index - 1], 'click')"
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
            selectRangeIsDone: true, // 选择范围的操作是否完成
            rangeStartValue: '',
            rangeEndValue: '',
            tempHoverEndValue: '',
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
        initDate(initDateStr = null) {
            const date = initDateStr ? new Date(initDateStr) : new Date();
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
            this.initDate(this.myDate)
            this.getList(this.myDate);
        },
        prevMonth(date) { // 上一个月
            date = tool.dateFormat(date);
            this.myDate = tool.getOtherMonth(this.myDate, 'preMonth');
            this.initDate(this.myDate)
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
            if (this.rangeCalendar && !this.selectRangeIsDone && !item.disabled) {
                this.tempHoverEndValue = item.date;
            }
        },
        isSelected(item) { // 是否选中
            return +new Date(this.value) === +new Date(item.date);
        },
        handleSelected(item, type) {
            // 点击选择
            if (item.disabled) {
                return
            }
            if (!this.rangeCalendar) {
                // 不是日期范围的操作，只是选中某个日期
                if (item.otherMonth === 'nowMonth' && !item.dayHide) {
                    this.getList(this.myDate, item.date);
                }
                if (item.otherMonth !== 'nowMonth') {
                    item.otherMonth === 'preMonth'
                        ? this.prevMonth(item.date)
                        : this.nextMonth(item.date);
                }
                this.$emit('input', item.date)
                return
            }
            // 执行日期范围选择的操作
            if (this.selectRangeIsDone) {
                // 值为false表示正在选择
                this.selectRangeIsDone = false;
                // 如果日期范围的start没有值，则保存start值
                this.rangeStartValue = item.date;
                this.rangeEndValue = '';
            } else {
                this.rangeEndValue = item.date
                this.selectRangeIsDone = true;

                // 比较大小
                if (this.isBigger(this.rangeStartValue, this.rangeEndValue)) {
                    [this.rangeStartValue, this.rangeEndValue] = [this.rangeEndValue, this.rangeStartValue]
                }
                this.$emit('onRange', { start: this.rangeStartValue, end: this.rangeEndValue })
            }
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
            if (!this.selectRangeIsDone) { // 正在选择
                if (this.isBigger(this.rangeStartValue, this.tempHoverEndValue)) {
                    // start大于hover的当前日期
                    if (
                        this.isBigger(item.date, this.tempHoverEndValue)
                        && this.isBigger(this.rangeStartValue, item.date)
                    ) {
                        classList.push('is-in-range')
                    }
                } else { // hover的日期大于start的日期
                    if (
                        this.isBigger(item.date, this.rangeStartValue)
                        && this.isBigger(this.tempHoverEndValue, item.date)
                    ) {
                        classList.push('is-in-range')
                    }
                }
            } else {
                if (
                    this.isBigger(item.date, this.rangeStartValue)
                    && this.isBigger(this.rangeEndValue, item.date)
                ) {
                    classList.push('is-in-range')
                }
            }
            if (this.isEqual(this.rangeStartValue, item.date)) {
                classList.push('hua-calendar-selected-start-date')
            }
            if (this.isEqual(this.rangeEndValue, item.date)) {
                classList.push('hua-calendar-selected-end-date')
            }
            return classList
        },
        isBigger(first, second) {
            return (+new Date(first)) > (+new Date(second))
        },
        isEqual(first, second) {
            return (+new Date(first)) === (+new Date(second))
        },
        prevYear(date) {
            date = tool.dateFormat(date);
            this.myDate = tool.getOtherMonth(date, 'prevYear');
            this.initDate(this.myDate)
            this.getList(this.myDate);
        },
        nextYear(date) {
            date = tool.dateFormat(date);
            this.myDate = tool.getOtherMonth(date, 'nextYear');
            this.initDate(this.myDate)
            this.getList(this.myDate);
        },
        handleClear() {
            // 清除选中
            this.inputValue = '';
            this.initDate();
            this.rangeStartValue = '';
            this.rangeEndValue = '';
            this.selectRangeIsDone = true;
            this.tempHoverEndValue = '';
        },
    },
}
</script>
<style lang='scss' scoped>
</style>
