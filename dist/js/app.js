/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Dot_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Dot.vue */ \"./src/components/Dot.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HelloPage\",\n  components: {\n    DotLink: _components_Dot_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  methods: {\n    goPage(a) {\n      this.$router.push(a);\n    }\n  },\n  mounted() {\n    // eslint-disable-next-line\n    let vh = window.innerHeight * 0.01;\n    document.documentElement.style.setProperty(\"--vh\", `${vh}px`);\n    window.addEventListener(\"resize\", () => {\n      // We execute the same script as before\n      vh = window.innerHeight * 0.01;\n      document.documentElement.style.setProperty(\"--vh\", `${vh}px`);\n    });\n  }\n});\n\n//# sourceURL=webpack://bravo2/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BusinessCard.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BusinessCard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"BusinessCard\"\n});\n\n//# sourceURL=webpack://bravo2/./src/components/BusinessCard.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dot.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dot.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"DotLink\",\n  props: {\n    title: String,\n    router: String\n  },\n  computed: {\n    currentRouteName() {\n      return this.$route.name;\n    }\n  }\n});\n\n//# sourceURL=webpack://bravo2/./src/components/Dot.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_BusinessCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/BusinessCard.vue */ \"./src/components/BusinessCard.vue\");\n// @ is an alias to /src\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HomeView\",\n  components: {\n    BusinessCard: _components_BusinessCard_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack://bravo2/./src/views/HomeView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"footer\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  const _component_DotLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DotLink\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DotLink, {\n    title: \"Визитка\",\n    router: \"home\",\n    onClick: _cache[0] || (_cache[0] = $event => $options.goPage('/'))\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DotLink, {\n    title: \"Обо мне\",\n    router: \"about-me\",\n    onClick: _cache[1] || (_cache[1] = $event => $options.goPage('/about-me'))\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DotLink, {\n    title: \"Hard Skills\",\n    router: \"hard-skills\",\n    onClick: _cache[2] || (_cache[2] = $event => $options.goPage('/hard-skills'))\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DotLink, {\n    title: \"Проекты\",\n    router: \"projects\",\n    onClick: _cache[3] || (_cache[3] = $event => $options.goPage('/projects'))\n  })])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://bravo2/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BusinessCard.vue?vue&type=template&id=74d56b20&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BusinessCard.vue?vue&type=template&id=74d56b20&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-74d56b20\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"business-card\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"business-card__inner\\\" data-v-74d56b20><div class=\\\"business-card__side business-card__side_front\\\" data-v-74d56b20><h1 class=\\\"business-card__h1\\\" data-test=\\\"name\\\" data-v-74d56b20>Bravo, Яна</h1><p class=\\\"business-card__p business-card__p_front\\\" data-v-74d56b20> Frontend developer </p></div><div class=\\\"business-card__side business-card__side_back\\\" data-v-74d56b20><p class=\\\"business-card__p\\\" data-v-74d56b20><strong data-v-74d56b20>E-mail: </strong> nglb.mainpoint@yandex.ru </p><p class=\\\"business-card__p\\\" data-v-74d56b20><strong data-v-74d56b20>Telegram: </strong>@YadaYadaYana</p><p class=\\\"business-card__p\\\" data-v-74d56b20><strong data-v-74d56b20>Phone: </strong>+7 9851781965</p></div></div>\", 1);\nconst _hoisted_3 = [_hoisted_2];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, _hoisted_3);\n}\n\n//# sourceURL=webpack://bravo2/./src/components/BusinessCard.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dot.vue?vue&type=template&id=6c78dec9&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dot.vue?vue&type=template&id=6c78dec9&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-6c78dec9\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  for: \"dot\",\n  class: \"label\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: \"dot-link\",\n    onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('openPage', $props.title))\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"dot\", {\n      'dot-current': $options.currentRouteName === $props.router\n    }]),\n    name: \"dot\"\n  }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */)]);\n}\n\n//# sourceURL=webpack://bravo2/./src/components/Dot.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=9ea40744":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=9ea40744 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"home\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_BusinessCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"BusinessCard\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BusinessCard)]);\n}\n\n//# sourceURL=webpack://bravo2/./src/views/HomeView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).mount(\"#app\");\n\n//# sourceURL=webpack://bravo2/./src/main.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/HomeView.vue */ \"./src/views/HomeView.vue\");\n\n\nconst routes = [{\n  path: \"/\",\n  name: \"home\",\n  component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: \"/about-me\",\n  name: \"about-me\",\n  component: () => __webpack_require__.e(/*! import() */ \"src_views_AboutMe_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AboutMe.vue */ \"./src/views/AboutMe.vue\"))\n}, {\n  path: \"/projects\",\n  name: \"projects\",\n  component: () => __webpack_require__.e(/*! import() */ \"src_views_Projects_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/Projects.vue */ \"./src/views/Projects.vue\"))\n}, {\n  path: \"/hard-skills\",\n  name: \"hard-skills\",\n  component: () => __webpack_require__.e(/*! import() */ \"src_views_HardSkills_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/HardSkills.vue */ \"./src/views/HardSkills.vue\"))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createWebHistory)(\"/\"),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack://bravo2/./src/router/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".business-card[data-v-74d56b20] {\\n  width: 34vw;\\n  min-width: 400px;\\n  max-width: 700px;\\n  height: auto;\\n  aspect-ratio: 5/3;\\n  perspective: 1000px;\\n  cursor: pointer;\\n  transition: transform 0.6s;\\n  will-change: transform;\\n  -webkit-font-smoothing: subpixel-antialiased;\\n  backface-visibility: hidden;\\n  color: #10080D;\\n  margin-bottom: 70px;\\n}\\n.business-card_mini[data-v-74d56b20] {\\n  transform: translateX(calc(50vw - 90px)) translateY(calc(65px - 50vh)) perspective(1px) scale(0.25) translateZ(0);\\n}\\n.business-card__inner[data-v-74d56b20] {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  transition: transform 0.6s;\\n  transform-style: preserve-3d;\\n}\\n.business-card__inner_disabled[data-v-74d56b20] {\\n  pointer-events: none;\\n}\\n.business-card__inner[data-v-74d56b20]:hover {\\n  transform: rotateY(180deg);\\n}\\n.business-card__side[data-v-74d56b20] {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  border-radius: 10px;\\n  background-color: #FFF5FF;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  backface-visibility: hidden;\\n  padding: 50px;\\n}\\n.business-card__side_back[data-v-74d56b20] {\\n  transform: rotateY(180deg);\\n}\\n.business-card__h1[data-v-74d56b20] {\\n  font-size: 3em;\\n}\\n.business-card__p[data-v-74d56b20] {\\n  margin: 5px;\\n}\\n.business-card__p_front[data-v-74d56b20] {\\n  font-size: 0.9em;\\n  margin: 0;\\n  margin-top: 25px;\\n}\\n@media (max-width: 600px) {\\n.business-card[data-v-74d56b20] {\\n    min-width: 0;\\n    width: 300px;\\n}\\n.business-card__side[data-v-74d56b20] {\\n    padding: 15px;\\n}\\n.business-card__h1[data-v-74d56b20] {\\n    font-size: 2.7em;\\n}\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bravo2/./src/assets/styles/BusinessCard.sass?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".dot-link[data-v-6c78dec9] {\\n  font-size: 0.8em;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  color: #FFF5FF;\\n}\\n.dot-link_project .lable[data-v-6c78dec9] {\\n  display: none;\\n}\\n.dot-link_project .dot[data-v-6c78dec9] {\\n  width: 20px;\\n  height: 20px;\\n}\\n.dot-link_project .dot[data-v-6c78dec9]:hover {\\n  background-color: #FFF5FF;\\n  transform: scale(1);\\n}\\n.dot-link_project-current .dot[data-v-6c78dec9] {\\n  background-color: #FFF5FF;\\n}\\n.dot[data-v-6c78dec9] {\\n  width: 25px;\\n  height: 25px;\\n  background-color: #DD65B7;\\n  border-radius: 100%;\\n  cursor: pointer;\\n  transition: transform 0.1s linear;\\n}\\n.dot-current + label[data-v-6c78dec9] {\\n  opacity: 1;\\n}\\n.dot:hover + label[data-v-6c78dec9] {\\n  opacity: 1;\\n}\\n.dot[data-v-6c78dec9]:hover {\\n  transform: scale(1.2);\\n}\\n.label[data-v-6c78dec9] {\\n  opacity: 0;\\n  transition: opacity 0.1s linear;\\n  line-height: 50px;\\n  position: absolute;\\n  top: 100%;\\n  width: -moz-max-content;\\n  width: max-content;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bravo2/./src/assets/styles/Dot.sass?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/base.sass?vue&type=style&index=0&lang=sass":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/base.sass?vue&type=style&index=0&lang=sass ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Unbounded-Bold.ttf */ \"./src/assets/fonts/Unbounded-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Unbounded-ExtraBold.ttf */ \"./src/assets/fonts/Unbounded-ExtraBold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Unbounded-Regular.ttf */ \"./src/assets/fonts/Unbounded-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Unbounded-Medium.ttf */ \"./src/assets/fonts/Unbounded-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  -webkit-text-size-adjust: none;\\n  -moz-text-size-adjust: none;\\n       text-size-adjust: none;\\n  margin: 0;\\n  box-sizing: border-box;\\n  background-position: center;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  box-sizing: border-box;\\n  position: relative;\\n  transition: all 0.1s linear;\\n  -webkit-tap-highlight-color: transparent;\\n}\\n@font-face {\\n  font-family: \\\"Unbounded\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-style: normal;\\n  font-display: auto;\\n  font-weight: 700;\\n}\\n@font-face {\\n  font-family: \\\"Unbounded\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-style: normal;\\n  font-display: auto;\\n  font-weight: 800;\\n}\\n@font-face {\\n  font-family: \\\"Unbounded\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-style: normal;\\n  font-display: auto;\\n  font-weight: 400;\\n}\\n@font-face {\\n  font-family: \\\"Unbounded\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  font-style: normal;\\n  font-display: auto;\\n  font-weight: 500;\\n}\\nhtml {\\n  width: 100vw;\\n  height: 100vh;\\n  height: calc(var(--vh, 1vh) * 100);\\n  margin: 0;\\n  padding: 0;\\n  overflow: hidden;\\n}\\nbody {\\n  font-family: \\\"Unbounded\\\";\\n  line-height: 130%;\\n  overflow: hidden;\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  font-size: clamp(14px, 1.2vw, 25px);\\n  line-height: 120%;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-position: center;\\n  background-size: auto;\\n  background-repeat: repeat;\\n}\\n#app {\\n  margin: 0 auto;\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 20px 50px 100px;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #10080D;\\n}\\n.footer {\\n  width: 100%;\\n  position: fixed;\\n  padding: 25px 25px 50px;\\n  bottom: 0;\\n  display: flex;\\n  justify-content: space-around;\\n  background-color: #10080D;\\n}\\n.page {\\n  color: #FFF5FF;\\n  msx-height: calc(100% - 120px);\\n  height: auto;\\n  width: calc(90vw - 400px);\\n  line-height: 150%;\\n  min-width: 600px;\\n  display: block;\\n  flex-direction: column;\\n  overflow-y: auto;\\n}\\n.page h1 {\\n  color: #DD65B7;\\n}\\n.page strong {\\n  border-bottom: 2px solid #DD65B7;\\n}\\n.page p {\\n  margin: 10px 0;\\n}\\n@media (max-width: 600px) {\\nbody {\\n    font-size: 12px;\\n    line-height: 120%;\\n}\\n.page {\\n    position: absolute;\\n    color: #FFF5FF;\\n    height: 70vh;\\n    width: 90vw;\\n    min-width: 0px;\\n}\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bravo2/./src/assets/styles/base.sass?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use%5B3%5D");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _assets_styles_base_sass_vue_type_style_index_0_lang_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/base.sass?vue&type=style&index=0&lang=sass */ \"./src/assets/styles/base.sass?vue&type=style&index=0&lang=sass\");\n/* harmony import */ var _Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://bravo2/./src/App.vue?");

