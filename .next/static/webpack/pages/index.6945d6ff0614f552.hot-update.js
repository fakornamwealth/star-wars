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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n//Import the Link API to support client-side navigation\n\nvar _s = $RefreshSig$();\n\n\nasync function getData() {\n    const res = await fetch(\"https://swapi.dev/api/people\");\n    let data = await res.json();\n    return data;\n}\nconst itemStyle = {\n    backgroundColor: \"gray\",\n    margin: \"1em 0\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getData().then((newData)=>{\n            setData(newData.results);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: data.map((item)=>{\n            console.log(item.name);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: itemStyle,\n                className: \"item\",\n                children: item.name\n            }, void 0, false, {\n                fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 6\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, undefined);\n}, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQ7O0FBQTJDO0FBQ0M7QUFFNUMsZUFBZUcsVUFBVTtJQUN4QixNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsSUFBSUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQ3pCLE9BQU9EO0FBQ1I7QUFFQSxNQUFNRSxZQUFZO0lBQ2pCQyxpQkFBaUI7SUFDakJDLFFBQVE7QUFDVDtBQUVBLCtEQUFlLE9BQU07O0lBRXBCLE1BQU0sQ0FBQ0osTUFBTUssUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2ZDLFVBQVVTLElBQUksQ0FBQ0MsQ0FBQUEsVUFBVztZQUN6QkYsUUFBUUUsUUFBUUMsT0FBTztRQUN4QjtJQUNELEdBQUcsRUFBRTtJQUVMLHFCQUNDLDhEQUFDZCw0REFBTUE7a0JBQ0xNLEtBQUtTLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUTtZQUNqQkMsUUFBUUMsR0FBRyxDQUFDRixLQUFLRyxJQUFJO1lBQ3JCLHFCQUNDLDhEQUFDQztnQkFBSUMsT0FBT2I7Z0JBQVdjLFdBQVU7MEJBQy9CTixLQUFLRyxJQUFJOzs7Ozs7UUFHYjs7Ozs7O0FBR0gsb0NBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0ltcG9ydCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vc3dhcGkuZGV2L2FwaS9wZW9wbGUnKTtcclxuXHRsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0cmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmNvbnN0IGl0ZW1TdHlsZSA9IHtcclxuXHRiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuXHRtYXJnaW46ICcxZW0gMCcsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXREYXRhKCkudGhlbihuZXdEYXRhID0+IHtcclxuXHRcdFx0c2V0RGF0YShuZXdEYXRhLnJlc3VsdHMpO1xyXG5cdFx0fSlcclxuXHR9LCBbXSk7XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdHtkYXRhLm1hcChpdGVtID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpdGVtLm5hbWUpXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e2l0ZW1TdHlsZX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHR7aXRlbS5uYW1lfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9KX1cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiaXRlbVN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwic2V0RGF0YSIsInRoZW4iLCJuZXdEYXRhIiwicmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImRpdiIsInN0eWxlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});