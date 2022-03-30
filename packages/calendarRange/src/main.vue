<template>
    <div class="hua-date-container">
        <div class="date-range-picker-ranges-container">
            <template v-for="item in quickSelectList">
                <div
                    :key="item.value"
                    :name="item.mark"
                    class="date-range-picker-ranges-link"
                    @click="handleSelect(item)"
                >
                    {{ item.label }}
                </div>
            </template>
        </div>
        <div class="hua-calendar-range">
            <Calendar
                :rangeCalendar="true"
                :start.sync="start"
                :end.sync="end"
                :isDone.sync="isDone"
                :hoverValue.sync="hoverValue"
                :nextButtonDisabled="prevButtonDisabled"
                type="current"
                class="hua-start-date"
                @onRange="handleOnRange"
                @onCurrent="hanldeOnPrevDate"
            />
            <Calendar
                :rangeCalendar="true"
                :start.sync="start"
                :end.sync="end"
                :isDone.sync="isDone"
                :hoverValue.sync="hoverValue"
                :prevButtonDisabled="nextButtonDisabled"
                type="next"
                class="hua-end-date"
                @onRange="handleOnRange"
                @onCurrent="hanldeOnNextDate"
            />
        </div>
    </div>
</template>

<script>
import Calendar from '../../calendar/src/main.vue';

export default {
    name: 'HuaCalendarRange',
    props: {
        disabledDate: {
            type: Function,
            default: () => {},
        },
        value: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        Calendar,
    },
    data() {
        return {
            start: '',
            end: '',
            isDone: true,
            hoverValue: '',
            nextButtonDisabled: false,
            prevButtonDisabled: false,
            prevDate: '',
            nextDate: '',
            quickSelectList: [
                { label: '今日', value: '0day' }, { label: '昨日', value: '1day' },
                { label: '本周', value: '0week' }, { label: '上周', value: '1week' },
                { label: '本月', value: '0month' }, { label: '上月', value: '1month' },
                { label: '本年', value: '0year' }, { label: '上年', value: '1year' },
                { label: '过去7天', value: '7day' }, { label: '过去30天', value: '30day' },
                { label: '过去90天', value: '90day' }, { label: '上线至今', value: '-1day' },
                { label: '选择具体时间段', mark: 'special', value: 'specificTime' },
            ],
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                try{
                    this.start = val[0];
                    this.end = val[1];
                } catch(err) {
                    console.log(err)
                }
            },
        },
    },
    methods: {
        handleSelect(item) {
            if (item.value !== 'specificTime') {
                let [num, type] = item.value.match(/[a-z]+|[^a-z]+/gi);
                num = Number(num);
                const value = this.parseTime(num, type);
            }
        },
        parseTime(num, type) {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            const day = now.getDate();
            const week = now.getDay() || 7; // 7代表一周的最后一天，但是getDay()取值是0

            // 获取某年某月有多少天
            const getDaysInMonth = (year, month) => { 
                let date = new Date(year, month, 1); 
                return new Date(date.getTime() - 864e5).getDate(); 
            }
            if (type === 'year') {
                // 本年|上年
                if (num === 0) {
                    return [`${year}-01-01`, `${year}-${month}-${day}`]
                }
                const selectYear = year - num;
                const selectLastMonthDays = getDaysInMonth(selectYear, 12);
                return [`${selectYear}-01-01`, `${selectYear}-12-${selectLastMonthDays}`]
            } else if (type === 'month') {
                // 本月|上月
                if (num === 0) {
                    return [`${year}-01-01`, `${year}-${month}-${day}`]
                }
                const selectMonth = month - num >= 1 ? month - num : month - num + 12;
                const selectYear = month - num >= 1 ? year : year - 1;
                const selectDay = getDaysInMonth(selectYear, selectMonth);
                return [`${selectYear}-${selectMonth}-01`, `${selectYear}-${selectMonth}-${selectDay}`]
            } else if (type === 'week') {
                // 本周|上周
                const lastMonthYear = month > 1 ? year : year - 1; // 上一个月是属于哪一年
                const lastMonth = month > 1 ? month - 1 : 12;
                const lastMonthDays = getDaysInMonth(lastMonthYear, lastMonth); // 上一个月多少天
                const currentMonthDays = getDaysInMonth(year, month);
                // if (num === 0) {
                    // 本周
                    // week取值是0-6;
                    // 计算是从周一到周日
                    const weeks = week * (num + 1);
                    
                    const diff = day - weeks + 1; // 从周一开始，所以+1
                    const beyound = day + 7 - week > currentMonthDays; // 是否超出
                    const mondayDate = diff > 0 ? diff : lastMonthDays + diff; // 周一的号数
                    const sundayDate = beyound ? 7 - (currentMonthDays - day + week) : day + 7 - week;
                    // const mondayMonth = diff > 0 ? 
                // }
            }
            console.log('===', getDaysInMonth(year, month))
        },
        handleOnRange(range) {
            this.$emit('onRange', range)
        },
        hanldeOnNextDate(date) {
            this.nextDate = date;
            this.parseButtonClickable();
        },
        hanldeOnPrevDate(date) {
            this.prevDate = date;
            this.parseButtonClickable();
        },
        parseButtonClickable() {
            if (this.prevDate && this.nextDate) {
                const prev = new Date(this.prevDate);
                const next = new Date(this.nextDate);
                const prevYear = prev.getFullYear();
                const prevMonth = prev.getMonth() + 1;
                const nextYear = next.getFullYear();
                const nextMonth = next.getMonth() + 1;

                if (prevYear <= nextYear) {
                    if (prevMonth + 1 >= nextMonth) {
                        this.nextButtonDisabled = true;
                        this.prevButtonDisabled = true;
                    } else {
                        this.nextButtonDisabled = false;
                        this.prevButtonDisabled = false;
                    }
                } else {
                    this.nextButtonDisabled = true;
                    this.prevButtonDisabled = true;
                }
            } else {
                this.nextButtonDisabled = false;
                this.prevButtonDisabled = false;
            }
        },
    },
}
</script>
<style lang='scss' scoped>
</style>
