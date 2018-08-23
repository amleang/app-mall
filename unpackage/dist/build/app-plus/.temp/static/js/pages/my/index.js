global.webpackJsonp([3],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "main"
  }, [_c('view', {
    staticClass: "head"
  }, [_c('view', {
    staticClass: "head-img"
  }, [_c('image', {
    attrs: {
      "src": _vm.userinfo.avatarUrl,
      "mode": ""
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "username"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.userinfo.nickName) + "\n\t\t\t")])]), _vm._v(" "), _c('view', {
    staticClass: "head-btn"
  }, [_c('view', {
    staticClass: "btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.update_user_handle
    }
  }, [_vm._v("\n\t\t\t\t更新资料\n\t\t\t")])])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _index = __webpack_require__(5);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_index2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "我的" } };

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =

















{
	data: function data() {
		return {
			userinfo: {
				nickName: '赵安良😘',
				avatarUrl: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqBVsJytCEvOneQVaibPHiaX1dcYy4Fe0bAKqWIOPfOTzYCGN8ibNAia2ic8CY1rPibPhhQFQ2D0UDxPHrQ/132' } };


	},
	onShow: function onShow() {
		debugger;
		var userinfo = uni.getStorageSync("dacl_mall_user");
		console.log(userinfo);
		if (userinfo) {
			this.userinfo = JSON.parse(userinfo);
		}
	},
	methods: {
		update_user_handle: function update_user_handle() {

			uni.login({
				provider: 'weixin',
				success: function success(lres) {
					console.log("login=>", lres);
					uni.getUserInfo({
						withCredentials: true,
						provider: 'weixin',
						success: function success(ires) {
							uni.showToast({
								title: '更新成功!',
								duration: 2000 });

							uni.setStorageSync("dacl_mall_user", JSON.stringify(ires.userInfo));
							console.log("info=>", ires);
						} });

				} });

		} } };

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_Program_Files_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_Program_Files_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_Program_Files_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_Program_Files_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_Program_Files_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_Program_Files_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_Program_Files_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_Program_Files_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_Program_Files_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__D_Program_Files_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_64a1acf0_hasScoped_false_D_Program_Files_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_Program_Files_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(10);
function injectStyle (ssrContext) {
  __webpack_require__(27)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_Program_Files_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_Program_Files_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_Program_Files_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_Program_Files_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__D_Program_Files_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_64a1acf0_hasScoped_false_D_Program_Files_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_Program_Files_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[16]);