/***/ }),

/***/ "./src/components/BusinessCard.vue":
/*!*****************************************!*\
  !*** ./src/components/BusinessCard.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BusinessCard_vue_vue_type_template_id_74d56b20_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusinessCard.vue?vue&type=template&id=74d56b20&scoped=true */ \"./src/components/BusinessCard.vue?vue&type=template&id=74d56b20&scoped=true\");\n/* harmony import */ var _BusinessCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BusinessCard.vue?vue&type=script&lang=js */ \"./src/components/BusinessCard.vue?vue&type=script&lang=js\");\n/* harmony import */ var _assets_styles_BusinessCard_sass_vue_type_style_index_0_id_74d56b20_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass */ \"./src/assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass\");\n/* harmony import */ var _Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_BusinessCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_BusinessCard_vue_vue_type_template_id_74d56b20_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-74d56b20\"],['__file',\"src/components/BusinessCard.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://bravo2/./src/components/BusinessCard.vue?");

/***/ }),

/***/ "./src/components/Dot.vue":
/*!********************************!*\
  !*** ./src/components/Dot.vue ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dot_vue_vue_type_template_id_6c78dec9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dot.vue?vue&type=template&id=6c78dec9&scoped=true */ \"./src/components/Dot.vue?vue&type=template&id=6c78dec9&scoped=true\");\n/* harmony import */ var _Dot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dot.vue?vue&type=script&lang=js */ \"./src/components/Dot.vue?vue&type=script&lang=js\");\n/* harmony import */ var _assets_styles_Dot_sass_vue_type_style_index_0_id_6c78dec9_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass */ \"./src/assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass\");\n/* harmony import */ var _Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Dot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Dot_vue_vue_type_template_id_6c78dec9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-6c78dec9\"],['__file',\"src/components/Dot.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://bravo2/./src/components/Dot.vue?");

