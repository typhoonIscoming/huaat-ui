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
        />
        <Calendar
            :rangeCalendar="true"
            :start.sync="start"
            :end.sync="end"
            :isDone.sync="isDone"
            :hoverValue.sync="hoverValue"
            type="next"
            class="hua-end-date"
        />
    </div>
</template>

<script>
import Calendar from '../../calendar/src/main.vue';

export default {
    name: 'HuaCalendarRange',
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
}
</script>
<style lang='scss' scoped>
</style>
