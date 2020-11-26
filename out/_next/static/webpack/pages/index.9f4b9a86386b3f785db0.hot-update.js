webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/jou/Escritorio/jouhell/phasmophobia/src/components/card.js\",\n    _this = undefined;\n\n\n\n // import Img from '../../public/gosht.jpg'\n\nvar fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])([\"0%{opacity:0;}100%{opacity:1;}\"]); // const Image = styled.div`\n//   background-image: url(${Img});\n//   background-position: center top;\n//   background-size: cover;\n//   height: 208px;\n// `\n\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2.withConfig({\n  displayName: \"card__SubTitle\",\n  componentId: \"sc-1aa8za-0\"\n})([\"font-size:14px;margin:0;\"]);\n_c = SubTitle;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1.withConfig({\n  displayName: \"card__Title\",\n  componentId: \"sc-1aa8za-1\"\n})([\"font-size:18px;margin:0;text-align:center;\"]);\n_c2 = Title;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"card__Container\",\n  componentId: \"sc-1aa8za-2\"\n})([\"animation:\", \" ease 5s;background-color:#010409;border-radius:8px;border:0.5px solid #f2f2f2;color:white;max-width:224px;min-width:224px;padding:24px 16px;> *{margin-bottom:8px;}>:last-child{margin-bottom:0;}\"], fadeIn);\n_c3 = Container;\n\nvar Card = function Card(props) {\n  var name = props.name,\n      difference = props.difference,\n      strengths = props.strengths,\n      weaknesses = props.weaknesses;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n      children: difference\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      src: \"/gosht.jpg\",\n      alt: \"gosht\",\n      height: 208,\n      width: 200,\n      quality: 100,\n      objectFit: \"cover\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SubTitle, {\n      children: \"Fortalezas\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: strengths\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SubTitle, {\n      children: \"Debilidades\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: weaknesses\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n\n_c4 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"SubTitle\");\n$RefreshReg$(_c2, \"Title\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZC5qcz8yNGMzIl0sIm5hbWVzIjpbImZhZGVJbiIsImtleWZyYW1lcyIsIlN1YlRpdGxlIiwic3R5bGVkIiwiaDIiLCJUaXRsZSIsImgxIiwiQ29udGFpbmVyIiwiZGl2IiwiQ2FyZCIsInByb3BzIiwibmFtZSIsImRpZmZlcmVuY2UiLCJzdHJlbmd0aHMiLCJ3ZWFrbmVzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsbUVBQUgsb0NBQVosQyxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsZ0NBQWQ7S0FBTUYsUTtBQUtOLElBQU1HLEtBQUssR0FBR0YseURBQU0sQ0FBQ0csRUFBVjtBQUFBO0FBQUE7QUFBQSxrREFBWDtNQUFNRCxLO0FBTU4sSUFBTUUsU0FBUyxHQUFHSix5REFBTSxDQUFDSyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlOQUNBUixNQURBLENBQWY7TUFBTU8sUzs7QUFtQk4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZEMsSUFEYyxHQUM4QkQsS0FEOUIsQ0FDZEMsSUFEYztBQUFBLE1BQ1JDLFVBRFEsR0FDOEJGLEtBRDlCLENBQ1JFLFVBRFE7QUFBQSxNQUNJQyxTQURKLEdBQzhCSCxLQUQ5QixDQUNJRyxTQURKO0FBQUEsTUFDZUMsVUFEZixHQUM4QkosS0FEOUIsQ0FDZUksVUFEZjtBQUd0QixzQkFDRSxxRUFBQyxTQUFEO0FBQUEsNEJBQ0UscUVBQUMsS0FBRDtBQUFBLGdCQUFRRjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGlEQUFEO0FBQ0UsU0FBRyxFQUFDLFlBRE47QUFFRSxTQUFHLEVBQUMsT0FGTjtBQUdFLFlBQU0sRUFBRSxHQUhWO0FBSUUsV0FBSyxFQUFFLEdBSlQ7QUFLRSxhQUFPLEVBQUUsR0FMWDtBQU1FLGVBQVMsRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVVFLHFFQUFDLEtBQUQ7QUFBQSxnQkFBUUQ7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUFXRSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUFZRTtBQUFBLGdCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWFFLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRixlQWNFO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBckJEOztNQUFNTCxJO0FBdUJTQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vLyBpbXBvcnQgSW1nIGZyb20gJy4uLy4uL3B1YmxpYy9nb3NodC5qcGcnXG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge29wYWNpdHk6MDt9XG4gIDEwMCUge29wYWNpdHk6MTt9XG5gXG5cbi8vIGNvbnN0IEltYWdlID0gc3R5bGVkLmRpdmBcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7SW1nfSk7XG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgIGhlaWdodDogMjA4cHg7XG4vLyBgXG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFuaW1hdGlvbjogJHtmYWRlSW59IGVhc2UgNXM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTA0MDk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZjJmMmYyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1heC13aWR0aDogMjI0cHg7XG4gIG1pbi13aWR0aDogMjI0cHg7XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcblxuICA+ICoge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gID4gOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmBcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG5hbWUsIGRpZmZlcmVuY2UsIHN0cmVuZ3Rocywgd2Vha25lc3NlcyB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8VGl0bGU+e2RpZmZlcmVuY2V9PC9UaXRsZT5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9XCIvZ29zaHQuanBnXCJcbiAgICAgICAgYWx0PVwiZ29zaHRcIlxuICAgICAgICBoZWlnaHQ9ezIwOH1cbiAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAvPlxuICAgICAgPFRpdGxlPntuYW1lfTwvVGl0bGU+XG4gICAgICA8U3ViVGl0bGU+Rm9ydGFsZXphczwvU3ViVGl0bGU+XG4gICAgICA8cD57c3RyZW5ndGhzfTwvcD5cbiAgICAgIDxTdWJUaXRsZT5EZWJpbGlkYWRlczwvU3ViVGl0bGU+XG4gICAgICA8cD57d2Vha25lc3Nlc308L3A+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/card.js\n");

/***/ })

})