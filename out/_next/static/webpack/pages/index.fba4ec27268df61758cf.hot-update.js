webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/list-of-cards.js":
/*!*****************************************!*\
  !*** ./src/components/list-of-cards.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./src/context.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.json */ \"./data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ \"./data.json\", 1);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/home/jou/Escritorio/jouhell/phasmophobia/src/components/list-of-cards.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"list-of-cards__Container\",\n  componentId: \"d3bqbv-0\"\n})([\"display:flex;overflow:auto;padding:16px;margin-top:64px;@media (max-width:663px){margin-top:24px;margin-bottom:64px;}> *{margin-right:24px;}>:last-child{margin-right:0;}\"]);\n_c = Container;\n\nvar ListOfCards = function ListOfCards() {\n  _s();\n\n  var _useTestsContext = Object(_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n      tests = _useTestsContext.tests;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(undefined),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var ghosts = _data_json__WEBPACK_IMPORTED_MODULE_6__.ghosts,\n      evidences = _data_json__WEBPACK_IMPORTED_MODULE_6__.evidences;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var testsFilter = Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"filter\"])(tests, function (test) {\n      return !!test;\n    });\n    var testsIds = Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"map\"])(testsFilter, function (item) {\n      return item.id;\n    });\n    var result = [];\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"isEmpty\"])(testsIds) || testsIds.length < 2) {\n      setState(undefined);\n      return;\n    }\n\n    var resultFiltered = Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"filter\"])(ghosts, function (ghost) {\n      var evidencesIdsSorted = Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"sortBy\"])(ghost.evidencesId);\n      var testsIdSorted = Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"sortBy\"])(testsIds); // const ghostEvidencesIds = take(evidencesIdsSorted, testsIds.length)\n\n      console.log(evidencesIdsSorted, testsIdSorted);\n      var differences = Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"difference\"])(evidencesIdsSorted, testsIdSorted);\n      var isTrue = differences.length <= 1;\n\n      if (isTrue && testsIds.length == 2) {\n        result.push(_objectSpread(_objectSpread({}, ghost), {}, {\n          difference: Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"find\"])(evidences, function (item) {\n            return item.id === differences[0];\n          }).label\n        }));\n      }\n\n      return isTrue;\n    });\n    setState(resultFiltered);\n  }, [tests]);\n  var renderCards = Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"map\"])(state, function (item) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread({}, item), item.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 44\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Container, {\n    children: renderCards\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(ListOfCards, \"GZvJ1prW8NoFb1NXmlXHbh46cf4=\", false, function () {\n  return [_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c2 = ListOfCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListOfCards);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ListOfCards\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC1vZi1jYXJkcy5qcz82MmM5Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkxpc3RPZkNhcmRzIiwidXNlVGVzdHNDb250ZXh0IiwidGVzdHMiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInN0YXRlIiwic2V0U3RhdGUiLCJnaG9zdHMiLCJkYXRhIiwiZXZpZGVuY2VzIiwidXNlRWZmZWN0IiwidGVzdHNGaWx0ZXIiLCJmaWx0ZXIiLCJ0ZXN0IiwidGVzdHNJZHMiLCJtYXAiLCJpdGVtIiwiaWQiLCJyZXN1bHQiLCJpc0VtcHR5IiwibGVuZ3RoIiwicmVzdWx0RmlsdGVyZWQiLCJnaG9zdCIsImV2aWRlbmNlc0lkc1NvcnRlZCIsInNvcnRCeSIsImV2aWRlbmNlc0lkIiwidGVzdHNJZFNvcnRlZCIsImNvbnNvbGUiLCJsb2ciLCJkaWZmZXJlbmNlcyIsImRpZmZlcmVuY2UiLCJpc1RydWUiLCJwdXNoIiwiZmluZCIsImxhYmVsIiwicmVuZGVyQ2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpTEFBZjtLQUFNRixTOztBQW9CTixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEseUJBQ05DLHdEQUFlLEVBRFQ7QUFBQSxNQUNoQkMsS0FEZ0Isb0JBQ2hCQSxLQURnQjs7QUFBQSxrQkFHRUMsc0RBQVEsQ0FBQ0MsU0FBRCxDQUhWO0FBQUEsTUFHakJDLEtBSGlCO0FBQUEsTUFHVkMsUUFIVTs7QUFBQSxNQUtoQkMsTUFMZ0IsR0FLTUMsdUNBTE4sQ0FLaEJELE1BTGdCO0FBQUEsTUFLUkUsU0FMUSxHQUtNRCx1Q0FMTixDQUtSQyxTQUxRO0FBT3hCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxXQUFXLEdBQUdDLHFEQUFNLENBQUNWLEtBQUQsRUFBUSxVQUFDVyxJQUFEO0FBQUEsYUFBVSxDQUFDLENBQUNBLElBQVo7QUFBQSxLQUFSLENBQTFCO0FBRUEsUUFBTUMsUUFBUSxHQUFHQyxrREFBRyxDQUFDSixXQUFELEVBQWMsVUFBQ0ssSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ0MsRUFBZjtBQUFBLEtBQWQsQ0FBcEI7QUFFQSxRQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFFQSxRQUFJQyxzREFBTyxDQUFDTCxRQUFELENBQVAsSUFBcUJBLFFBQVEsQ0FBQ00sTUFBVCxHQUFrQixDQUEzQyxFQUE4QztBQUM1Q2QsY0FBUSxDQUFDRixTQUFELENBQVI7QUFFQTtBQUNEOztBQUVELFFBQU1pQixjQUFjLEdBQUdULHFEQUFNLENBQUNMLE1BQUQsRUFBUyxVQUFDZSxLQUFELEVBQVc7QUFDL0MsVUFBTUMsa0JBQWtCLEdBQUdDLHFEQUFNLENBQUNGLEtBQUssQ0FBQ0csV0FBUCxDQUFqQztBQUVBLFVBQU1DLGFBQWEsR0FBR0YscURBQU0sQ0FBQ1YsUUFBRCxDQUE1QixDQUgrQyxDQUsvQzs7QUFFQWEsYUFBTyxDQUFDQyxHQUFSLENBQVlMLGtCQUFaLEVBQWdDRyxhQUFoQztBQUVBLFVBQU1HLFdBQVcsR0FBR0MseURBQVUsQ0FBQ1Asa0JBQUQsRUFBcUJHLGFBQXJCLENBQTlCO0FBRUEsVUFBTUssTUFBTSxHQUFHRixXQUFXLENBQUNULE1BQVosSUFBc0IsQ0FBckM7O0FBRUEsVUFBSVcsTUFBTSxJQUFJakIsUUFBUSxDQUFDTSxNQUFULElBQW1CLENBQWpDLEVBQW9DO0FBQ2xDRixjQUFNLENBQUNjLElBQVAsaUNBQ0tWLEtBREw7QUFFRVEsb0JBQVUsRUFBRUcsbURBQUksQ0FBQ3hCLFNBQUQsRUFBWSxVQUFDTyxJQUFEO0FBQUEsbUJBQVVBLElBQUksQ0FBQ0MsRUFBTCxLQUFZWSxXQUFXLENBQUMsQ0FBRCxDQUFqQztBQUFBLFdBQVosQ0FBSixDQUNUSztBQUhMO0FBS0Q7O0FBRUQsYUFBT0gsTUFBUDtBQUNELEtBdEI0QixDQUE3QjtBQXdCQXpCLFlBQVEsQ0FBQ2UsY0FBRCxDQUFSO0FBQ0QsR0F0Q1EsRUFzQ04sQ0FBQ25CLEtBQUQsQ0F0Q00sQ0FBVDtBQXdDQSxNQUFNaUMsV0FBVyxHQUFHcEIsa0RBQUcsQ0FBQ1YsS0FBRCxFQUFRLFVBQUNXLElBQUQ7QUFBQSx3QkFBVSxxRUFBQyw2Q0FBRCxvQkFBd0JBLElBQXhCLEdBQVdBLElBQUksQ0FBQ0MsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFWO0FBQUEsR0FBUixDQUF2QjtBQUVBLHNCQUFPLHFFQUFDLFNBQUQ7QUFBQSxjQUFZa0I7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQWxERDs7R0FBTW5DLFc7VUFDY0MsZ0Q7OztNQURkRCxXO0FBb0RTQSwwRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2xpc3Qtb2YtY2FyZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB1c2VUZXN0c0NvbnRleHQgZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2RhdGEuanNvbidcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgaXNFcXVhbCxcbiAgbWFwLFxuICBzb3J0QnksXG4gIGlzRW1wdHksXG4gIHRha2UsXG4gIGRpZmZlcmVuY2UsXG4gIGZpbmQsXG59IGZyb20gJ2xvZGFzaCdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY2M3B4KSB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICB9XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIH1cblxuICA+IDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbmBcblxuY29uc3QgTGlzdE9mQ2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGVzdHMgfSA9IHVzZVRlc3RzQ29udGV4dCgpXG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG5cbiAgY29uc3QgeyBnaG9zdHMsIGV2aWRlbmNlcyB9ID0gZGF0YVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGVzdHNGaWx0ZXIgPSBmaWx0ZXIodGVzdHMsICh0ZXN0KSA9PiAhIXRlc3QpXG5cbiAgICBjb25zdCB0ZXN0c0lkcyA9IG1hcCh0ZXN0c0ZpbHRlciwgKGl0ZW0pID0+IGl0ZW0uaWQpXG5cbiAgICBsZXQgcmVzdWx0ID0gW11cblxuICAgIGlmIChpc0VtcHR5KHRlc3RzSWRzKSB8fCB0ZXN0c0lkcy5sZW5ndGggPCAyKSB7XG4gICAgICBzZXRTdGF0ZSh1bmRlZmluZWQpXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdEZpbHRlcmVkID0gZmlsdGVyKGdob3N0cywgKGdob3N0KSA9PiB7XG4gICAgICBjb25zdCBldmlkZW5jZXNJZHNTb3J0ZWQgPSBzb3J0QnkoZ2hvc3QuZXZpZGVuY2VzSWQpXG5cbiAgICAgIGNvbnN0IHRlc3RzSWRTb3J0ZWQgPSBzb3J0QnkodGVzdHNJZHMpXG5cbiAgICAgIC8vIGNvbnN0IGdob3N0RXZpZGVuY2VzSWRzID0gdGFrZShldmlkZW5jZXNJZHNTb3J0ZWQsIHRlc3RzSWRzLmxlbmd0aClcblxuICAgICAgY29uc29sZS5sb2coZXZpZGVuY2VzSWRzU29ydGVkLCB0ZXN0c0lkU29ydGVkKVxuXG4gICAgICBjb25zdCBkaWZmZXJlbmNlcyA9IGRpZmZlcmVuY2UoZXZpZGVuY2VzSWRzU29ydGVkLCB0ZXN0c0lkU29ydGVkKVxuXG4gICAgICBjb25zdCBpc1RydWUgPSBkaWZmZXJlbmNlcy5sZW5ndGggPD0gMVxuXG4gICAgICBpZiAoaXNUcnVlICYmIHRlc3RzSWRzLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAuLi5naG9zdCxcbiAgICAgICAgICBkaWZmZXJlbmNlOiBmaW5kKGV2aWRlbmNlcywgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGRpZmZlcmVuY2VzWzBdKVxuICAgICAgICAgICAgLmxhYmVsLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNUcnVlXG4gICAgfSlcblxuICAgIHNldFN0YXRlKHJlc3VsdEZpbHRlcmVkKVxuICB9LCBbdGVzdHNdKVxuXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gbWFwKHN0YXRlLCAoaXRlbSkgPT4gPENhcmQga2V5PXtpdGVtLmlkfSB7Li4uaXRlbX0gLz4pXG5cbiAgcmV0dXJuIDxDb250YWluZXI+e3JlbmRlckNhcmRzfTwvQ29udGFpbmVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0T2ZDYXJkc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/list-of-cards.js\n");

/***/ })

})