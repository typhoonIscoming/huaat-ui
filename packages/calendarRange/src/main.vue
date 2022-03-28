<template>
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
