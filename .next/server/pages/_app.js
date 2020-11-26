module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_utils_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils/styles.css */ \"./src/utils/styles.css\");\n/* harmony import */ var _src_utils_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_utils_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/context */ \"./src/context.js\");\n\nvar _jsxFileName = \"/home/jou/Escritorio/jouhell/phasmophobia/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_context__WEBPACK_IMPORTED_MODULE_2__[\"TestsContextProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3RELHNCQUNFLHFFQUFDLGlFQUFEO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zcmMvdXRpbHMvc3R5bGVzLmNzcydcbmltcG9ydCB7IFRlc3RzQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vc3JjL2NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUZXN0c0NvbnRleHRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Rlc3RzQ29udGV4dFByb3ZpZGVyPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/context.js":
/*!************************!*\
  !*** ./src/context.js ***!
  \************************/
/*! exports provided: TestsContext, TestsContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TestsContext\", function() { return TestsContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TestsContextProvider\", function() { return TestsContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/jou/Escritorio/jouhell/phasmophobia/src/context.js\";\n //Context\n\nconst TestsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null); //Provider\n\nconst TestsContextProvider = ({\n  children\n}) => {\n  const [tests, setTests] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]); //ComponentDidMouunt\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {}, []); //\n\n  const values = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => ({\n    tests,\n    // States que seran visibles en el contexto.\n    setTests // Funciones que son exportadas para manejo externo.\n\n  }), [tests]); // States que serán visibles en el contexto.\n  // Interface donde será expuesto como proveedor y envolverá la App.\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TestsContext.Provider, {\n    value: values,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst useTestsContext = () => {\n  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(TestsContext);\n\n  if (!context) {\n    console.error('Error deploying App Context!!!');\n  }\n\n  return context;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useTestsContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC5qcz80NTQ0Il0sIm5hbWVzIjpbIlRlc3RzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUZXN0c0NvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidGVzdHMiLCJzZXRUZXN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ2YWx1ZXMiLCJ1c2VNZW1vIiwidXNlVGVzdHNDb250ZXh0IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztDQUVBOztBQUNPLE1BQU1BLFlBQVksZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUFsQyxDLENBRVA7O0FBQ08sTUFBTUMsb0JBQW9CLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDcEQsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQTFCLENBRG9ELENBR3BEOztBQUNBRCw4Q0FBSyxDQUFDRSxTQUFOLENBQWdCLE1BQU0sQ0FBRSxDQUF4QixFQUEwQixFQUExQixFQUpvRCxDQU1wRDs7QUFDQSxRQUFNQyxNQUFNLEdBQUdILDRDQUFLLENBQUNJLE9BQU4sQ0FDYixPQUFPO0FBQ0xOLFNBREs7QUFDRTtBQUNQQyxZQUZLLENBRUs7O0FBRkwsR0FBUCxDQURhLEVBS2IsQ0FBQ0QsS0FBRCxDQUxhLENBQWYsQ0FQb0QsQ0FhbEQ7QUFFRjs7QUFDQSxzQkFDRSxxRUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUVLLE1BQTlCO0FBQUEsY0FBdUNOO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUdELENBbkJNOztBQXFCUCxNQUFNUSxlQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNiLFlBQUQsQ0FBMUI7O0FBRUEsTUFBSSxDQUFDWSxPQUFMLEVBQWM7QUFDWkUsV0FBTyxDQUFDQyxLQUFSLENBQWMsZ0NBQWQ7QUFDRDs7QUFFRCxTQUFPSCxPQUFQO0FBQ0QsQ0FSRDs7QUFVZUQsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbi8vQ29udGV4dFxuZXhwb3J0IGNvbnN0IFRlc3RzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcblxuLy9Qcm92aWRlclxuZXhwb3J0IGNvbnN0IFRlc3RzQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGVzdHMsIHNldFRlc3RzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxuXG4gIC8vQ29tcG9uZW50RGlkTW91dW50XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7fSwgW10pXG5cbiAgLy9cbiAgY29uc3QgdmFsdWVzID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdGVzdHMsIC8vIFN0YXRlcyBxdWUgc2VyYW4gdmlzaWJsZXMgZW4gZWwgY29udGV4dG8uXG4gICAgICBzZXRUZXN0cywgLy8gRnVuY2lvbmVzIHF1ZSBzb24gZXhwb3J0YWRhcyBwYXJhIG1hbmVqbyBleHRlcm5vLlxuICAgIH0pLFxuICAgIFt0ZXN0c11cbiAgKSAvLyBTdGF0ZXMgcXVlIHNlcsOhbiB2aXNpYmxlcyBlbiBlbCBjb250ZXh0by5cblxuICAvLyBJbnRlcmZhY2UgZG9uZGUgc2Vyw6EgZXhwdWVzdG8gY29tbyBwcm92ZWVkb3IgeSBlbnZvbHZlcsOhIGxhIEFwcC5cbiAgcmV0dXJuIChcbiAgICA8VGVzdHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZXN9PntjaGlsZHJlbn08L1Rlc3RzQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5jb25zdCB1c2VUZXN0c0NvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRlc3RzQ29udGV4dClcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZXBsb3lpbmcgQXBwIENvbnRleHQhISEnKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVGVzdHNDb250ZXh0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context.js\n");

/***/ }),

/***/ "./src/utils/styles.css":
/*!******************************!*\
  !*** ./src/utils/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy91dGlscy9zdHlsZXMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/styles.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });