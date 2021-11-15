(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("hua-ui", [], factory);
	else if(typeof exports === 'object')
		exports["hua-ui"] = factory();
	else
		root["hua-ui"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/main.vue?vue&type=template&id=99c4cba6&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "hua-button",
      class: [
        "hua-button--" + _vm.buttonType,
        _vm.buttonSize ? "hua-button--" + _vm.buttonSize : "",
        {
          "is-disabled": _vm.disabled,
          "is-loading": _vm.loading,
          "is-plain": _vm.plain,
          "is-round": _vm.round,
          "is-circle": _vm.circle
        }
      ],
      attrs: { autofocus: _vm.autofocus },
      on: { click: _vm.handleClick }
    },
    [_vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/main.vue?vue&type=template&id=99c4cba6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: "HuaButton",
  props: {
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    size: String,
    type: String
  },
  computed: {
    buttonSize: function buttonSize() {
      return ['medium', 'small', 'mini'].includes(this.size) ? this.size : 'medium';
    },
    buttonType: function buttonType() {
      return 'primary/success/warning/danger/info/text'.split('/').includes(this.type) ? this.type : 'primary';
    }
  },
  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    }
  }
});
// CONCATENATED MODULE: ./packages/button/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/button/src/main.vue





/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "99c4cba6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/button/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js
// packages/button/index.js


main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var packages_button = (main);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/link/src/main.vue?vue&type=template&id=01cf3b65&
var mainvue_type_template_id_01cf3b65_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    _vm._b(
      {
        class: [
          "hua-link",
          _vm.type ? "hua-link--" + _vm.type : "",
          _vm.disabled && "is-disabled",
          _vm.underline && !_vm.disabled && "is-underline"
        ],
        attrs: { href: _vm.disabled ? null : _vm.href },
        on: { click: _vm.handleClick }
      },
      "a",
      _vm.$attrs,
      false
    ),
    [
      _vm.icon ? _c("i", { class: _vm.icon }) : _vm._e(),
      _vm._v(" "),
      _vm.$slots.default
        ? _c("span", { staticClass: "hua-link--inner" }, [_vm._t("default")], 2)
        : _vm._e(),
      _vm._v(" "),
      _vm.$slots.icon ? [_vm.$slots.icon ? _vm._t("icon") : _vm._e()] : _vm._e()
    ],
    2
  )
}
var mainvue_type_template_id_01cf3b65_staticRenderFns = []
mainvue_type_template_id_01cf3b65_render._withStripped = true


// CONCATENATED MODULE: ./packages/link/src/main.vue?vue&type=template&id=01cf3b65&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/link/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var link_src_mainvue_type_script_lang_js_ = ({
  name: 'HuaLink',
  props: {
    type: {
      type: String,
      "default": 'default'
    },
    underline: {
      type: Boolean,
      "default": true
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  methods: {
    handleClick: function handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/link/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_link_src_mainvue_type_script_lang_js_ = (link_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/link/src/main.vue





/* normalize component */

var main_component = normalizeComponent(
  packages_link_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_01cf3b65_render,
  mainvue_type_template_id_01cf3b65_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_api; }
main_component.options.__file = "packages/link/src/main.vue"
/* harmony default export */ var src_main = (main_component.exports);
// CONCATENATED MODULE: ./packages/link/index.js


src_main.install = function (Vue) {
  Vue.component(src_main.name, src_main);
};

/* harmony default export */ var packages_link = (src_main);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/src/main.vue?vue&type=template&id=75e5f43c&scoped=true&
var mainvue_type_template_id_75e5f43c_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", {
    staticClass: "hua-checkbox",
    class: [
      _vm.border && _vm.checkboxSize ? "hua-checkbox--" + _vm.checkboxSize : "",
      { "is-disabled": _vm.isDisabled },
      { "is-bordered": _vm.border },
      { "is-checked": _vm.isChecked }
    ]
  })
}
var mainvue_type_template_id_75e5f43c_scoped_true_staticRenderFns = []
mainvue_type_template_id_75e5f43c_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/checkbox/src/main.vue?vue&type=template&id=75e5f43c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var checkbox_src_mainvue_type_script_lang_js_ = ({
  name: 'HuaCheckbox',
  props: {
    value: {},
    size: String,
    border: Boolean
  },
  data: function data() {
    return {};
  },
  computed: {
    isChecked: function isChecked() {},
    isDisabled: function isDisabled() {},
    checkboxSize: function checkboxSize() {
      return 'medium/small/mini'.split('/').includes(this.size) ? this.size : 'medium';
    },
    isGroup: function isGroup() {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'HuaCheckboxGroup') {
          parent = parent.$parent;
        } else {
          // this._checkboxGroup = parent;
          return true;
        }
      }

      return false;
    }
  }
});
// CONCATENATED MODULE: ./packages/checkbox/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_checkbox_src_mainvue_type_script_lang_js_ = (checkbox_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/checkbox/src/main.vue





/* normalize component */

var src_main_component = normalizeComponent(
  packages_checkbox_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_75e5f43c_scoped_true_render,
  mainvue_type_template_id_75e5f43c_scoped_true_staticRenderFns,
  false,
  null,
  "75e5f43c",
  null
  
)

/* hot reload */
if (false) { var src_main_api; }
src_main_component.options.__file = "packages/checkbox/src/main.vue"
/* harmony default export */ var checkbox_src_main = (src_main_component.exports);
// CONCATENATED MODULE: ./packages/checkbox/index.js


checkbox_src_main.install = function (Vue) {
  Vue.component(checkbox_src_main.name, checkbox_src_main);
};

/* harmony default export */ var packages_checkbox = (checkbox_src_main);
// CONCATENATED MODULE: ./index.js



var components = [packages_button, packages_link, packages_checkbox];

var install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
}; // 通过script标签加载组件库


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var index = __webpack_exports__["default"] = ({
  version: '0.1.1',
  install: install,
  Button: packages_button,
  Link: packages_link,
  Checkbox: packages_checkbox
});

/***/ })
/******/ ]);
});