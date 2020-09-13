module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/private/tmp/next-cypress/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Index() {\n  const {\n    0: coolMsg,\n    1: setCoolMsg\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"/api/getData\").then(({\n      data\n    }) => {\n      console.log(\"r:\", data);\n      setCoolMsg(data);\n    });\n  }, []);\n\n  async function onSubmit() {\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"/api/postData\", {\n        test: \"is cool\"\n      });\n      console.log(\"data:\", data);\n    } catch (error) {\n      console.log(\"error:\", error.response.data.cool); // console.log(\"error:\", error.response.data);\n\n      setError(error.response.data.cool);\n    }\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, coolMsg), error && __jsx(\"h3\", {\n    className: \"error\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, error), __jsx(\"form\", {\n    onSubmit: e => {\n      e.preventDefault();\n      return onSubmit();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Submit\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCIsImNvb2xNc2ciLCJzZXRDb29sTXNnIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsInBvc3QiLCJ0ZXN0IiwicmVzcG9uc2UiLCJjb29sIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2YsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBRyx5REFBUyxDQUFDLE1BQU07QUFDZEMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLGNBQVYsRUFBMEJDLElBQTFCLENBQStCLENBQUM7QUFBRUM7QUFBRixLQUFELEtBQWM7QUFDM0NDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0JGLElBQWxCO0FBQ0FSLGdCQUFVLENBQUNRLElBQUQsQ0FBVjtBQUNELEtBSEQ7QUFJRCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLGlCQUFlRyxRQUFmLEdBQTBCO0FBQ3hCLFFBQUk7QUFDRixZQUFNO0FBQUVIO0FBQUYsVUFBVyxNQUFNSCw0Q0FBSyxDQUFDTyxJQUFOLENBQVcsZUFBWCxFQUE0QjtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUE1QixDQUF2QjtBQUNBSixhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixJQUFyQjtBQUNELEtBSEQsQ0FHRSxPQUFPTixLQUFQLEVBQWM7QUFDZE8sYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsS0FBSyxDQUFDWSxRQUFOLENBQWVOLElBQWYsQ0FBb0JPLElBQTFDLEVBRGMsQ0FFZDs7QUFDQVosY0FBUSxDQUFDRCxLQUFLLENBQUNZLFFBQU4sQ0FBZU4sSUFBZixDQUFvQk8sSUFBckIsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCaEIsT0FBdkIsQ0FERixFQUVHRyxLQUFLLElBQUk7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCQSxLQUF2QixDQUZaLEVBR0U7QUFDRSxZQUFRLEVBQUdjLENBQUQsSUFBTztBQUNmQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxhQUFPTixRQUFRLEVBQWY7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixDQUhGLENBREY7QUFjRDs7QUFFY2Isb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtjb29sTXNnLCBzZXRDb29sTXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChcIi9hcGkvZ2V0RGF0YVwiKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJyOlwiLCBkYXRhKTtcbiAgICAgIHNldENvb2xNc2coZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9wb3N0RGF0YVwiLCB7IHRlc3Q6IFwiaXMgY29vbFwiIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhOlwiLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyb3IucmVzcG9uc2UuZGF0YS5jb29sKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5jb29sKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57Y29vbE1zZ308L2Rpdj5cbiAgICAgIHtlcnJvciAmJiA8aDMgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3J9PC9oMz59XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmV0dXJuIG9uU3VibWl0KCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });