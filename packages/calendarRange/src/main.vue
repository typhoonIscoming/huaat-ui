<template>
    <div class="hua-calendar hua-calendar-range">
        <Calendar />
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
        return {}
    },
}
</script>
<style lang='scss' scoped>
</style>
