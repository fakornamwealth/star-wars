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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n//Import the Link API to support client-side navigation\n\nvar _s = $RefreshSig$();\n\n\nasync function getData() {\n    const res = await fetch(\"https://swapi.dev/api/people\");\n    let data = await res.json();\n    console.log(data);\n    return data;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const data = getData();\n        console.log(data);\n    }, []);\n    /*\r\n\t{data.results.map(item => {\r\n\t\tconsole.log(item);\r\n\t})}\r\n\t*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Star Wars\"\n        }, void 0, false, {\n            fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n            lineNumber: 26,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n}, \"OD7bBpZva5O2jO+Puf00hKivP7c=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQ7O0FBQTJDO0FBQ1Q7QUFFbEMsZUFBZUUsVUFBVTtJQUN4QixNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsSUFBSUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQ3pCQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osT0FBT0E7QUFDUjtBQUVBLCtEQUFlLE9BQU07O0lBRXBCSixnREFBU0EsQ0FBQyxJQUFNO1FBQ2YsTUFBTUksT0FBT0g7UUFDYkssUUFBUUMsR0FBRyxDQUFDSDtJQUNiLEdBQUcsRUFBRTtJQUNMO2tCQVFFOzs7Ozs7Ozs7Ozs7QUFJSCxtQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vSW1wb3J0IHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb25cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3N3YXBpLmRldi9hcGkvcGVvcGxlJyk7XHJcblx0bGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0gZ2V0RGF0YSgpO1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSlcclxuXHR9LCBbXSlcclxuXHQvKlxyXG5cdHtkYXRhLnJlc3VsdHMubWFwKGl0ZW0gPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coaXRlbSk7XHJcblx0fSl9XHJcblx0Ki9cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxoMT5TdGFyIFdhcnM8L2gxPlxyXG5cdFx0XHRcclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});