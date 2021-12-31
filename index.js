import Button from './packages/button/index';
import Link from './packages/link/index';
import Checkbox from './packages/checkbox/index';
import Calendar from './packages/calendar/index';

const components = [
    Button,
    Link,
    Checkbox,
    Calendar,
]

const install = function (Vue, options = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}
// 通过script标签加载组件库
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.1.1',
    install,
    Button,
    Link,
    Checkbox,
    Calendar,
}
