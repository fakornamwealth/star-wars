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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n//Import the Link API to support client-side navigation\n\nvar _s = $RefreshSig$();\n\n\nasync function getData() {\n    const res = await fetch(\"https://swapi.dev/api/people\");\n    let data = await res.json();\n    return data;\n}\nconst itemStyle = {\n    backgroundColor: \"gray\",\n    margin: \"1em 0\",\n    padding: \"1em\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getData().then((newData)=>{\n            setData(newData.results);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: data.map((item)=>{\n            console.log(item.name);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: itemStyle,\n                className: \"item\",\n                children: item.name\n            }, void 0, false, {\n                fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 6\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, undefined);\n}, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQ7O0FBQTJDO0FBQ0M7QUFFNUMsZUFBZUcsVUFBVTtJQUN4QixNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsSUFBSUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQ3pCLE9BQU9EO0FBQ1I7QUFFQSxNQUFNRSxZQUFZO0lBQ2pCQyxpQkFBaUI7SUFDakJDLFFBQVE7SUFDUkMsU0FBUztBQUNWO0FBRUEsK0RBQWUsT0FBTTs7SUFFcEIsTUFBTSxDQUFDTCxNQUFNTSxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkNDLGdEQUFTQSxDQUFDLElBQU07UUFDZkMsVUFBVVUsSUFBSSxDQUFDQyxDQUFBQSxVQUFXO1lBQ3pCRixRQUFRRSxRQUFRQyxPQUFPO1FBQ3hCO0lBQ0QsR0FBRyxFQUFFO0lBRUwscUJBQ0MsOERBQUNmLDREQUFNQTtrQkFDTE0sS0FBS1UsR0FBRyxDQUFDQyxDQUFBQSxPQUFRO1lBQ2pCQyxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLElBQUk7WUFDckIscUJBQ0MsOERBQUNDO2dCQUFJQyxPQUFPZDtnQkFBV2UsV0FBVTswQkFDL0JOLEtBQUtHLElBQUk7Ozs7OztRQUdiOzs7Ozs7QUFHSCxvQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vSW1wb3J0IHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb25cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3Blb3BsZScpO1xyXG5cdGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRyZXR1cm4gZGF0YTtcclxufVxyXG5cclxuY29uc3QgaXRlbVN0eWxlID0ge1xyXG5cdGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG5cdG1hcmdpbjogJzFlbSAwJyxcclxuXHRwYWRkaW5nOiAnMWVtJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0RGF0YSgpLnRoZW4obmV3RGF0YSA9PiB7XHJcblx0XHRcdHNldERhdGEobmV3RGF0YS5yZXN1bHRzKTtcclxuXHRcdH0pXHJcblx0fSwgW10pO1xyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHR7ZGF0YS5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coaXRlbS5uYW1lKVxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXtpdGVtU3R5bGV9IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdFx0e2l0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSl9XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn0iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIml0ZW1TdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsInBhZGRpbmciLCJzZXREYXRhIiwidGhlbiIsIm5ld0RhdGEiLCJyZXN1bHRzIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZGl2Iiwic3R5bGUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});