/***/ }),

/***/ "./src/views/HomeView.vue":
/*!********************************!*\
  !*** ./src/views/HomeView.vue ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HomeView_vue_vue_type_template_id_9ea40744__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeView.vue?vue&type=template&id=9ea40744 */ \"./src/views/HomeView.vue?vue&type=template&id=9ea40744\");\n/* harmony import */ var _HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeView.vue?vue&type=script&lang=js */ \"./src/views/HomeView.vue?vue&type=script&lang=js\");\n/* harmony import */ var _Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_HomeView_vue_vue_type_template_id_9ea40744__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/HomeView.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://bravo2/./src/views/HomeView.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://bravo2/./src/App.vue?");

/***/ }),

/***/ "./src/components/BusinessCard.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/BusinessCard.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BusinessCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BusinessCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BusinessCard.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BusinessCard.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://bravo2/./src/components/BusinessCard.vue?");

/***/ }),

/***/ "./src/components/Dot.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/components/Dot.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dot.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dot.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://bravo2/./src/components/Dot.vue?");

/***/ }),

/***/ "./src/views/HomeView.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/views/HomeView.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeView.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://bravo2/./src/views/HomeView.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\");\n\n\n//# sourceURL=webpack://bravo2/./src/App.vue?");

/***/ }),

/***/ "./src/components/BusinessCard.vue?vue&type=template&id=74d56b20&scoped=true":
/*!***********************************************************************************!*\
  !*** ./src/components/BusinessCard.vue?vue&type=template&id=74d56b20&scoped=true ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BusinessCard_vue_vue_type_template_id_74d56b20_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BusinessCard_vue_vue_type_template_id_74d56b20_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BusinessCard.vue?vue&type=template&id=74d56b20&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BusinessCard.vue?vue&type=template&id=74d56b20&scoped=true\");\n\n\n//# sourceURL=webpack://bravo2/./src/components/BusinessCard.vue?");

/***/ }),

