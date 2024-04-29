/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbravo2"] = self["webpackChunkbravo2"] || []).push([["src_views_Projects_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Dot_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Dot.vue */ \"./src/components/Dot.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AboutMe\",\n  components: {\n    DotLink: _components_Dot_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      projects: {\n        games: [\"https://iamhero.special.ink/\", \"https://fastcook.special.ink/\", \"https://petcafe.special.ink\", \"https://startup.special.ink\", \"https://fonbet.dev.special.ink/\", \"https://moskvateka.special.ink/\"],\n        product: [\"https://google.com\"],\n        pet: [\"https://google.com\"]\n      },\n      curProject: \"product_0\"\n    };\n  },\n  computed: {\n    image() {\n      return __webpack_require__(\"./src/assets/images sync recursive ^\\\\.\\\\/.*\\\\.png$\")(\"./\" + this.curProject + \".png\");\n    },\n    currentProjectUrl() {\n      const names = this.curProject.split(\"_\");\n      return this.projects[names[0]][names[1]];\n    }\n  }\n});\n\n//# sourceURL=webpack://bravo2/./src/views/Projects.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=template&id=6cfeddb4":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=template&id=6cfeddb4 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"page page_projects\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", {\n  style: {\n    \"margin-bottom\": \"40px\"\n  }\n}, \"Некоторые из моих проектов\", -1 /* HOISTED */);\nconst _hoisted_3 = {\n  class: \"projects-container\"\n};\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Игры\", -1 /* HOISTED */);\nconst _hoisted_5 = {\n  class: \"navigation\"\n};\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Продукты\", -1 /* HOISTED */);\nconst _hoisted_7 = {\n  class: \"navigation\"\n};\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Пет-проекты\", -1 /* HOISTED */);\nconst _hoisted_9 = {\n  class: \"navigation\"\n};\nconst _hoisted_10 = [\"href\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_DotLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DotLink\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"nav\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" eslint-disable-next-line \"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.projects.games, (p, i) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DotLink, {\n      key: i,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"dot-link_project\", {\n        'dot-link_project-current': $data.curProject === 'games_' + i\n      }]),\n      onClick: $event => $data.curProject = 'games_' + i\n    }, null, 8 /* PROPS */, [\"class\", \"onClick\"]);\n  }), 128 /* KEYED_FRAGMENT */))]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"nav\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" eslint-disable-next-line \"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.projects.product, (p, i) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DotLink, {\n      key: i,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"dot-link_project\", {\n        'dot-link_project-current': $data.curProject === 'product_' + i\n      }]),\n      onClick: $event => $data.curProject = 'product_' + i\n    }, null, 8 /* PROPS */, [\"class\", \"onClick\"]);\n  }), 128 /* KEYED_FRAGMENT */))]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"nav\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" eslint-disable-next-line \"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.projects.pet, (p, i) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DotLink, {\n      key: i,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"dot-link_project\", {\n        'dot-link_project-current': $data.curProject === 'pet_' + i\n      }]),\n      onClick: $event => $data.curProject = 'pet_' + i\n    }, null, 8 /* PROPS */, [\"class\", \"onClick\"]);\n  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    class: \"link\",\n    target: \"_blanck\",\n    href: $options.currentProjectUrl\n  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.currentProjectUrl), 9 /* TEXT, PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"image\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('background-image: url(' + $options.image + ')')\n  }, null, 4 /* STYLE */)]);\n}\n\n//# sourceURL=webpack://bravo2/./src/views/Projects.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".navigation {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.image {\\n  width: 400px;\\n  height: auto;\\n  aspect-ratio: 5/3;\\n  background-size: cover;\\n  background-position: center;\\n  margin: 40px auto 15px;\\n  outline: 3px solid #DD65B7;\\n  outline-offset: 12px;\\n  border-radius: 15px;\\n}\\n.link {\\n  color: #FFF5FF;\\n  text-decoration: none;\\n}\\n.link:visited {\\n  color: #938A93;\\n}\\n.projects-container {\\n  display: grid;\\n  grid-template-columns: max-content 1fr;\\n  margin-left: 40px;\\n  gap: 20px 20px;\\n  margin-bottom: 40px;\\n}\\n.projects-container h3 {\\n  color: #65d9dd;\\n}\\n@media (max-width: 600px) {\\n.image {\\n    width: 75vw;\\n}\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bravo2/./src/views/Projects.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/Projects.vue":
/*!********************************!*\
  !*** ./src/views/Projects.vue ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Projects_vue_vue_type_template_id_6cfeddb4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=6cfeddb4 */ \"./src/views/Projects.vue?vue&type=template&id=6cfeddb4\");\n/* harmony import */ var _Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js */ \"./src/views/Projects.vue?vue&type=script&lang=js\");\n/* harmony import */ var _Projects_vue_vue_type_style_index_0_id_6cfeddb4_lang_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass */ \"./src/views/Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass\");\n/* harmony import */ var _Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_mimikael_Documents_WebDev_personal_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Projects_vue_vue_type_template_id_6cfeddb4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/Projects.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://bravo2/./src/views/Projects.vue?");

