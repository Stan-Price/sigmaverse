webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuse.js */ \"./node_modules/fuse.js/dist/fuse.esm.js\");\n\n\nvar _jsxFileName = \"/Users/usovdmitrij/projects/sigmaverse/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar fuseOptions = {\n  shouldSort: true,\n  threshold: 0.4,\n  ignoreLocation: true,\n  maxPatternLength: 12,\n  minMatchCharLength: 1,\n  keys: ['name', 'description', 'appCategory']\n};\nvar __N_SSG = true;\nfunction IndexPage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var applications = _ref.applications;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      searchedValue = _useState[0],\n      setSearchedValue = _useState[1];\n\n  var fuse = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return new fuse_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](applications, fuseOptions);\n  }, [applications]);\n  var searchedApplications = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return fuse.search(searchedValue).map(function (_ref2) {\n      var item = _ref2.item;\n      return item;\n    });\n  }, [searchedValue, fuse]);\n  var data = searchedValue ? searchedApplications : applications;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"head\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"navigation\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          className: \"navigation-list\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"navigation-list__item\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://github.com/ergoplatform/sigmaverse\",\n              target: \"_blank\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, this), \"Add dApp\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"navigation-list__item\",\n            href: \"https://ergoplatform.org/\",\n            target: \"_blank\",\n            children: \"Ergo\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"navigation-list__item\",\n            href: \"https://github.com/ergoplatform/sigmaverse\",\n            target: \"_blank\",\n            children: \"Explorer\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"header\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"header__content\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"header__introduce\",\n            children: \"SIGMAVERSE\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"header__paragraph\",\n            children: [\"Your portal to the\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              style: {\n                color: '#ff4421',\n                textDecoration: 'none'\n              },\n              href: \"https://ergoplatform.org\",\n              target: \"_blank\",\n              children: \"Ergo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, this), ' ', \"dApp universe\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"sigma-ergonaut\",\n            src: \"/images/Ergonaut_4k.png\",\n            alt: \"ergonaut\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"search\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"search__input-group\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          width: \"16\",\n          height: \"16\",\n          viewBox: \"0 0 16 16\",\n          fill: \"none\",\n          role: \"img\",\n          className: \"icon fill-current search-icon\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            fillRule: \"evenodd\",\n            clipRule: \"evenodd\",\n            d: \"M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: function onChange(_ref3) {\n            var value = _ref3.target.value;\n            return setSearchedValue(value);\n          },\n          value: searchedValue,\n          className: \"search__input\",\n          type: \"text\",\n          placeholder: \"Search for dApps...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dapps\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"dapps__content\",\n        children: data.map(function (_ref4) {\n          var logo = _ref4.logo,\n              preview = _ref4.preview,\n              name = _ref4.name,\n              description = _ref4.description,\n              website = _ref4.website;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: website,\n            target: \"_blank\",\n            className: \"dapps-card\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: preview,\n              alt: \"\".concat(name, \" preview\"),\n              className: \"dapps-card__preview\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"dapps-card__content\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"dapps-card__header\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: logo,\n                  alt: \"\".concat(name, \" logotype\"),\n                  className: \"dapps-card__logotype\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 100,\n                  columnNumber: 19\n                }, _this), ' ', name]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"dapps-card__description\",\n                children: description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 15\n            }, _this)]\n          }, logo, true, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(IndexPage, \"UNXmElIatpXS4bollzHbBKSEwjo=\");\n\n_c = IndexPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZnVzZU9wdGlvbnMiLCJzaG91bGRTb3J0IiwidGhyZXNob2xkIiwiaWdub3JlTG9jYXRpb24iLCJtYXhQYXR0ZXJuTGVuZ3RoIiwibWluTWF0Y2hDaGFyTGVuZ3RoIiwia2V5cyIsIkluZGV4UGFnZSIsImFwcGxpY2F0aW9ucyIsInVzZVN0YXRlIiwic2VhcmNoZWRWYWx1ZSIsInNldFNlYXJjaGVkVmFsdWUiLCJmdXNlIiwidXNlTWVtbyIsIkZ1c2UiLCJzZWFyY2hlZEFwcGxpY2F0aW9ucyIsInNlYXJjaCIsIm1hcCIsIml0ZW0iLCJkYXRhIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsInZhbHVlIiwidGFyZ2V0IiwibG9nbyIsInByZXZpZXciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ3ZWJzaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsWUFBVSxFQUFFLElBRE07QUFFbEJDLFdBQVMsRUFBRSxHQUZPO0FBR2xCQyxnQkFBYyxFQUFFLElBSEU7QUFJbEJDLGtCQUFnQixFQUFFLEVBSkE7QUFLbEJDLG9CQUFrQixFQUFFLENBTEY7QUFNbEJDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxhQUFULEVBQXdCLGFBQXhCO0FBTlksQ0FBcEI7O0FBU2UsU0FBU0MsU0FBVCxPQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQXJCQyxZQUFxQixRQUFyQkEsWUFBcUI7O0FBQUEsa0JBQ2JDLHNEQUFRLENBQUMsRUFBRCxDQURLO0FBQUEsTUFDaERDLGFBRGdEO0FBQUEsTUFDakNDLGdCQURpQzs7QUFFdkQsTUFBTUMsSUFBSSxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTSxJQUFJQywrQ0FBSixDQUFTTixZQUFULEVBQXVCUixXQUF2QixDQUFOO0FBQUEsR0FBRCxFQUE0QyxDQUFDUSxZQUFELENB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REYsZUFLRTtBQUFHLHlCQUFTLEVBQUMseUJBQWI7QUFBQSwwQkFBd0NDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUEsYUFBUUgsSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0ZEOztHQTlGdUJqQixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJztcblxuY29uc3QgZnVzZU9wdGlvbnMgPSB7XG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIHRocmVzaG9sZDogMC40LFxuICBpZ25vcmVMb2NhdGlvbjogdHJ1ZSxcbiAgbWF4UGF0dGVybkxlbmd0aDogMTIsXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAga2V5czogWyduYW1lJywgJ2Rlc2NyaXB0aW9uJywgJ2FwcENhdGVnb3J5J10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoeyBhcHBsaWNhdGlvbnMgfTogYW55KSB7XG4gIGNvbnN0IFtzZWFyY2hlZFZhbHVlLCBzZXRTZWFyY2hlZFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgZnVzZSA9IHVzZU1lbW8oKCkgPT4gbmV3IEZ1c2UoYXBwbGljYXRpb25zLCBmdXNlT3B0aW9ucyksIFthcHBsaWNhdGlvbnNdKTtcbiAgY29uc3Qgc2VhcmNoZWRBcHBsaWNhdGlvbnMgPSB1c2VNZW1vKCgpID0+IGZ1c2Uuc2VhcmNoKHNlYXJjaGVkVmFsdWUpLm1hcCgoeyBpdGVtIH0pID0+IGl0ZW0pLCBbXG4gICAgc2VhcmNoZWRWYWx1ZSxcbiAgICBmdXNlLFxuICBdKTtcbiAgY29uc3QgZGF0YSA9IHNlYXJjaGVkVmFsdWUgPyBzZWFyY2hlZEFwcGxpY2F0aW9ucyA6IGFwcGxpY2F0aW9ucztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkXCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWxpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9lcmdvcGxhdGZvcm0vc2lnbWF2ZXJzZVwiIHRhcmdldD1cIl9ibGFua1wiPjwvYT5BZGQgZEFwcFxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWxpc3RfX2l0ZW1cIiBocmVmPVwiaHR0cHM6Ly9lcmdvcGxhdGZvcm0ub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBFcmdvXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tbGlzdF9faXRlbVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZXJnb3BsYXRmb3JtL3NpZ21hdmVyc2VcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFeHBsb3JlclxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlcl9faW50cm9kdWNlXCI+U0lHTUFWRVJTRTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXJfX3BhcmFncmFwaFwiPlxuICAgICAgICAgICAgICBZb3VyIHBvcnRhbCB0byB0aGV7JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZmNDQyMScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9lcmdvcGxhdGZvcm0ub3JnXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRXJnb1xuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgZEFwcCB1bml2ZXJzZVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZ21hLWVyZ29uYXV0XCIgc3JjPVwiL2ltYWdlcy9FcmdvbmF1dF80ay5wbmdcIiBhbHQ9XCJlcmdvbmF1dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9faW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gZmlsbC1jdXJyZW50IHNlYXJjaC1pY29uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTEwLjYwMDIgMTIuMDQ5OEM5LjQ5NzU4IDEyLjg1NjggOC4xMzc3NyAxMy4zMzMzIDYuNjY2NjcgMTMuMzMzM0MyLjk4NDc3IDEzLjMzMzMgMCAxMC4zNDg2IDAgNi42NjY2N0MwIDIuOTg0NzcgMi45ODQ3NyAwIDYuNjY2NjcgMEMxMC4zNDg2IDAgMTMuMzMzMyAyLjk4NDc3IDEzLjMzMzMgNi42NjY2N0MxMy4zMzMzIDguMTU2MzcgMTIuODQ0NyA5LjUzMTk0IDEyLjAxOSAxMC42NDE5QzEyLjAyNjUgMTAuNjQ4OSAxMi4wMzM4IDEwLjY1NiAxMi4wNDExIDEwLjY2MzNMMTUuMjkzNSAxMy45MTU3QzE1LjY4NDEgMTQuMzA2MyAxNS42ODQxIDE0LjkzOTQgMTUuMjkzNSAxNS4zM0MxNC45MDMgMTUuNzIwNSAxNC4yNjk5IDE1LjcyMDUgMTMuODc5MyAxNS4zM0wxMC42MjY5IDEyLjA3NzVDMTAuNjE3OCAxMi4wNjg0IDEwLjYwODkgMTIuMDU5MiAxMC42MDAyIDEyLjA0OThaTTExLjMzMzMgNi42NjY2N0MxMS4zMzMzIDkuMjQ0IDkuMjQ0IDExLjMzMzMgNi42NjY2NyAxMS4zMzMzQzQuMDg5MzQgMTEuMzMzMyAyIDkuMjQ0IDIgNi42NjY2N0MyIDQuMDg5MzQgNC4wODkzNCAyIDYuNjY2NjcgMkM5LjI0NCAyIDExLjMzMzMgNC4wODkzNCAxMS4zMzMzIDYuNjY2NjdaXCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0U2VhcmNoZWRWYWx1ZSh2YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoZWRWYWx1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaF9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGRBcHBzLi4uXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXBwc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcHBzX19jb250ZW50XCI+XG4gICAgICAgICAge2RhdGEubWFwKCh7IGxvZ28sIHByZXZpZXcsIG5hbWUsIGRlc2NyaXB0aW9uLCB3ZWJzaXRlIH06IGFueSkgPT4gKFxuICAgICAgICAgICAgPGEga2V5PXtsb2dvfSBocmVmPXt3ZWJzaXRlfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJkYXBwcy1jYXJkXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwcmV2aWV3fSBhbHQ9e2Ake25hbWV9IHByZXZpZXdgfSBjbGFzc05hbWU9XCJkYXBwcy1jYXJkX19wcmV2aWV3XCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXBwcy1jYXJkX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXBwcy1jYXJkX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9e2Ake25hbWV9IGxvZ290eXBlYH0gY2xhc3NOYW1lPVwiZGFwcHMtY2FyZF9fbG9nb3R5cGVcIiAvPnsnICd9XG4gICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXBwcy1jYXJkX19kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcHBsaWNhdGlvbnNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2FwcGxpY2F0aW9ucycpO1xuICBjb25zdCBhcHBsaWNhdGlvbnNJbWFnZXNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYy9pbWFnZXMvYXBwbGljYXRpb25zJyk7XG5cbiAgaWYgKCFmcy5leGlzdHNTeW5jKGFwcGxpY2F0aW9uc0ltYWdlc0RpcmVjdG9yeSkpIHtcbiAgICBmcy5ta2RpclN5bmMoYXBwbGljYXRpb25zSW1hZ2VzRGlyZWN0b3J5KTtcbiAgfVxuXG4gIGNvbnN0IGZpbGVuYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFwcGxpY2F0aW9uc0RpcmVjdG9yeSk7XG5cbiAgY29uc3QgYXBwbGljYXRpb25zID0gZmlsZW5hbWVzLm1hcCgoZmlsZW5hbWUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihhcHBsaWNhdGlvbnNEaXJlY3RvcnksIGZpbGVuYW1lKTtcbiAgICBjb25zdCB7IGRhdGEgfTogYW55ID0gbWF0dGVyKGZzLnJlYWRGaWxlU3luYyhgJHtmaWxlUGF0aH0vb3ZlcnZpZXcubWRgLCAndXRmOCcpKTtcbiAgICBjb25zdCBuZXdMb2dvUGF0aCA9IGAvaW1hZ2VzL2FwcGxpY2F0aW9ucy8ke2RhdGEubG9nb19pbWFnZX1gO1xuICAgIGNvbnN0IG5ld1ByZXZpZXdQYXRoID0gYC9pbWFnZXMvYXBwbGljYXRpb25zLyR7ZGF0YS5wcmV2aWV3X2ltYWdlfWA7XG5cbiAgICBmcy5jb3B5RmlsZVN5bmMoXG4gICAgICBgJHtmaWxlUGF0aH0vJHtkYXRhLmxvZ29faW1hZ2V9YCxcbiAgICAgIGAke2FwcGxpY2F0aW9uc0ltYWdlc0RpcmVjdG9yeX0vJHtkYXRhLmxvZ29faW1hZ2V9YCxcbiAgICApO1xuICAgIGZzLmNvcHlGaWxlU3luYyhcbiAgICAgIGAke2ZpbGVQYXRofS8ke2RhdGEucHJldmlld19pbWFnZX1gLFxuICAgICAgYCR7YXBwbGljYXRpb25zSW1hZ2VzRGlyZWN0b3J5fS8ke2RhdGEucHJldmlld19pbWFnZX1gLFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIGxvZ286IG5ld0xvZ29QYXRoLFxuICAgICAgcHJldmlldzogbmV3UHJldmlld1BhdGgsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXBwbGljYXRpb25zLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})