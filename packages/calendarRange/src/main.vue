<template>
    <div class="hua-date-container">
        <div class="date-range-value-container">
            date-range-value-container
        </div>
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
        disabledDate: Function,
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
                console.log('value', value)
                if (value) {
                    [this.start, this.end] = value;
                }
            } else {
                this.start = '';
                this.end = '';
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
            const getYYYYMMDD = (d) => {
                const date = d ? new Date(d) : new Date();
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                return [year, month, day]
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
                    return [`${year}-${month}-01`, `${year}-${month}-${day}`]
                }
                const selectMonth = month - num >= 1 ? month - num : month - num + 12;
                const selectYear = month - num >= 1 ? year : year - 1;
                const selectDay = getDaysInMonth(selectYear, selectMonth);
                return [`${selectYear}-${selectMonth}-01`, `${selectYear}-${selectMonth}-${selectDay}`]
            } else if (type === 'week') {
                // 本周|上周
                // 向前多少天的周一
                const beforeMonday = num * 7 + week - 1;
                const beforeSunday = num * 7 - (7 - week);
                const today = +new Date(`${year}-${month}-${day}`);

                const [mondayYear, mondayMonth, mondayDay ] = getYYYYMMDD(today - beforeMonday * 864e5);
                const [sundayYear, sundayMonth, sundayDay ] = getYYYYMMDD(today - beforeSunday * 864e5);
                return [`${mondayYear}-${mondayMonth}-${mondayDay}`, `${sundayYear}-${sundayMonth}-${sundayDay}`]
            } else if (type === 'day') {
                const today = +new Date(`${year}-${month}-${day}`);
                const yesterday = getYYYYMMDD(today - 864e5);
                if (num !== -1) {
                    if (num === 0) { // 今天
                        return [`${year}-${month}-${day}`, `${year}-${month}-${day}`]
                    } else { // 昨天或指定过去多少天
                        const start = getYYYYMMDD(today - num * 864e5);
                        return [start.join('-'), yesterday.join('-')]
                    }
                } else {
                    // 上线至今
                    return ['2022-03-01', yesterday.join('-')]
                }
            }
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

                if (prevYear < nextYear) {
                    this.nextButtonDisabled = false;
                    this.prevButtonDisabled = false;
                } else if (prevYear === nextYear) {
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
