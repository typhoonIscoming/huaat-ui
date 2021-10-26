import Button from './packages/button/index.js';

const components = [
    Button,
]

const install = function(Vue, options = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    Button,
}
