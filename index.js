import Button from './packages/button/index.js';
import Link from './packages/link/index';

const components = [
    Button,
    Link,
]

export const install = function (Vue, options = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.1.1',
    Button,
    Link
}
