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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/calendar/src/main.vue?vue&type=template&id=6d9756be&scoped=true&
var mainvue_type_template_id_6d9756be_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "hua-calendar" }, [
    _c("div", { staticClass: "hua-calendar-panel" }, [
      _c("div", { staticClass: "hua-calendar-date-panel" }, [
        _vm.showDateInput
          ? _c("div", { staticClass: "hua-calendar-input-wrap" }, [
              _c("div", { staticClass: "hua-calendar-date-input-wrap" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputValue,
                      expression: "inputValue"
                    }
                  ],
                  staticClass: "hua-calendar-input",
                  domProps: { value: _vm.inputValue },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.inputValue = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "hua-calendar-clear-btn",
                on: { click: _vm.handleClear }
              })
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "hua-calendar-date-panel" }, [
        _c("div", { staticClass: "hua-calendar-header" }, [
          _c("div", { staticStyle: { position: "relative" } }, [
            _c("span", {
              staticClass: "hua-calendar-prev-year-btn",
              on: {
                click: function($event) {
                  return _vm.prevYear(_vm.myDate)
                }
              }
            }),
            _vm._v(" "),
            _c("span", {
              staticClass: "hua-calendar-prev-month-btn",
              on: {
                click: function($event) {
                  return _vm.prevMonth(_vm.myDate)
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "hua-calendar-my-select" }, [
              _c("span", { staticClass: "hua-calendar-month-select" }, [
                _vm._v(_vm._s(_vm.month))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "hua-calendar-year-select" }, [
                _vm._v(_vm._s(_vm.year))
              ])
            ]),
            _vm._v(" "),
            _c("span", {
              staticClass: "hua-calendar-next-month-btn",
              on: {
                click: function($event) {
                  return _vm.nextMonth(_vm.myDate)
                }
              }
            }),
            _vm._v(" "),
            _c("span", {
              staticClass: "hua-calendar-next-year-btn",
              on: {
                click: function($event) {
                  return _vm.nextYear(_vm.myDate)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "hua-calendar-body" }, [
          _c("table", { staticClass: "hua-calendar-table" }, [
            _c("thead", [
              _c(
                "tr",
                _vm._l(_vm.week, function(item) {
                  return _c(
                    "th",
                    { key: item, staticClass: "hua-calendar-column-header" },
                    [
                      _c(
                        "span",
                        { staticClass: "hua-calendar-column-header-inner" },
                        [_vm._v(_vm._s(item))]
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              { staticClass: "hua-calendar-tbody" },
              _vm._l(_vm.rows, function(row) {
                return _c(
                  "tr",
                  { key: row },
                  _vm._l(7, function(index) {
                    return _c(
                      "td",
                      { key: index, staticClass: "hua-calendar-cell" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "hua-calendar-date",
                            class: [].concat(
                              _vm.parseClass(
                                _vm.dayList[(row - 1) * 7 + index - 1]
                              )
                            ),
                            on: {
                              click: function($event) {
                                _vm.handleSelected(
                                  _vm.dayList[(row - 1) * 7 + index - 1],
                                  "click"
                                )
                              },
                              mouseover: function($event) {
                                _vm.handleHover(
                                  _vm.dayList[(row - 1) * 7 + index - 1]
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  _vm.dayList[(row - 1) * 7 + index - 1].id
                                ) +
                                "\n                                "
                            )
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "hua-calendar-footer" })
    ])
  ])
}
var mainvue_type_template_id_6d9756be_scoped_true_staticRenderFns = []
mainvue_type_template_id_6d9756be_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/calendar/src/main.vue?vue&type=template&id=6d9756be&scoped=true&

// CONCATENATED MODULE: ./packages/calendar/src/utils.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ var utils = ({
  sundayStart: true,
  getMonthweek: function getMonthweek(date) {
    // 向前空几个
    var year = new Date(date).getFullYear();
    var month = new Date(date).getMonth() + 1;
    var dateFirstOne = new Date(year + '/' + month + '/1');
    return this.sundayStart ? dateFirstOne.getDay() === 0 ? 7 : dateFirstOne.getDay() : dateFirstOne.getDay() === 0 ? 6 : dateFirstOne.getDay() - 1;
  },
  getDaysInOneMonth: function getDaysInOneMonth(date) {
    // 某月的天数
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var d = new Date(year, month, 0);
    return d.getDate();
  },
  getLeftDateList: function getLeftDateList(date) {
    // 获取上个月末的几个日期
    var arr = [];
    var leftNum = this.getMonthweek(date);
    var num = this.getDaysInOneMonth(this.getOtherMonth(date, 'preMonth')) - leftNum + 1;
    var preDate = this.getOtherMonth(date, 'preMonth');
    console.log('preDate', preDate);
  },
  getOtherMonth: function getOtherMonth(date) {
    var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'nextMonth';
    var timeArray = this.dateFormat(date).split('/');
    var year = timeArray[0];
    var month = timeArray[1];
    var day = timeArray[2];
    var year2 = year;
    var month2 = month;

    if (str === 'nextMonth') {
      month2 = parseInt(month) + 1;

      if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
      }
    } else if (str === 'preMonth') {
      month2 = parseInt(month) - 1;

      if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
      }
    } else if (str === 'nextYear') {
      year2 = parseInt(year2) + 1;
    } else if (str === 'prevYear') {
      year2 = parseInt(year2) - 1;
    }

    var day2 = day;
    var days2 = new Date(year2, month2, 0).getDate();

    if (day2 > days2) {
      day2 = days2;
    }

    if (month2 < 10) {
      month2 = '0' + month2;
    }

    if (day2 < 10) {
      day2 = '0' + day2;
    }

    var t2 = year2 + '/' + month2 + '/' + day2;
    return new Date(t2);
  },
  dateFormat: function dateFormat(date) {
    // 格式化日期
    date = typeof date === 'string' ? new Date(date.replace(/\-/g, '/')) : date;
    return "".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/").concat(date.getDate());
  },
  getMonthList: function getMonthList(date) {
    // 获取某月的列表 用于渲染
    return [].concat(_toConsumableArray(this.getLeftArr(date)), _toConsumableArray(this.getMonthListNoOther(date)), _toConsumableArray(this.getRightArr(date)));
  },
  // 获取某月的列表不包括上月和下月
  getMonthListNoOther: function getMonthListNoOther(date) {
    var arr = [];
    var num = this.getDaysInOneMonth(date);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var toDay = this.dateFormat(new Date());

    for (var i = 0; i < num; i++) {
      var nowTime = "".concat(year, "/").concat(month, "/").concat(i + 1);
      arr.push({
        id: i + 1,
        date: nowTime,
        isToday: toDay === nowTime,
        otherMonth: 'nowMonth'
      });
    }

    return arr;
  },
  getLeftArr: function getLeftArr(date) {
    // 上个月末尾的一些日期
    var arr = [];
    var leftNum = this.getMonthweek(date);
    var num = this.getDaysInOneMonth(this.getOtherMonth(date, 'preMonth')) - leftNum + 1;
    var preDate = this.getOtherMonth(date, 'preMonth'); // 上个月多少开始

    for (var i = 0; i < leftNum; i++) {
      var nowTime = preDate.getFullYear() + '/' + (preDate.getMonth() + 1) + '/' + (num + i);
      arr.push({
        id: num + i,
        date: nowTime,
        isToday: false,
        otherMonth: 'preMonth'
      });
    }

    return arr;
  },
  getRightArr: function getRightArr(date) {
    // 下个月末尾的一些日期
    var arr = [];
    var nextDate = this.getOtherMonth(date, 'nextMonth');
    var leftLength = this.getDaysInOneMonth(date) + this.getMonthweek(date);

    var _length = 7 - leftLength % 7;

    for (var i = 0; i < _length; i++) {
      var nowTime = "".concat(nextDate.getFullYear(), "/").concat(nextDate.getMonth() + 1, "/").concat(i + 1);
      arr.push({
        id: i + 1,
        date: nowTime,
        isToday: false,
        otherMonth: 'nextMonth'
      });
    }

    return arr;
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/calendar/src/main.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//

var zhMonth = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var enMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var enWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
var zhWeek = ['日', '一', '二', '三', '四', '五', '六'];
/* harmony default export */ var calendar_src_mainvue_type_script_lang_js_ = ({
  name: 'HuaCalendar',
  props: {
    showDateInput: {
      // 是否显示顶部输入框
      type: Boolean,
      "default": true
    },
    lang: {
      type: String,
      "default": 'zh'
    },
    sundayStart: {
      // 一周第一天是周一，默认是周日
      type: Boolean,
      "default": true
    },
    disabledDate: {
      type: Function,
      "default": function _default() {}
    },
    rangeCalendar: {
      // 是否是选择日期范围组件
      type: Boolean,
      "default": true
    },
    value: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      inputValue: '',
      month: '',
      year: '',
      today: '',
      myDate: new Date(),
      dayList: [],
      selectRangeIsDone: true,
      // 选择范围的操作是否完成
      rangeStartValue: '',
      rangeEndValue: '',
      tempHoverEndValue: ''
    };
  },
  computed: {
    week: function week() {
      var temp = enWeek;

      if (this.lang === 'zh') {
        temp = zhWeek;
      }

      if (!this.sundayStart) {
        var monday = temp[0];
        temp = temp.slice(1);
        temp.push(monday);
      }

      return temp;
    },
    rows: function rows() {
      return this.dayList.length / 7;
    }
  },
  watch: {
    sundayStart: {
      immediate: true,
      handler: function handler() {
        utils.sundayStart = this.sundayStart;
        this.initDate();
        this.getList(this.myDate);
      }
    }
  },
  methods: {
    initDate: function initDate() {
      var initDateStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var date = initDateStr ? new Date(initDateStr) : new Date();
      var month = zhMonth;

      if (this.lang === 'en') {
        month = enMonth;
      }

      this.month = enMonth[date.getMonth()];
      this.year = date.getFullYear();
    },
    nextMonth: function nextMonth(date) {
      date = utils.dateFormat(date);
      this.myDate = utils.getOtherMonth(this.myDate, 'nextMonth');
      this.initDate(this.myDate);
      this.getList(this.myDate);
    },
    prevMonth: function prevMonth(date) {
      // 上一个月
      date = utils.dateFormat(date);
      this.myDate = utils.getOtherMonth(this.myDate, 'preMonth');
      this.initDate(this.myDate);
      this.getList(this.myDate);
    },
    getList: function getList() {
      var _this = this;

      // 获取显示的月的日期列表
      var arr = utils.getMonthList(this.myDate);
      this.dayList = arr.map(function (item) {
        if (_this.disabledDate && typeof _this.disabledDate === 'function') {
          return _objectSpread(_objectSpread({}, item), {}, {
            disabled: !!_this.disabledDate(item.date)
          });
        }

        return item;
      });
    },
    handleHover: function handleHover(item) {
      if (this.rangeCalendar && !this.selectRangeIsDone && !item.disabled) {
        this.tempHoverEndValue = item.date;
      }
    },
    isSelected: function isSelected(item) {
      // 是否选中
      return +new Date(this.value) === +new Date(item.date);
    },
    handleSelected: function handleSelected(item, type) {
      // 点击选择
      if (item.disabled) {
        return;
      }

      if (!this.rangeCalendar) {
        // 不是日期范围的操作，只是选中某个日期
        if (item.otherMonth === 'nowMonth' && !item.dayHide) {
          this.getList(this.myDate, item.date);
        }

        if (item.otherMonth !== 'nowMonth') {
          item.otherMonth === 'preMonth' ? this.prevMonth(item.date) : this.nextMonth(item.date);
        }

        this.$emit('input', item.date);
        return;
      } // 执行日期范围选择的操作


      if (this.selectRangeIsDone) {
        // 值为false表示正在选择
        this.selectRangeIsDone = false; // 如果日期范围的start没有值，则保存start值

        this.rangeStartValue = item.date;
        this.rangeEndValue = '';
        this.tempHoverEndValue = '';
      } else {
        this.rangeEndValue = item.date;
        this.selectRangeIsDone = true; // 比较大小

        if (this.isBigger(this.rangeStartValue, this.rangeEndValue)) {
          var _ref = [this.rangeEndValue, this.rangeStartValue];
          this.rangeStartValue = _ref[0];
          this.rangeEndValue = _ref[1];
        }

        this.$emit('onRange', {
          start: this.rangeStartValue,
          end: this.rangeEndValue
        });
      }
    },
    parseClass: function parseClass(item) {
      // 判断当前日期有哪些类
      var classList = [];
      var otherMonth = item.otherMonth,
          isToday = item.isToday,
          disabled = item.disabled;

      if (otherMonth === 'preMonth') {
        classList.push('prevMonth');
      } else if (otherMonth === 'nextMonth') {
        classList.push('nextMonth');
      }

      if (isToday) {
        classList.push('isToday');
      }

      if (disabled) {
        classList.push('disabled');
      }

      if (this.isSelected(item)) {
        classList.push('selected');
      }

      if (!this.selectRangeIsDone) {
        // 正在选择
        if (this.isBigger(this.rangeStartValue, this.tempHoverEndValue)) {
          // start大于hover的当前日期
          if (this.isBigger(item.date, this.tempHoverEndValue) && this.isBigger(this.rangeStartValue, item.date)) {
            classList.push('is-in-range');
          }
        } else {
          // hover的日期大于start的日期
          if (this.isBigger(item.date, this.rangeStartValue) && this.isBigger(this.tempHoverEndValue, item.date)) {
            classList.push('is-in-range');
          }
        }
      } else {
        if (this.isBigger(item.date, this.rangeStartValue) && this.isBigger(this.rangeEndValue, item.date)) {
          classList.push('is-in-range');
        }
      }

      if (this.isEqual(this.rangeStartValue, item.date)) {
        classList.push('hua-calendar-selected-start-date');
      }

      if (this.isEqual(this.rangeEndValue, item.date) || this.isEqual(this.tempHoverEndValue, item.date)) {
        classList.push('hua-calendar-selected-end-date');
      }

      return classList;
    },
    isBigger: function isBigger(first, second) {
      return +new Date(first) > +new Date(second);
    },
    isEqual: function isEqual(first, second) {
      return +new Date(first) === +new Date(second);
    },
    prevYear: function prevYear(date) {
      date = utils.dateFormat(date);
      this.myDate = utils.getOtherMonth(date, 'prevYear');
      this.initDate(this.myDate);
      this.getList(this.myDate);
    },
    nextYear: function nextYear(date) {
      date = utils.dateFormat(date);
      this.myDate = utils.getOtherMonth(date, 'nextYear');
      this.initDate(this.myDate);
      this.getList(this.myDate);
    },
    handleClear: function handleClear() {
      // 清除选中
      this.inputValue = '';
      this.initDate();
      this.rangeStartValue = '';
      this.rangeEndValue = '';
      this.selectRangeIsDone = true;
      this.tempHoverEndValue = '';
    }
  }
});
// CONCATENATED MODULE: ./packages/calendar/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_calendar_src_mainvue_type_script_lang_js_ = (calendar_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/calendar/src/main.vue





/* normalize component */

var calendar_src_main_component = normalizeComponent(
  packages_calendar_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_6d9756be_scoped_true_render,
  mainvue_type_template_id_6d9756be_scoped_true_staticRenderFns,
  false,
  null,
  "6d9756be",
  null
  
)

/* hot reload */
if (false) { var calendar_src_main_api; }
calendar_src_main_component.options.__file = "packages/calendar/src/main.vue"
/* harmony default export */ var calendar_src_main = (calendar_src_main_component.exports);
// CONCATENATED MODULE: ./packages/calendar/index.js


calendar_src_main.install = function (Vue) {
  Vue.component(calendar_src_main.name, calendar_src_main);
};

/* harmony default export */ var calendar = (calendar_src_main);
// CONCATENATED MODULE: ./index.js




var components = [packages_button, packages_link, packages_checkbox, calendar];

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
  Checkbox: packages_checkbox,
  Calendar: calendar
});

/***/ })
/******/ ]);
});