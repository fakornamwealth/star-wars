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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n//Import the Link API to support client-side navigation\n\nvar _s = $RefreshSig$();\n\n\n\nasync function getData() {\n    const res = await fetch(\"https://swapi.dev/api/people\");\n    let data = await res.json();\n    return data;\n}\nconst itemStyle = {\n    backgroundColor: \"gray\",\n    margin: \"1em 0\",\n    padding: \"1em\",\n    color: \"#fff\",\n    cursor: \"pointer\"\n};\nfunction itemClickHandler() {\n    console.log(\"Item click...\");\n    (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.redirect)(\"/details\");\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getData().then((newData)=>{\n            //console.log(newData.results)\n            setData(newData.results);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: data.map((item, index)=>{\n            //console.log(item.name)\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: itemStyle,\n                className: \"item\",\n                onClick: itemClickHandler,\n                children: item.name\n            }, index, false, {\n                fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 6\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, undefined);\n}, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVEQUF1RDtBQUN2RDs7QUFBMkM7QUFDQztBQUNEO0FBRTNDLGVBQWVJLFVBQVU7SUFDeEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO0lBQ3hCLElBQUlDLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUN6QixPQUFPRDtBQUNSO0FBRUEsTUFBTUUsWUFBWTtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxRQUFRO0FBQ1Q7QUFFQSxTQUFTQyxtQkFBbUI7SUFDM0JDLFFBQVFDLEdBQUcsQ0FBQztJQUNaZCx5REFBUUEsQ0FBQztBQUNWO0FBRUEsK0RBQWUsT0FBTTs7SUFFcEIsTUFBTSxDQUFDSSxNQUFNVyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2ZFLFVBQVVlLElBQUksQ0FBQ0MsQ0FBQUEsVUFBVztZQUN6Qiw4QkFBOEI7WUFDOUJGLFFBQVFFLFFBQVFDLE9BQU87UUFDeEI7SUFDRCxHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ3JCLDREQUFNQTtrQkFDTE8sS0FBS2UsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7WUFDMUIsd0JBQXdCO1lBQ3hCLHFCQUNDLDhEQUFDQztnQkFBZ0JDLE9BQU9qQjtnQkFBV2tCLFdBQVU7Z0JBQU9DLFNBQVNiOzBCQUMzRFEsS0FBS00sSUFBSTtlQURETDs7Ozs7UUFJWjs7Ozs7O0FBR0gsb0NBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0ltcG9ydCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3Blb3BsZScpO1xyXG5cdGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRyZXR1cm4gZGF0YTtcclxufVxyXG5cclxuY29uc3QgaXRlbVN0eWxlID0ge1xyXG5cdGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG5cdG1hcmdpbjogJzFlbSAwJyxcclxuXHRwYWRkaW5nOiAnMWVtJyxcclxuXHRjb2xvcjogJyNmZmYnLFxyXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxyXG59XHJcblxyXG5mdW5jdGlvbiBpdGVtQ2xpY2tIYW5kbGVyKCkge1xyXG5cdGNvbnNvbGUubG9nKCdJdGVtIGNsaWNrLi4uJyk7XHJcblx0cmVkaXJlY3QoJy9kZXRhaWxzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXREYXRhKCkudGhlbihuZXdEYXRhID0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhuZXdEYXRhLnJlc3VsdHMpXHJcblx0XHRcdHNldERhdGEobmV3RGF0YS5yZXN1bHRzKTtcclxuXHRcdH0pXHJcblx0fSwgW10pO1xyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHR7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhpdGVtLm5hbWUpXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e2l0ZW1TdHlsZX0gY2xhc3NOYW1lPVwiaXRlbVwiIG9uQ2xpY2s9e2l0ZW1DbGlja0hhbmRsZXJ9PlxyXG5cdFx0XHRcdFx0XHR7aXRlbS5uYW1lfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9KX1cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJlZGlyZWN0IiwiZ2V0RGF0YSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJpdGVtU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJjdXJzb3IiLCJpdGVtQ2xpY2tIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInNldERhdGEiLCJ0aGVuIiwibmV3RGF0YSIsInJlc3VsdHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJzdHlsZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});