<template>
    <div class="hua-calendar-range">
        <Calendar
            :rangeCalendar="true"
            :start.sync="start"
            :end.sync="end"
            :isDone.sync="isDone"
            :hoverValue.sync="hoverValue"
            type="current"
            class="hua-start-date"
            @onRange="handleOnRange"
        />
        <Calendar
            :rangeCalendar="true"
            :start.sync="start"
            :end.sync="end"
            :isDone.sync="isDone"
            :hoverValue.sync="hoverValue"
            type="next"
            class="hua-end-date"
            @onRange="handleOnRange"
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
    },
}
</script>
<style lang='scss' scoped>
</style>
