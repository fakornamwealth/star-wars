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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n//Import the Link API to support client-side navigation\n\nvar _s = $RefreshSig$();\n\n\n\nasync function getData() {\n    const res = await fetch(\"https://swapi.dev/api/people\");\n    let data = await res.json();\n    return data;\n}\nconst itemStyle = {\n    backgroundColor: \"gray\",\n    margin: \"1em 0\",\n    padding: \"1em\",\n    color: \"#fff\",\n    cursor: \"pointer\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getData().then((newData)=>{\n            //console.log(newData.results)\n            setData(newData.results);\n        });\n    }, []);\n    function itemClickHandler() {\n        console.log(\"Item click...\");\n        redirect(\"/details\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: data.map((item, index)=>{\n            //console.log(item.name)\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: itemStyle,\n                className: \"item\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/details\",\n                    children: item.name\n                }, void 0, false, {\n                    fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 6\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/tao.zamorano/Documents/superprof/alberta/tasks/T12/star-wars/pages/index.js\",\n        lineNumber: 38,\n        columnNumber: 3\n    }, undefined);\n}, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVEQUF1RDtBQUN2RDs7QUFBMkM7QUFDQztBQUNmO0FBRzdCLGVBQWVJLFVBQVU7SUFDeEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO0lBQ3hCLElBQUlDLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUN6QixPQUFPRDtBQUNSO0FBRUEsTUFBTUUsWUFBWTtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxRQUFRO0FBQ1Q7QUFFQSwrREFBZSxPQUFNOztJQUVwQixNQUFNLENBQUNQLE1BQU1RLFFBQVEsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUVuQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNmRSxVQUFVWSxJQUFJLENBQUNDLENBQUFBLFVBQVc7WUFDekIsOEJBQThCO1lBQzlCRixRQUFRRSxRQUFRQyxPQUFPO1FBQ3hCO0lBQ0QsR0FBRyxFQUFFO0lBRUwsU0FBU0MsbUJBQW1CO1FBQzNCQyxRQUFRQyxHQUFHLENBQUM7UUFDWkMsU0FBUztJQUNWO0lBRUEscUJBQ0MsOERBQUN0Qiw0REFBTUE7a0JBQ0xPLEtBQUtnQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtZQUMxQix3QkFBd0I7WUFDeEIscUJBQ0MsOERBQUNDO2dCQUFnQkMsT0FBT2xCO2dCQUFXbUIsV0FBVTswQkFDNUMsNEVBQUN6QixrREFBSUE7b0JBQUMwQixNQUFLOzhCQUNUTCxLQUFLTSxJQUFJOzs7Ozs7ZUFGRkw7Ozs7O1FBTVo7Ozs7OztBQUdILG9DQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy9JbXBvcnQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3Blb3BsZScpO1xyXG5cdGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRyZXR1cm4gZGF0YTtcclxufVxyXG5cclxuY29uc3QgaXRlbVN0eWxlID0ge1xyXG5cdGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG5cdG1hcmdpbjogJzFlbSAwJyxcclxuXHRwYWRkaW5nOiAnMWVtJyxcclxuXHRjb2xvcjogJyNmZmYnLFxyXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0RGF0YSgpLnRoZW4obmV3RGF0YSA9PiB7XHJcblx0XHRcdC8vY29uc29sZS5sb2cobmV3RGF0YS5yZXN1bHRzKVxyXG5cdFx0XHRzZXREYXRhKG5ld0RhdGEucmVzdWx0cyk7XHJcblx0XHR9KVxyXG5cdH0sIFtdKTtcclxuXHJcblx0ZnVuY3Rpb24gaXRlbUNsaWNrSGFuZGxlcigpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdJdGVtIGNsaWNrLi4uJyk7XHJcblx0XHRyZWRpcmVjdCgnL2RldGFpbHMnKTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGl0ZW0ubmFtZSlcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fSBzdHlsZT17aXRlbVN0eWxlfSBjbGFzc05hbWU9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0XHRcdHtpdGVtLm5hbWV9XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSl9XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn0iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiZ2V0RGF0YSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJpdGVtU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJjdXJzb3IiLCJzZXREYXRhIiwidGhlbiIsIm5ld0RhdGEiLCJyZXN1bHRzIiwiaXRlbUNsaWNrSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRpdiIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});