/***/ }),

/***/ "./src/views/Projects.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/views/Projects.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://bravo2/./src/views/Projects.vue?");

/***/ }),

/***/ "./src/views/Projects.vue?vue&type=template&id=6cfeddb4":
/*!**************************************************************!*\
  !*** ./src/views/Projects.vue?vue&type=template&id=6cfeddb4 ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_6cfeddb4__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_6cfeddb4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=template&id=6cfeddb4 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=template&id=6cfeddb4\");\n\n\n//# sourceURL=webpack://bravo2/./src/views/Projects.vue?");

/***/ }),

/***/ "./src/views/Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass":
/*!*****************************************************************************!*\
  !*** ./src/views/Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_6cfeddb4_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_6cfeddb4_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_6cfeddb4_lang_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_6cfeddb4_lang_sass__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_27_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_27_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_27_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_27_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_6cfeddb4_lang_sass__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://bravo2/./src/views/Projects.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Projects.vue?vue&type=style&index=0&id=6cfeddb4&lang=sass\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"621486d4\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://bravo2/./src/views/Projects.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-27.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*\\.png$":
/*!***********************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*\.png$ ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./games_0.png\": \"./src/assets/images/games_0.png\",\n\t\"./games_1.png\": \"./src/assets/images/games_1.png\",\n\t\"./games_2.png\": \"./src/assets/images/games_2.png\",\n\t\"./games_3.png\": \"./src/assets/images/games_3.png\",\n\t\"./games_5.png\": \"./src/assets/images/games_5.png\",\n\t\"./pet_0.png\": \"./src/assets/images/pet_0.png\",\n\t\"./product_0.png\": \"./src/assets/images/product_0.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images sync recursive ^\\\\.\\\\/.*\\\\.png$\";\n\n//# sourceURL=webpack://bravo2/./src/assets/images/_sync_^\\.\\/.*\\.png$?");

/***/ }),

/***/ "./src/assets/images/games_0.png":
/*!***************************************!*\
  !*** ./src/assets/images/games_0.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/games_0.cc882dd3.png\";\n\n//# sourceURL=webpack://bravo2/./src/assets/images/games_0.png?");

/***/ }),

/***/ "./src/assets/images/games_1.png":
/*!***************************************!*\
  !*** ./src/assets/images/games_1.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/games_1.b31935c7.png\";\n\n//# sourceURL=webpack://bravo2/./src/assets/images/games_1.png?");

/***/ }),

/***/ "./src/assets/images/games_2.png":
/*!***************************************!*\
  !*** ./src/assets/images/games_2.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/games_2.6b8242e3.png\";\n\n//# sourceURL=webpack://bravo2/./src/assets/images/games_2.png?");

/***/ }),

/***/ "./src/assets/images/games_3.png":
/*!***************************************!*\
  !*** ./src/assets/images/games_3.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/games_3.5b2d1b4a.png\";\n\n//# sourceURL=webpack://bravo2/./src/assets/images/games_3.png?");

/***/ }),

/***/ "./src/assets/images/games_5.png":
/*!***************************************!*\
  !*** ./src/assets/images/games_5.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/games_5.4519d7bd.png\";\n\n//# sourceURL=webpack://bravo2/./src/assets/images/games_5.png?");

/***/ }),

/***/ "./src/assets/images/pet_0.png":
/*!*************************************!*\
  !*** ./src/assets/images/pet_0.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/pet_0.04013fd0.png\";\n\n//# sourceURL=webpack://bravo2/./src/assets/images/pet_0.png?");

/***/ }),

/***/ "./src/assets/images/product_0.png":
/*!*****************************************!*\
  !*** ./src/assets/images/product_0.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/product_0.04013fd0.png\";\n\n//# sourceURL=webpack://bravo2/./src/assets/images/product_0.png?");

/***/ })

}]);