/***/ "./src/components/Dot.vue?vue&type=template&id=6c78dec9&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/components/Dot.vue?vue&type=template&id=6c78dec9&scoped=true ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dot_vue_vue_type_template_id_6c78dec9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dot_vue_vue_type_template_id_6c78dec9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dot.vue?vue&type=template&id=6c78dec9&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dot.vue?vue&type=template&id=6c78dec9&scoped=true\");\n\n\n//# sourceURL=webpack://bravo2/./src/components/Dot.vue?");

/***/ }),

/***/ "./src/views/HomeView.vue?vue&type=template&id=9ea40744":
/*!**************************************************************!*\
  !*** ./src/views/HomeView.vue?vue&type=template&id=9ea40744 ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_template_id_9ea40744__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_template_id_9ea40744__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeView.vue?vue&type=template&id=9ea40744 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=9ea40744\");\n\n\n//# sourceURL=webpack://bravo2/./src/views/HomeView.vue?");

/***/ }),

/***/ "./src/assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass":
/*!******************************************************************************************************!*\
  !*** ./src/assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_BusinessCard_sass_vue_type_style_index_0_id_74d56b20_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_BusinessCard_sass_vue_type_style_index_0_id_74d56b20_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_BusinessCard_sass_vue_type_style_index_0_id_74d56b20_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_BusinessCard_sass_vue_type_style_index_0_id_74d56b20_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_BusinessCard_sass_vue_type_style_index_0_id_74d56b20_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://bravo2/./src/assets/styles/BusinessCard.sass?");

/***/ }),

