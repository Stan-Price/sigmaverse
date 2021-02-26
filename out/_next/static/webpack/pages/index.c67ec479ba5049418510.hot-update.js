webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuse.js */ \"./node_modules/fuse.js/dist/fuse.esm.js\");\n\n\nvar _jsxFileName = \"/Users/usovdmitrij/projects/sigmaverse/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar fuseOptions = {\n  shouldSort: true,\n  threshold: 0.4,\n  ignoreLocation: true,\n  maxPatternLength: 12,\n  minMatchCharLength: 1,\n  keys: ['name', 'description', 'appCategory']\n};\nvar __N_SSG = true;\nfunction IndexPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var applications = _ref.applications;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      searchedValue = _useState[0],\n      setSearchedValue = _useState[1];\n\n  var fuse = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return new fuse_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](applications, fuseOptions);\n  }, [applications]);\n  var searchedApplications = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return fuse.search(searchedValue).map(function (_ref2) {\n      var item = _ref2.item;\n      return item;\n    });\n  }, [searchedValue, fuse]);\n  var data = searchedValue ? searchedApplications : applications;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"head\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"navigation\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          className: \"navigation-list\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"navigation-list__item\",\n            children: \"Add dApp\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"navigation-list__item\",\n            children: \"Ergo\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"navigation-list__item\",\n            children: \"Explorer\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"header\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"header__content\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"header__introduce\",\n            children: \"SIGMAVERSE\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"header__paragraph\",\n            children: [\"Your portal to the\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              style: {\n                color: '#ff4421',\n                textDecoration: 'none'\n              },\n              href: \"https://ergoplatform.org\",\n              target: \"_blank\",\n              children: \"Ergo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, this), ' ', \"dApp universe\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"sigma-ergonaut\",\n            src: \"/images/Ergonaut_4k.png\",\n            alt: \"ergonaut\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"search\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"search__input-group\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          width: \"16\",\n          height: \"16\",\n          viewBox: \"0 0 16 16\",\n          fill: \"none\",\n          role: \"img\",\n          className: \"icon fill-current search-icon\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            fillRule: \"evenodd\",\n            clipRule: \"evenodd\",\n            d: \"M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: function onChange(_ref3) {\n            var value = _ref3.target.value;\n            return setSearchedValue(value);\n          },\n          value: searchedValue,\n          className: \"search__input\",\n          type: \"text\",\n          placeholder: \"Search for dApps...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dapps\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"dapps__content\",\n        children: data.map(function (_ref4) {\n          var logo = _ref4.logo,\n              preview = _ref4.preview,\n              name = _ref4.name,\n              description = _ref4.description,\n              website = _ref4.website;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: website,\n            target: \"_blank\",\n            className: \"dapps-card\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: preview,\n              alt: \"\".concat(name, \" preview\"),\n              className: \"dapps-card__preview\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"dapps-card__content\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"dapps-card__header\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: logo,\n                  alt: \"\".concat(name, \" logotype\"),\n                  className: \"dapps-card__logotype\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 19\n                }, _this), ' ', name]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"dapps-card__description\",\n                children: description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)]\n          }, logo, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(IndexPage, \"UNXmElIatpXS4bollzHbBKSEwjo=\");\n\n_c = IndexPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZnVzZU9wdGlvbnMiLCJzaG91bGRTb3J0IiwidGhyZXNob2xkIiwiaWdub3JlTG9jYXRpb24iLCJtYXhQYXR0ZXJuTGVuZ3RoIiwibWluTWF0Y2hDaGFyTGVuZ3RoIiwia2V5cyIsIkluZGV4UGFnZSIsImFwcGxpY2F0aW9ucyIsInVzZVN0YXRlIiwic2VhcmNoZWRWYWx1ZSIsInNldFNlYXJjaGVkVmFsdWUiLCJmdXNlIiwidXNlTWVtbyIsIkZ1c2UiLCJzZWFyY2hlZEFwcGxpY2F0aW9ucyIsInNlYXJjaCIsIm1hcCIsIml0ZW0iLCJkYXRhIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsInZhbHVlIiwidGFyZ2V0IiwibG9nbyIsInByZXZpZXciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ3ZWJzaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsWUFBVSxFQUFFLElBRE07QUFFbEJDLFdBQVMsRUFBRSxHQUZPO0FBR2xCQyxnQkFBYyxFQUFFLElBSEU7QUFJbEJDLGtCQUFnQixFQUFFLEVBSkE7QUFLbEJDLG9CQUFrQixFQUFFLENBTEY7QUFNbEJDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxhQUFULEVBQXdCLGFBQXhCO0FBTlksQ0FBcEI7O0FBU2UsU0FBU0MsU0FBVCxPQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQXJCQyxZQUFxQixRQUFyQkEsWUFBcUI7O0FBQUEsa0JBQ2JDLHNEQUFRLENBQUMsRUFBRCxDQURLO0FBQUEsTUFDaERDLGFBRGdEO0FBQUEsTUFDakNDLGdCQURpQzs7QUFFdkQsTUFBTUMsSUFBSSxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTSxJQUFJQywrQ0FBSixDQUFTTixZQUFULEVBQXVCUixXQUF2QixDQUFOO0FBQUEsR0FBRCxFQUE0QyxDQUFDUSxZQUFELENB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QUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0RUQ7O0dBcEZ1QmpCLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xuXG5jb25zdCBmdXNlT3B0aW9ucyA9IHtcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgdGhyZXNob2xkOiAwLjQsXG4gIGlnbm9yZUxvY2F0aW9uOiB0cnVlLFxuICBtYXhQYXR0ZXJuTGVuZ3RoOiAxMixcbiAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICBrZXlzOiBbJ25hbWUnLCAnZGVzY3JpcHRpb24nLCAnYXBwQ2F0ZWdvcnknXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSh7IGFwcGxpY2F0aW9ucyB9OiBhbnkpIHtcbiAgY29uc3QgW3NlYXJjaGVkVmFsdWUsIHNldFNlYXJjaGVkVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBmdXNlID0gdXNlTWVtbygoKSA9PiBuZXcgRnVzZShhcHBsaWNhdGlvbnMsIGZ1c2VPcHRpb25zKSwgW2FwcGxpY2F0aW9uc10pO1xuICBjb25zdCBzZWFyY2hlZEFwcGxpY2F0aW9ucyA9IHVzZU1lbW8oKCkgPT4gZnVzZS5zZWFyY2goc2VhcmNoZWRWYWx1ZSkubWFwKCh7IGl0ZW0gfSkgPT4gaXRlbSksIFtcbiAgICBzZWFyY2hlZFZhbHVlLFxuICAgIGZ1c2UsXG4gIF0pO1xuICBjb25zdCBkYXRhID0gc2VhcmNoZWRWYWx1ZSA/IHNlYXJjaGVkQXBwbGljYXRpb25zIDogYXBwbGljYXRpb25zO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tbGlzdF9faXRlbVwiPkFkZCBkQXBwPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWxpc3RfX2l0ZW1cIj5FcmdvPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWxpc3RfX2l0ZW1cIj5FeHBsb3JlcjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJfX2ludHJvZHVjZVwiPlNJR01BVkVSU0U8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyX19wYXJhZ3JhcGhcIj5cbiAgICAgICAgICAgICAgWW91ciBwb3J0YWwgdG8gdGhleycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmZjQ0MjEnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZXJnb3BsYXRmb3JtLm9yZ1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVyZ29cbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIGRBcHAgdW5pdmVyc2VcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzaWdtYS1lcmdvbmF1dFwiIHNyYz1cIi9pbWFnZXMvRXJnb25hdXRfNGsucG5nXCIgYWx0PVwiZXJnb25hdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfX2lucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGZpbGwtY3VycmVudCBzZWFyY2gtaWNvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xMC42MDAyIDEyLjA0OThDOS40OTc1OCAxMi44NTY4IDguMTM3NzcgMTMuMzMzMyA2LjY2NjY3IDEzLjMzMzNDMi45ODQ3NyAxMy4zMzMzIDAgMTAuMzQ4NiAwIDYuNjY2NjdDMCAyLjk4NDc3IDIuOTg0NzcgMCA2LjY2NjY3IDBDMTAuMzQ4NiAwIDEzLjMzMzMgMi45ODQ3NyAxMy4zMzMzIDYuNjY2NjdDMTMuMzMzMyA4LjE1NjM3IDEyLjg0NDcgOS41MzE5NCAxMi4wMTkgMTAuNjQxOUMxMi4wMjY1IDEwLjY0ODkgMTIuMDMzOCAxMC42NTYgMTIuMDQxMSAxMC42NjMzTDE1LjI5MzUgMTMuOTE1N0MxNS42ODQxIDE0LjMwNjMgMTUuNjg0MSAxNC45Mzk0IDE1LjI5MzUgMTUuMzNDMTQuOTAzIDE1LjcyMDUgMTQuMjY5OSAxNS43MjA1IDEzLjg3OTMgMTUuMzNMMTAuNjI2OSAxMi4wNzc1QzEwLjYxNzggMTIuMDY4NCAxMC42MDg5IDEyLjA1OTIgMTAuNjAwMiAxMi4wNDk4Wk0xMS4zMzMzIDYuNjY2NjdDMTEuMzMzMyA5LjI0NCA5LjI0NCAxMS4zMzMzIDYuNjY2NjcgMTEuMzMzM0M0LjA4OTM0IDExLjMzMzMgMiA5LjI0NCAyIDYuNjY2NjdDMiA0LjA4OTM0IDQuMDg5MzQgMiA2LjY2NjY3IDJDOS4yNDQgMiAxMS4zMzMzIDQuMDg5MzQgMTEuMzMzMyA2LjY2NjY3WlwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFNlYXJjaGVkVmFsdWUodmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaGVkVmFsdWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hfX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBkQXBwcy4uLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFwcHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXBwc19fY29udGVudFwiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoeyBsb2dvLCBwcmV2aWV3LCBuYW1lLCBkZXNjcmlwdGlvbiwgd2Vic2l0ZSB9OiBhbnkpID0+IChcbiAgICAgICAgICAgIDxhIGtleT17bG9nb30gaHJlZj17d2Vic2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiZGFwcHMtY2FyZFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cHJldmlld30gYWx0PXtgJHtuYW1lfSBwcmV2aWV3YH0gY2xhc3NOYW1lPVwiZGFwcHMtY2FyZF9fcHJldmlld1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFwcHMtY2FyZF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFwcHMtY2FyZF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PXtgJHtuYW1lfSBsb2dvdHlwZWB9IGNsYXNzTmFtZT1cImRhcHBzLWNhcmRfX2xvZ290eXBlXCIgLz57JyAnfVxuICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGFwcHMtY2FyZF9fZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYXBwbGljYXRpb25zRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdhcHBsaWNhdGlvbnMnKTtcbiAgY29uc3QgYXBwbGljYXRpb25zSW1hZ2VzRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMvaW1hZ2VzL2FwcGxpY2F0aW9ucycpO1xuXG4gIGlmICghZnMuZXhpc3RzU3luYyhhcHBsaWNhdGlvbnNJbWFnZXNEaXJlY3RvcnkpKSB7XG4gICAgZnMubWtkaXJTeW5jKGFwcGxpY2F0aW9uc0ltYWdlc0RpcmVjdG9yeSk7XG4gIH1cblxuICBjb25zdCBmaWxlbmFtZXMgPSBmcy5yZWFkZGlyU3luYyhhcHBsaWNhdGlvbnNEaXJlY3RvcnkpO1xuXG4gIGNvbnN0IGFwcGxpY2F0aW9ucyA9IGZpbGVuYW1lcy5tYXAoKGZpbGVuYW1lKSA9PiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oYXBwbGljYXRpb25zRGlyZWN0b3J5LCBmaWxlbmFtZSk7XG4gICAgY29uc3QgeyBkYXRhIH06IGFueSA9IG1hdHRlcihmcy5yZWFkRmlsZVN5bmMoYCR7ZmlsZVBhdGh9L292ZXJ2aWV3Lm1kYCwgJ3V0ZjgnKSk7XG4gICAgY29uc3QgbmV3TG9nb1BhdGggPSBgL2ltYWdlcy9hcHBsaWNhdGlvbnMvJHtkYXRhLmxvZ29faW1hZ2V9YDtcbiAgICBjb25zdCBuZXdQcmV2aWV3UGF0aCA9IGAvaW1hZ2VzL2FwcGxpY2F0aW9ucy8ke2RhdGEucHJldmlld19pbWFnZX1gO1xuXG4gICAgZnMuY29weUZpbGVTeW5jKFxuICAgICAgYCR7ZmlsZVBhdGh9LyR7ZGF0YS5sb2dvX2ltYWdlfWAsXG4gICAgICBgJHthcHBsaWNhdGlvbnNJbWFnZXNEaXJlY3Rvcnl9LyR7ZGF0YS5sb2dvX2ltYWdlfWAsXG4gICAgKTtcbiAgICBmcy5jb3B5RmlsZVN5bmMoXG4gICAgICBgJHtmaWxlUGF0aH0vJHtkYXRhLnByZXZpZXdfaW1hZ2V9YCxcbiAgICAgIGAke2FwcGxpY2F0aW9uc0ltYWdlc0RpcmVjdG9yeX0vJHtkYXRhLnByZXZpZXdfaW1hZ2V9YCxcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBsb2dvOiBuZXdMb2dvUGF0aCxcbiAgICAgIHByZXZpZXc6IG5ld1ByZXZpZXdQYXRoLFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFwcGxpY2F0aW9ucyxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})