"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n//Remember that component names should always start with a Capital letter.\n/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. \r\nThis is obviously not always necessary. \r\nTo support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/ \n\nconst linkStyle = {\n    marginRight: 15,\n    display: \"inline-block\"\n};\nconst imgStyle = {\n    maxWidth: \"100%\"\n};\nconst headerStyle = {\n    backgroundImage: \"url(/static/images/star-wars.jpg/)\",\n    backgroundSize: \"cover\",\n    display: \"flex\",\n    alignItems: \"center\",\n    height: \"100vh\",\n    maxHeight: \"600px\"\n};\nconst Header = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: headerStyle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"display-1\",\n                    children: \"Star Wars\"\n                }, void 0, false, {\n                    fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/components/Header.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    style: linkStyle,\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/components/Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/components/Header.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/components/Header.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/components/Header.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBFQUEwRTtBQUUxRTtBQUdBLE9BQU9BLFVBQVUsWUFBVztBQUU1QixNQUFNQyxZQUFZO0FBQ0g7SUFDYkUsU0FBUztBQUNYO0FBRUEsTUFBTUMsV0FBVzs7QUFFakI7QUFFQSxNQUFNRSxjQUFjOztJQUVsQkUsZ0JBQWdCO0lBQ2hCTCxTQUFTO0lBQ1RNLFlBQVk7SUFDWkMsUUFBUTtJQUNSQyxXQUFXO0FBQ2I7QUFFQSxNQUFNQyxTQUFTOztrQkFFUCw0RUFBQ0M7WUFBSUUsV0FBVTs7OEJBQ2I7b0JBQUlBOzhCQUFzQjs7Ozs7OzhCQUMxQjs0QkFBTUQ7b0JBQWtCRyxNQUFLOzhCQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FMTkw7QUFXTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUmVtZW1iZXIgdGhhdCBjb21wb25lbnQgbmFtZXMgc2hvdWxkIGFsd2F5cyBzdGFydCB3aXRoIGEgQ2FwaXRhbCBsZXR0ZXIuXHJcblxyXG4vKlNpbmNlIE5leHQuanMgaXMgdXNlZCB0byBjcmVhdGUgc2VydmVyLXJlbmRlcmVkIHBhZ2VzLCBhZGRpbmcgYSBsaW5rIHVzaW5nIGEgbm9ybWFsIDxhPiB0YWcgd291bGQgY2F1c2UgYSBsaW5rIHRoYXQgd291bGQgYmUgbmF2aWdhdGVkIHRvIHZpYSB0aGUgc2VydmVyLiBcclxuVGhpcyBpcyBvYnZpb3VzbHkgbm90IGFsd2F5cyBuZWNlc3NhcnkuIFxyXG5UbyBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24gKHRoaXMgdGFrZXMgcGxhY2UgaW4gdGhlIGJyb3dzZXIsIHdpdGhvdXQgbWFraW5nIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyKSB3ZSB1c2UgTmV4dC5qc+KAmSBMaW5rIEFQSS4qL1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IDE1LFxyXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXHJcbn1cclxuXHJcbmNvbnN0IGltZ1N0eWxlID0ge1xyXG5cdG1heFdpZHRoOiAnMTAwJSdcclxufVxyXG5cclxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XHJcbiAgYmFja2dyb3VuZEltYWdlOiAndXJsKC9zdGF0aWMvaW1hZ2VzL3N0YXItd2Fycy5qcGcvKScsXHJcbiAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIGhlaWdodDogJzEwMHZoJyxcclxuICBtYXhIZWlnaHQ6ICc2MDBweCdcclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTEnPlN0YXIgV2FyczwvaDE+XHJcbiAgICAgICAgICA8TGluayBzdHlsZT17bGlua1N0eWxlfSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8cD5Ib21lPC9wPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJMaW5rIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwiaW1nU3R5bGUiLCJtYXhXaWR0aCIsImhlYWRlclN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwiSGVhZGVyIiwiZGl2Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJoMSIsImhyZWYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});