/***/ "./src/assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass":
/*!*********************************************************************************************!*\
  !*** ./src/assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_Dot_sass_vue_type_style_index_0_id_6c78dec9_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_Dot_sass_vue_type_style_index_0_id_6c78dec9_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_Dot_sass_vue_type_style_index_0_id_6c78dec9_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_Dot_sass_vue_type_style_index_0_id_6c78dec9_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_Dot_sass_vue_type_style_index_0_id_6c78dec9_scoped_true_lang_sass__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://bravo2/./src/assets/styles/Dot.sass?");

/***/ }),

/***/ "./src/assets/styles/base.sass?vue&type=style&index=0&lang=sass":
/*!**********************************************************************!*\
  !*** ./src/assets/styles/base.sass?vue&type=style&index=0&lang=sass ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_base_sass_vue_type_style_index_0_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./base.sass?vue&type=style&index=0&lang=sass */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/base.sass?vue&type=style&index=0&lang=sass\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_base_sass_vue_type_style_index_0_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_base_sass_vue_type_style_index_0_lang_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_base_sass_vue_type_style_index_0_lang_sass__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_base_sass_vue_type_style_index_0_lang_sass__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://bravo2/./src/assets/styles/base.sass?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/BusinessCard.sass?vue&type=style&index=0&id=74d56b20&scoped=true&lang=sass\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"7de4c0a2\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://bravo2/./src/assets/styles/BusinessCard.sass?./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use%5B3%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/Dot.sass?vue&type=style&index=0&id=6c78dec9&scoped=true&lang=sass\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"25821c8c\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://bravo2/./src/assets/styles/Dot.sass?./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use%5B3%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/base.sass?vue&type=style&index=0&lang=sass":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/base.sass?vue&type=style&index=0&lang=sass ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./base.sass?vue&type=style&index=0&lang=sass */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./src/assets/styles/base.sass?vue&type=style&index=0&lang=sass\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"31a11d74\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://bravo2/./src/assets/styles/base.sass?./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use%5B3%5D");

/***/ }),

/***/ "./src/assets/fonts/Unbounded-Bold.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Unbounded-Bold.ttf ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/Unbounded-Bold.ab5b2515.ttf\";\n\n//# sourceURL=webpack://bravo2/./src/assets/fonts/Unbounded-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Unbounded-ExtraBold.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Unbounded-ExtraBold.ttf ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/Unbounded-ExtraBold.75940482.ttf\";\n\n//# sourceURL=webpack://bravo2/./src/assets/fonts/Unbounded-ExtraBold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Unbounded-Medium.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Unbounded-Medium.ttf ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/Unbounded-Medium.f41032bd.ttf\";\n\n//# sourceURL=webpack://bravo2/./src/assets/fonts/Unbounded-Medium.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Unbounded-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/Unbounded-Regular.ttf ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/Unbounded-Regular.1699dcd8.ttf\";\n\n//# sourceURL=webpack://bravo2/./src/assets/fonts/Unbounded-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "bravo2:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbravo2"] = self["webpackChunkbravo2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;