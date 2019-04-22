/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/favicon.js/favicon.js":
/*!********************************************!*\
  !*** ./node_modules/favicon.js/favicon.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* http://mit-license.org/ */\n\n(function (root, factory) {\n    if (true) {\n        // AMD. Register as an anonymous module.\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(typeof self !== \"undefined\" ? self : this, function () {\n    var doc = document;\n    // private\n\n    var head = doc.getElementsByTagName(\"head\")[0];\n    var loopTimeout = null;\n    var changeFavicon = function(iconURL) {\n        var newLink = doc.createElement(\"link\");\n        newLink.type = \"image/x-icon\";\n        newLink.rel = \"icon\";\n        newLink.href = iconURL;\n        removeExistingFavicons();\n        head.appendChild(newLink);\n    };\n    var removeExistingFavicons = function() {\n        var links = head.getElementsByTagName(\"link\");\n        for (var i = 0; i < links.length; i++) {\n            if (/\\bicon\\b/i.test(links[i].getAttribute(\"rel\"))) {\n                head.removeChild(links[i]);\n            }\n        }\n    };\n\n    // public\n\n    var favicon = {\n        \"defaultPause\": 2000,\n        \"change\": function(iconURL, optionalDocTitle) {\n            clearTimeout(loopTimeout);\n            if (optionalDocTitle) {\n                doc.title = optionalDocTitle;\n            }\n            if (iconURL !== \"\") {\n                changeFavicon(iconURL);\n            }\n        },\n        \"animate\": function(icons, optionalDelay) {\n            clearTimeout(loopTimeout);\n            // preload icons\n            icons.forEach(function(icon) {\n                (new Image()).src = icon;\n            });\n            optionalDelay = optionalDelay || this[\"defaultPause\"];\n            var iconIndex = 0;\n            changeFavicon(icons[iconIndex]);\n            loopTimeout = setTimeout(function animateFunc() {\n                iconIndex = (iconIndex + 1) % icons.length;\n                changeFavicon(icons[iconIndex]);\n                loopTimeout = setTimeout(animateFunc, optionalDelay);\n            }, optionalDelay);\n        },\n        \"stopAnimate\": function() {\n            clearTimeout(loopTimeout);\n        }\n    };\n\n    return favicon;\n}));\n\n\n//# sourceURL=webpack:///./node_modules/favicon.js/favicon.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var favicon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! favicon.js */ \"./node_modules/favicon.js/favicon.js\");\n/* harmony import */ var favicon_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(favicon_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n// favicon\nObject(favicon_js__WEBPACK_IMPORTED_MODULE_1__[\"animate\"])([\n\"data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC / xhBQAAAAFzUkdCAK7OHOkAAAAzUExURfusEelORvy9RG6 / SeMeE + pRSv7cnbffpfmsQt7w1Py3MpLEWtqxII + 0 WvWrqOc9NEdwTKtwAtQAAAARdFJOU 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\",\n\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURT7O8PusEW6/SelORvy9ROMeE+hDO/uxOJPPeP3Nc8LksqHo+dmxIYW9RIGqRO57dvzBUGLX853m90dwTPJild4AAAAUdFJOU/////////////////////////8AT0/nEQAAAxNJREFUeNrt2mlyUzEUROE4YDskQALsf6/MkMGDhlbZ3ff0BvTOV6p6f3Tz7ap2s2QPp04EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEC9L61LBVhR9VX0aQC4AjxwAwAAAAAAAOA3CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADANQBc8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAF4LF9Tx9W7P7CAO/at3+v337zdGGA3UUB9pvaAD/6SwP87K8M8Ku/MMDv/roAf/rLAvztrwrwr78owP/+mgDP+ksCPO+vCPCivyDAy/56AK/6ywG87q8G8Ka/GMDb/loAB/pLARzqrwRwsL8QwOH+OgBH+ssAHOuvAnC0vwjA8f4aACf6SwCc6q8AcLK/AMDp/nyAM/3xAOf60wHO9ocDnO/PBmjojwZo6U8GaOoPBmjrzwVo7I8FaO1PBWjuDwVo788E6OjffLxvnwtAT//m023z7kwAuvoDAfr68wA6++MAevvTALr7wwD6+7MABvqjAEb6kwCG+oMAxvpzAAb7YwBG+1MAhvtDAMb7MwAm+iMAZvoTAKb6AwDm+v0BJvvtAWb73QGm+80B5vu9AQT91gCKfmcASb8xgKbfF0DUbwug6ncFkPWbAuj6PQGE/ZYAyn5HAGm/IYC23w9A3G8HoO53A5D3mwHo+70AFvRbAazoNwLYLel3Auh5/9q+HoAFT2rbAXbbjn2+veTuVgB09QcC9PXnAXT2xwH09qcBdPeHAfT3ZwEM9EcBjPQnAQz1BwGM9ecADPbHAIz2pwAM94cAjPdnAEz0RwDM9CcATPUHAMz1+wNM9tsDzPa7A0z3mwPM93sDCPqtART9zgCSfmMATb8vgKjfFkDV7wog6zcF0PV7Agj7LQGU/Y4A0n5DAG2/H4C43w5A3e8GIO83A9D3ewEs6LcCWNFvBbAtDrAtDvAdip/l7X88KxwAAAAASUVORK5CYII=\",\n\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURT7O8Py9RPusEelORm6/SeMeEwC97OhDO5PPeIO0RPmrP8Lw+vy3Mv3Nc8DjsWPX8xrF79mxIe57dpDj9v7ks0dwTDLThYsAAAAWdFJOU////////////////////////////wAB0sDkAAAD20lEQVR42u3aWUJTURBFUYiGYEAJivOfqvSkec2tuvVMTlMjqL2+z9Vf8bsygAEMYAADGMAABjCAAQxgAAMYwAAGMIABzvrOIndnAAMYwAAGMIABVAF24gC7G22A3Y02wHO/NMBLvzLAa78wwFu/LsB7vyzAR78qwGe/KMBXvybAXr8kwH6/IsBBvyDAYb8ewFG/HMBxvxrASb8YwGm/FsBAvxTAUL8SwGC/EMBwvw7ASL8MwFi/CsBovwjAeL8GwES/BMBUvwLAZL8AwHT/BQD8ab1A9MPXXf4+4H+vHiKvGcAABjCAAQxgAAMYwABYADtxgOn9Kz/AzP6VHmBu/8oOMLt/JQeY379yAzTsX6kBWvavzABN+1digLb9Ky9A4/6VFqB1/8oK0Lx/JQVo379yAgT2r5QAkf0rI0Bo/0oIENu/8gEE9690ANH9KxtAeP9KBhDfv3IBJPavVACZ/SsTQGr/SgSQ27/yACT3rzQA2f0rC0B6/0oCkN+/cgB07F8vDuAhcVT7gAs+AxjAAAYwgAEMYAADGMAABjCAAQxgAAMYwAAGMIABlAB+t9/25wL39HRmgG/tt72uv/vV9ZkBNmcFuF9pAzz3SwO89CsDvPYLA7z16wK898sCfPSrAnz2iwJ89WsC7PVLAuz3KwIc9AsCHPbrARz1ywEc96sBnPSLAZz2awEM9EsBDPUrAQz2CwEM9+sAjPTLAIz1qwCM9osAjPdrAEz0SwBM9SsATPYLAEz38wPM9NMDzPWzA8z2kwPM93MDNPRTA7T0MwM09RMDtPXzAjT20wK09rMCNPeTArT3cwIE+u8ffzXfHQpAoH+1+vG9+W5BAEL9hACxfj6AYD8dQLSfDSDcTwYQ7+cCSPRTAWT6mQBS/UQAuX4egGQ/DUC2nwUg3U8CkO/nAOjopwDo6WcA6OonAOjrxwfo7IcH6O1HB+juBwfo78cGKOiHBqjoRwYo6QcGqOnHBSjqhwWo6kcFKOsHBajrxwQo7IcEqOxHBCjtBwSo7ccDKO6HA6juRwMo7wcDqO/HAligHwpgiX4ggM12JQ4QqHpsvwjAApPadoDNOnCBqgXudgmAUD8hQKyfDyDYTwcQ7WcDCPeTAcT7uQAS/VQAmX4mgFQ/EUCunwcg2U8DkO1nAUj3kwDk+zkAOvopAHr6GQC6+gkA+vrxATr74QF6+9EBuvvBAfr7sQEK+qEBKvqRAUr6gQFq+nEBivphAar6UQHK+kEB6voxAQr7IQEq+xEBSvsBAWr78QCK++EAqvvRAMr7wQDq+7EAFuiHAliiHwpgLQ6wFgf4BwVO0GnFfZGEAAAAAElFTkSuQmCC\",\n\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURT7O8Py9RPusEW6/SelORuMeEwC97OhDO3Lb9JPPeIO0RPmrP8Pw+vy3Mv3Nc8DjsdmxIe57dhrF7/7ks0dwTHYyU5kAAAAVdFJOU///////////////////////////ACvZfeoAAAOOSURBVHja7dppVttAEIVR48QYYhyIyf7XGmY8aKjqLh3nDW8BUn/3SP969ffau1uFd7fA61cGMIABDGAAAxjAAAYwgAEMYAADGMAABjCAAQxgAAMYwAAGMIABDGAAAxjAAAYwgAEMYAADGMAA/wNAdAYQBziIAxxutQEOt9oAL/3SAK/9ygBv/cIA7/26AB/9sgCf/aoAX/2iAN/9mgBH/ZIAx/2KACf9ggCn/XoAZ/1yAOf9agAX/WIAl/1aAAP9UgBD/UoAg/1CAMP9OgAj/TIAY/0qAKP9IgDj/RoAE/0SAFP9CgCT/QIA0/38ADP99ABz/ewAs/3kAPP93ACBfmqASD8zQKifGCDWzwsQ7KcFiPaDATzEx/kFZA5rAAMYwAAGMIABDGAAAxjAAAYwgAEMYAADGMAABjCAAQxgAAMYwAAGMIABDGAAAxjAAAYwgAEMkHnmn/h2vxfY8/OVAX7Gt7up3359Ez9s9EptCmB7VYD9OgOwyG91VYCXfmmA135lgLd+YYD3fl2Aj35ZgM9+VYCvflGA735NgKN+SYDjfkWAk35BgNN+PYCzfjmA8341gIt+MYDLfi2AgX4pgKF+JYDBfiGA4X4dgJF+GYCxfhWA0X4RgPF+DYCJfgmAqX4FgMl+AYDpfn6AmX56gLl+doDZfnKA+X5ugEA/NUCknxkg1E8MEOvnBQj20wJE+1kBwv2kAPF+ToBE//7pMbwHFIBE/3r960d49yAAqX5CgFw/H0Cynw4g288GkO4nA8j3cwE09FMBtPQzATT1EwG09fMANPbTALT2swA095MAtPdzAHT0UwD09DMAdPUTAPT14wN09sMD9PajA3T3gwP092MDFPRDA1T0IwOU9AMD1PTjAhT1wwJU9aMClPWDAtT1YwIU9kMCVPYjApT2AwLU9uMBFPfDAVT3owGU94MB1PdjASzQDwWwRD8QwHa3FgdIVD3FlwFY4EptHGC7SSxRtcDulwBI9RMC5Pr5AJL9dADZfjaAdD8ZQL6fC6ChnwqgpZ8JoKmfCKCtnwegsZ8GoLWfBaC5nwSgvZ8DoKOfAqCnnwGgq58AoK8fH6CzHx6gtx8doLsfHKC/HxugoB8aoKIfGaCkHxigph8XoKgfFqCqHxWgrB8UoK4fE6CwHxKgsh8RoLQfEKC2Hw+guB8OoLofDaC8Hwygvh8LYIF+KIAl+qEANuIAG3GAf8vqXCY+1p1jAAAAAElFTkSuQmCC\",\n\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURQC97G6/Sfy9RPusEelORuMeEz7O8OhDO++tNSzAy/3Odfy3MlG+c3Lb9IGqRO57dpPPeIW9REdwTMms5IMAAAATdFJOU////////////////////////wCyfdwIAAADVUlEQVR42u3aSVIbQBBE0RKykEDG2Nz/sBC2w2bQ0EN1KLLy9w3+i1zUouPF/AUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPe/pvunF23syBghzgADAGiDCGyDMAQIAa4AIb4AwBwgArAEivAHCHCAAsAaI8AYIc4AAwBogwhsgzAECAGuACG+AMAcIAKwBIrwBwhwgALAGiPAGCHOAAMAaIMIbIMwBwhzg/sYAz+3v7nHFuzXAt/Z3uMt/x+1DpL8ugP1NAY5bb4C3fiWAJf3OC/jdbwzwp98X4G+/EsBxRb/rAv71mwL87/cEeNdveQe873dcwId+Q4CP/X4An/rt7oDP/W4L+NJvBvC13wvgRL/VHXCq32kBJ/uNAE73+wCc6be5A871uyzgbL8JwPl+D4AL/RZ3wKV+hwVc7DcAuNxfH+BKf/k74Fp/9QVc7S8OcL2/NkBDf+k7oKW/8gKa+gsDtPXXBWjsL3sHtPZXXUBzf1GA9v6aAB39Je+Anv7t5nvzexBZQFf/9tem+YkA9PXXA+jsVwI4ruivtoDu/mIA/f21AAb6lQCW9FdawFB/IYCx/joAg/1l7oDR/ioLGO4vAjDeXwNgor/EHTDTX2EBU/0FAOb69QEm++XvgNl+9QVM94sDzPdrAyT0S98BGf3KC0jpFwbI6dcFSOqXvQOy+lUXkNYvCpDXrwmQ2C95B2T2Ky4gtV8QILdfDyC5X+4OyO5XW0B6vxhAfr8WwIJ+qTtgRb8QwP6wNQfoqDq0v00+wOMSgP2u4/3YrHitX2p/rgDo6l8E0PpWAPT11wPo7C8H0NtfDaC7vxhAf38tgIH+UgAj/ZUAhvoLAYz11wEY7C8DMNpfBWC4vwjAeH8NgIn+EgAz/RUApvoLAMz16wNM9ssDzParA0z3iwPM92sDJPRLA2T0KwOk9AsD5PTrAiT1ywJk9asCpPWLAuT1awIk9ksCZPYrAqT2CwLk9usBJPfLAWT3qwGk94sB5PdrASzolwJY0S8FsDMH2JkDvAJGcQcw/NqKIgAAAABJRU5ErkJggg==\"\n], 500);\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n// import KeyHashing from './input';\n// import CanvasDraw from './canvas';\n\n\n\n\nclass Game {\n    constructor(){\n        document.addEventListener('DOMContentLoaded', (event) => {\n            const game = new _gameLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/binding */ \"./src/logic/binding.js\");\n\n\nclass GameLogic {\n\n    constructor() {\n        this.binding = _logic_binding__WEBPACK_IMPORTED_MODULE_0__[\"binding\"].bind(this);\n        this.binding();\n\n    }\n\n\n    // git subtree push --prefix dist origin gh-pages\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameLogic);\n\n//# sourceURL=webpack:///./src/gameLogic.js?");

/***/ }),

/***/ "./src/logic/binding.js":
/*!******************************!*\
  !*** ./src/logic/binding.js ***!
  \******************************/
/*! exports provided: binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"binding\", function() { return binding; });\n/* harmony import */ var _presentation_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../presentation/draw */ \"./src/presentation/draw.js\");\n/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieces */ \"./src/logic/pieces.js\");\n/* harmony import */ var _presentation_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presentation/render */ \"./src/presentation/render.js\");\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collision */ \"./src/logic/collision.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset */ \"./src/logic/reset.js\");\n/* harmony import */ var _presentation_music__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presentation/music */ \"./src/presentation/music.js\");\n/* harmony import */ var _presentation_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../presentation/input */ \"./src/presentation/input.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./save */ \"./src/logic/save.js\");\n/* harmony import */ var _lines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lines */ \"./src/logic/lines.js\");\n/* harmony import */ var _presentation_score__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../presentation/score */ \"./src/presentation/score.js\");\n/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./presets */ \"./src/logic/presets.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst binding = function () {\n\n    let importArr = [_presentation_draw__WEBPACK_IMPORTED_MODULE_0__, _pieces__WEBPACK_IMPORTED_MODULE_1__, _presentation_render__WEBPACK_IMPORTED_MODULE_2__, _collision__WEBPACK_IMPORTED_MODULE_3__, _reset__WEBPACK_IMPORTED_MODULE_4__, _presentation_music__WEBPACK_IMPORTED_MODULE_5__, _presentation_input__WEBPACK_IMPORTED_MODULE_6__, _save__WEBPACK_IMPORTED_MODULE_7__, _lines__WEBPACK_IMPORTED_MODULE_8__, _presentation_score__WEBPACK_IMPORTED_MODULE_9__, _presets__WEBPACK_IMPORTED_MODULE_10__];\n\n    for (let keyClass in importArr) {\n        for (let keyFunc in importArr[keyClass]) {\n            if (typeof importArr[keyClass][keyFunc] === 'function') {\n                this[keyFunc] = importArr[keyClass][keyFunc].bind(this);\n            } else {\n                this[keyFunc] = importArr[keyClass][keyFunc];\n            }\n        }\n    }\n    this.startup();\n\n};\n\n//# sourceURL=webpack:///./src/logic/binding.js?");

/***/ }),

/***/ "./src/logic/collision.js":
/*!********************************!*\
  !*** ./src/logic/collision.js ***!
  \********************************/
/*! exports provided: stopFalling, calculateDrop, frame, lostScreen, rotate, collisionCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stopFalling\", function() { return stopFalling; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateDrop\", function() { return calculateDrop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"frame\", function() { return frame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lostScreen\", function() { return lostScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotate\", function() { return rotate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionCheck\", function() { return collisionCheck; });\nconst stopFalling = function() {\n        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n                if (this.activePiece[yInd][xInd]) {\n                    this.matrix[yInd + this.activeY][xInd + this.activeX] = this.activePiece[yInd][xInd];\n                }\n            }\n        }\n        this.notFalling = true;\n};\n\nconst  calculateDrop = function () {\n    this.preDrop = this.activePiece;\n    this.dropX = this.activeX;\n    this.dropY = this.activeY;\n\n    while (this.collisionCheck(0, 1, this.preDrop, true)) {\n        this.dropY++;\n    }\n    this.bottomY = this.dropY;\n};\n\nconst frame = function () {\n    if (this.collisionCheck(0, 1)) {\n        this.activeY++;\n    } \n    else {\n        this.stopFalling();\n        this.collisionCheck(0, 1);\n        this.deleteLines();\n        if (this.lost) {\n            this.lostScreen();\n        } else {\n            this.randomPiece();\n        }\n    }\n};\nconst lostScreen = function () {\n    this.resetIntervals();\n    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n    this.canvasContext.fillStyle = 'white';\n    this.clearPreviewAndNext();\n    this.putHighScore();\n    this.canvasContext.font = '20px arcade';\n    this.canvasContext.textAlign = \"center\";\n    this.canvasContext.fillText(\"Press Z\", this.canvasWidth / 2, this.canvasHeight / 2);\n    this.canvasContext.fillText(\"GAME OVER!\", this.canvasWidth / 2, (this.canvasHeight / 2) - 40);\n};\n\nconst rotate = function(activePiece) {\n    if (this.activePiece.length === 0) {\n        return activePiece;\n    }\n    // dont rotate squares\n    if (this.pieceType === 2) {\n        return activePiece;\n    }\n    let rotatedPiece = [];\n    for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n        rotatedPiece[yInd] = [];\n        for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n            rotatedPiece[yInd][xInd] = activePiece[3 - xInd][yInd];\n\n        }\n\n    }\n\n    return rotatedPiece;\n\n};\n\nconst collisionCheck = function(moveX = 0, moveY = 0, movedPiece = this.activePiece, preDrop = false) {\n    if (this.activePiece.length === 0) {\n        return true;\n    }\n    if (preDrop) {\n        moveX = this.dropX + moveX;\n        moveY = this.dropY + moveY;\n\n    } else {\n        moveX = this.activeX + moveX;\n        moveY = this.activeY + moveY;\n    }\n\n    for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n        for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n            if (movedPiece[yInd][xInd]) {\n                if (this.matrix[yInd + moveY] === undefined ||\n                    this.matrix[yInd + moveY][xInd + moveX] === undefined ||\n                    this.matrix[yInd + moveY][xInd + moveX] ||\n                    xInd + moveX < 0 ||\n                    yInd + moveY >= this.numOfRows || xInd + moveX >= this.numOfColumns) {\n                    if (this.notFalling && moveY == 1) {\n                        this.lost = true;\n                        // document.cookie = `score=${this.score}`;\n                        if (document.cookie < this.score) {\n                            \n                            let d = new Date();\n                            d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));\n                            let expires = \"expires=\" + d.toUTCString();\n                            document.cookie = this.score + \";\" + expires;\n                        }\n                    }\n                    return false;\n                }\n            }\n        }\n    }\n    return true;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/logic/collision.js?");

/***/ }),

/***/ "./src/logic/lines.js":
/*!****************************!*\
  !*** ./src/logic/lines.js ***!
  \****************************/
/*! exports provided: notZero, deleteAndMoveLine, deleteLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notZero\", function() { return notZero; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteAndMoveLine\", function() { return deleteAndMoveLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteLines\", function() { return deleteLines; });\nconst notZero = function(tile) {\n    return tile !== 0;\n};\n\nconst deleteAndMoveLine = function(linenum) {\n    for (let i = linenum; i > 0; i--) {\n        for (let xInd = 0; xInd < this.numOfColumns; xInd++) {\n            this.matrix[i][xInd] = this.matrix[i - 1][xInd];\n        }\n    }\n\n};\n\n\nconst deleteLines = function() {\n    this.combo = 0;\n    for (let yInd = this.numOfRows - 1; yInd >= 0; yInd--) {\n        let complete = this.matrix[yInd].every(this.notZero);\n\n        if (complete) {\n            this.deleteAndMoveLine(yInd);\n            this.combo++;\n            yInd++;\n            this.lineClearPlay();\n        }\n\n    }\n    if (this.combo !== 0) {\n        this.score += this.scoring[this.combo];\n        this.putScore();\n    }\n\n\n};\n\n\n//# sourceURL=webpack:///./src/logic/lines.js?");

/***/ }),

/***/ "./src/logic/pieces.js":
/*!*****************************!*\
  !*** ./src/logic/pieces.js ***!
  \*****************************/
/*! exports provided: colors, dropColors, resetPieceQueue, pieces, previewArrays, nextArrays, randomPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropColors\", function() { return dropColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetPieceQueue\", function() { return resetPieceQueue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pieces\", function() { return pieces; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previewArrays\", function() { return previewArrays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextArrays\", function() { return nextArrays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomPiece\", function() { return randomPiece; });\nconst piecesNames = ['S piece', 'Z piece', 'Square', 'T piece', 'J piece', 'L piece', 'Line piece'];\n\nconst colors = ['#349E00', '#EC003F', '#FEDE1B', '#A737FA', '#2131F8', '#FB700A', '#03E5FF'];\nconst dropColors = ['#194204', '#38000A', '#3D3107', '#27003B', '#04003C', '#3B1103', '#05383A'];\n\n\nconst resetPieceQueue = function () {\n    this.pieceQueue = [Math.floor(Math.random() * this.pieces.length),\n        Math.floor(Math.random() * this.pieces.length)\n    ];\n};\n\nconst pieces = [\n    [0, 1, 1, 0,\n        1, 1\n    ],\n    [1, 1, 0, 0,\n        0, 1, 1\n    ],\n    [1, 1, 0, 0,\n        1, 1\n    ],\n\n    [0, 1, 0, 0,\n        1, 1, 1\n    ],\n    [1, 1, 1, 0,\n        0, 0, 1\n    ],\n    [1, 1, 1, 0,\n        1\n    ],\n    [1, 1, 1, 1]\n\n];\nconst previewArrays = [\n    [\n        [0, 0, 0],\n        [0, 0, 0],\n        [0, 1, 1],\n        [1, 1, 0]\n    ],\n    [\n        [0, 0, 0],\n        [0, 0, 0],\n        [1, 1, 0],\n        [0, 1, 1]\n    ],\n    [\n        [0, 0, 0],\n        [0, 0, 0],\n        [1, 1, 0],\n        [1, 1, 0]\n    ],\n    [\n        [0, 0, 0],\n        [0, 0, 0],\n        [0, 1, 0],\n        [1, 1, 1]\n    ],\n    [\n        [0, 0, 0],\n        [0, 1, 0],\n        [0, 1, 0],\n        [1, 1, 0]\n    ],\n    [\n        [0, 0, 0],\n        [1, 0, 0],\n        [1, 0, 0],\n        [1, 1, 0]\n    ],\n    [\n        [0, 1, 0],\n        [0, 1, 0],\n        [0, 1, 0],\n        [0, 1, 0]\n    ],\n    [\n        [0, 0, 0],\n        [0, 0, 0],\n        [0, 0, 0],\n        [0, 0, 0]\n    ]\n\n];\n\nconst nextArrays = previewArrays;\n\n\nconst randomPiece = function (givenPiece, givenId) {\n    if (givenPiece === undefined) {\n        this.pieceType = this.pieceQueue.shift();\n        this.pieceQueue.push(Math.floor(Math.random() * this.pieces.length));\n        this.piece = this.pieces[this.pieceType];\n        this.renderNextPiece(this.pieceQueue[0], this.pieceQueue[0]);\n    } else {\n        this.pieceType = givenId;\n        this.piece = givenPiece;\n    }\n\n\n\n\n\n\n    for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n        this.activePiece[yInd] = [];\n        for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n            let ind = 4 * yInd + xInd;\n            if (this.piece[ind] !== undefined && this.piece[ind]) {\n                this.activePiece[yInd][xInd] = this.pieceType + 1;\n            } else {\n                this.activePiece[yInd][xInd] = 0;\n            }\n        }\n\n    }\n\n    this.notFalling = false;\n    this.activeX = 5;\n    this.activeY = 0;\n\n    this.preDrop = this.activePiece;\n    this.dropX = this.activeX;\n    this.dropY = this.activeY;\n\n\n\n};\n\n//# sourceURL=webpack:///./src/logic/pieces.js?");

/***/ }),

/***/ "./src/logic/presets.js":
/*!******************************!*\
  !*** ./src/logic/presets.js ***!
  \******************************/
/*! exports provided: presets, startup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"presets\", function() { return presets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startup\", function() { return startup; });\nconst presets = function() {\n    this.started = false;\n    this.canvas = document.getElementsByTagName('canvas')[0];\n    this.canvasContext = this.canvas.getContext('2d');\n    this.canvasHeight = this.canvas.height;\n    this.canvasWidth = this.canvas.width;\n    this.numOfColumns = 10;\n    this.numOfRows = 20;\n    this.tileHeight = this.canvasHeight / this.numOfRows;\n    this.tileWidth = this.canvasWidth / this.numOfColumns;\n    this.canvasContext.font = '30px arcade';\n    this.canvasContext.fillStyle = 'white';\n    this.canvasContext.textAlign = \"center\";\n    this.audioEnabled = true;\n    this.matrix = [];\n    this.level = 1;\n    this.testx = 0;\n    this.testy = 0;\n    this.activeColorBack = 'white';\n    this.lost = false;\n    this.activePiece = [];\n    this.activeX = 5;\n    this.activeY = 0;\n    this.sizeOfPiece = 4;\n    this.pieceType = 0;\n    this.piece = [];\n    this.notFalling = false;\n    this.scoring = [0, 40, 100, 300, 1200];\n    this.score = 0;\n    document.cookie = document.cookie || 0;\n};\n\nconst startup = function(){\n    this.presets();\n    document.body.onkeydown = this.KeyHashing;\n    this.resetPieceQueue();\n    this.putHighScore();\n    this.putScore();\n    setTimeout(this.pressZ, 0); // wait for font css\n};\n\n//# sourceURL=webpack:///./src/logic/presets.js?");

/***/ }),

/***/ "./src/logic/reset.js":
/*!****************************!*\
  !*** ./src/logic/reset.js ***!
  \****************************/
/*! exports provided: resetGame, resetIntervals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetGame\", function() { return resetGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetIntervals\", function() { return resetIntervals; });\nconst resetGame = function() {\n    if (this.started === false) {\n        this.started = true;\n    }\n    this.resetIntervals();\n    this.savedPiece = undefined;\n    this.savedId = undefined;\n    this.resetPieceQueue();\n    this.renderSavedPiece(7, 0); // clear preview\n    this.renderNextPiece(7, 0);\n    this.clearPreviewAndNext();\n    this.reRender = setInterval(this.render, 30);\n    this.clear();\n    this.randomPiece();\n    this.lost = false;\n    this.score = 0;\n    this.level = 1;\n    this.putScore();\n    this.levelHTML.textContent = this.level;\n    this.putHighScore();\n    this.frameRate = 500;\n    this.frameInterval = setInterval(this.frame, this.frameRate);\n    this.playMusic();\n\n\n};\n\nconst resetIntervals = function() {\n        clearInterval(this.frameInterval);\n        clearInterval(this.reRender);\n};\n\n\n\n//# sourceURL=webpack:///./src/logic/reset.js?");

/***/ }),

/***/ "./src/logic/save.js":
/*!***************************!*\
  !*** ./src/logic/save.js ***!
  \***************************/
/*! exports provided: handleSavePiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSavePiece\", function() { return handleSavePiece; });\nconst handleSavePiece = function() {\n    if (this.savedPiece) {\n        this.oldPiece = this.piece;\n        this.oldPieceType = this.pieceType;\n        this.randomPiece(this.savedPiece, this.savedId);\n        this.savedPiece = this.oldPiece;\n        this.savedId = this.oldPieceType;\n\n    } else {\n        this.savedPiece = this.piece;\n        this.savedId = this.pieceType;\n        this.randomPiece();\n\n    }\n\n    this.renderSavedPiece(this.savedId, this.savedId);\n\n};\n\n\n//# sourceURL=webpack:///./src/logic/save.js?");

/***/ }),

/***/ "./src/presentation/draw.js":
/*!**********************************!*\
  !*** ./src/presentation/draw.js ***!
  \**********************************/
/*! exports provided: drawTile, drawDropTile, strokeTile, drawNextTile, drawPreviewTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawTile\", function() { return drawTile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawDropTile\", function() { return drawDropTile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"strokeTile\", function() { return strokeTile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawNextTile\", function() { return drawNextTile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPreviewTile\", function() { return drawPreviewTile; });\nconst drawTile = function (xInd, yInd)  {\n\n    this.canvasContext.fillRect(this.tileWidth * xInd,\n        this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);\n};\n\nconst drawDropTile = function(xInd, yInd) {\n\n    this.canvasContext.fillRect(this.tileWidth * xInd,\n        this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);\n};\n\n\nconst strokeTile = function (xInd, yInd) {\n    this.canvasContext.strokeRect(this.tileWidth * xInd,\n        this.tileHeight * yInd, this.tileWidth, this.tileHeight);\n\n};\n\nconst drawNextTile = function(xInd, yInd) {\n\n    this.canvasContextNext.fillRect(this.NexttileWidth * xInd,\n        this.NexttileHeight * yInd, this.NexttileWidth - 2, this.NexttileHeight - 2);\n};\n\n\n\nconst drawPreviewTile = function(xInd, yInd) {\n\n    this.canvasContextPreview.fillRect(this.PreviewtileWidth * xInd,\n        this.PreviewtileHeight * yInd, this.PreviewtileWidth - 2, this.PreviewtileHeight - 2);\n};\n\n\n\n//# sourceURL=webpack:///./src/presentation/draw.js?");

/***/ }),

/***/ "./src/presentation/input.js":
/*!***********************************!*\
  !*** ./src/presentation/input.js ***!
  \***********************************/
/*! exports provided: KeyHashing, keyPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyHashing\", function() { return KeyHashing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyPress\", function() { return keyPress; });\nconst KeyHashing = function (keyEvent) {\n    if (!this.started || this.lost) {\n        const keyHash = {\n            90: 'z',\n            77: 'music'\n        };\n        if (keyHash[keyEvent.keyCode] !== undefined) {\n            this.keyPress(keyHash[keyEvent.keyCode]);\n        }\n        return false;\n    }\n    const keyHash = {\n        90: 'z',\n        38: 'up',\n        87: 'up',\n        81: 'up',\n        69: 'up',\n        40: 'down',\n        83: 'down',\n        37: 'left',\n        65: 'left',\n        39: 'right',\n        68: 'right',\n        32: 'space',\n        16: 'save',\n        77: 'music'\n    };\n    if (keyHash[keyEvent.keyCode] !== undefined) {\n\n        this.keyPress(keyHash[keyEvent.keyCode]);\n    }\n};\n\nconst keyPress = function (key) {\n    if (key === 'up' && this.collisionCheck(0, 0, this.rotate(this.activePiece))) {\n        this.activePiece = this.rotate(this.activePiece);\n    } else if (key === 'down' && this.collisionCheck(0, 1)) {\n        this.activeY++;\n    } else if (key === 'left' && this.collisionCheck(-1, 0)) {\n        this.activeX--;\n    } else if (key === 'right' && this.collisionCheck(1, 0)) {\n        this.activeX++;\n    } else if (key === 'space') {\n        while (this.collisionCheck(0, 1)) {\n            this.activeY++;\n        }\n        this.render();\n    } else if (key === 'z') {\n        this.resetGame();\n    } else if (key === 'save') {\n        this.handleSavePiece();\n    } else if (key === 'music') {\n\n        this.audioEnabled = !this.audioEnabled;\n        this.playMusic();\n    }\n\n};\n\n//# sourceURL=webpack:///./src/presentation/input.js?");

/***/ }),

/***/ "./src/presentation/music.js":
/*!***********************************!*\
  !*** ./src/presentation/music.js ***!
  \***********************************/
/*! exports provided: playMusic, lineClearPlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playMusic\", function() { return playMusic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lineClearPlay\", function() { return lineClearPlay; });\nconst playMusic = function () {\n    if (this.themeMusic) {\n        this.themeMusic.pause();\n    }\n\n    if (this.audioEnabled) {\n        if (!this.themeMusic) {\n            this.themeMusic = new Audio('./music/TetrisTheme.mp3');\n            this.themeMusic.volume = 0.05;\n            this.themeMusic.loop = true;\n        }\n        this.themeMusic.play();\n    }\n\n\n};\nconst lineClearPlay = function(){\n    if (this.audioEnabled) {\n        if (!this.linecleareffect) {\n            this.linecleareffect = new Audio('./music/line.wav');\n            this.linecleareffect.volume = 0.15;\n        }\n        this.linecleareffect.play();\n    }\n};\n\n\n//# sourceURL=webpack:///./src/presentation/music.js?");

/***/ }),

/***/ "./src/presentation/render.js":
/*!************************************!*\
  !*** ./src/presentation/render.js ***!
  \************************************/
/*! exports provided: render, renderDrop, renderSavedPiece, renderNextPiece, clear, clearPreviewAndNext, pressZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderDrop\", function() { return renderDrop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSavedPiece\", function() { return renderSavedPiece; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNextPiece\", function() { return renderNextPiece; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear\", function() { return clear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearPreviewAndNext\", function() { return clearPreviewAndNext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pressZ\", function() { return pressZ; });\nconst render = function () {\n\n\n    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n    this.canvasContext.fillStyle = 'black';\n    this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);\n    this.calculateDrop();\n    this.renderDrop();\n\n    for (let xInd = 0; xInd < this.numOfColumns; xInd++) {\n        for (let yInd = 0; yInd < this.numOfRows; yInd++) {\n            if (this.matrix[yInd][xInd]) {\n                this.canvasContext.fillStyle = this.colors[this.matrix[yInd][xInd] - 1];\n                this.drawTile(xInd, yInd);\n            }\n        }\n    }\n    for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n        for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n            if (this.activePiece[yInd][xInd]) {\n                this.canvasContext.fillStyle = this.colors[this.activePiece[yInd][xInd] - 1];\n                this.drawTile(this.activeX + xInd, this.activeY + yInd);\n            }\n        }\n    }\n\n\n\n\n};\n\nconst renderDrop = function () {\n    for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n        for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n            if (this.preDrop[yInd][xInd]) {\n                this.canvasContext.fillStyle = this.dropColors[this.preDrop[yInd][xInd] - 1];\n                this.drawDropTile(this.dropX + xInd, this.bottomY + yInd);\n            }\n        }\n    }\n};\n\nconst renderSavedPiece = function (shapeId, color) {\n    // this.piecesNames = ['S piece', 'Z piece', 'Square piece', 'T piece', 'J piece', 'L piece', 'Line piece']\n\n\n    this.PreviewMatrix = this.previewArrays[shapeId];\n    this.canvasPreview = document.getElementsByTagName('canvas')[1];\n\n    this.canvasContextPreview = this.canvasPreview.getContext('2d');\n    this.canvasPreviewHeight = this.canvasPreview.height;\n    this.canvasPreviewWidth = this.canvasPreview.width;\n    this.PreviewNumOfColumns = 3;\n    this.PreviewNumOfRows = 4;\n    this.PreviewtileHeight = this.canvasPreviewHeight / this.PreviewNumOfRows;\n    this.PreviewtileWidth = this.PreviewtileHeight;\n    this.canvasContextPreview.fillStyle = '#422445';\n\n    this.canvasContextPreview.strokeStyle = 'silver';\n    this.canvasContextPreview.clearRect(0, 0, this.canvasPreviewWidth, this.canvasPreviewHeight);\n    this.canvasContextPreview.fillRect(0, 0, this.canvasPreviewWidth, this.canvasPreviewHeight);\n    for (let xInd = 0; xInd < this.PreviewNumOfColumns; xInd++) {\n        for (let yInd = 0; yInd < this.PreviewNumOfRows; yInd++) {\n            if (this.PreviewMatrix[yInd][xInd]) {\n                this.canvasContextPreview.fillStyle = this.colors[color];\n                this.drawPreviewTile(xInd, yInd);\n            }\n        }\n    }\n\n};\n\nconst renderNextPiece = function (shapeId, color) {\n\n\n    this.nextMatrix = this.nextArrays[shapeId];\n    this.canvasNext = document.getElementsByTagName('canvas')[2];\n\n    this.canvasContextNext = this.canvasNext.getContext('2d');\n    this.canvasNextHeight = this.canvasNext.height;\n    this.canvasNextWidth = this.canvasNext.width;\n    this.NextNumOfColumns = 3;\n    this.NextNumOfRows = 4;\n    this.NexttileHeight = this.canvasNextHeight / this.NextNumOfRows;\n    this.NexttileWidth = this.NexttileHeight;\n    this.canvasContextNext.fillStyle = '#422445';\n\n    this.canvasContextNext.strokeStyle = 'silver';\n    this.canvasContextNext.clearRect(0, 0, this.canvasNextWidth, this.canvasNextHeight);\n    this.canvasContextNext.fillRect(0, 0, this.canvasNextWidth, this.canvasNextHeight);\n    for (let xInd = 0; xInd < this.NextNumOfColumns; xInd++) {\n        for (let yInd = 0; yInd < this.NextNumOfRows; yInd++) {\n            if (this.nextMatrix[yInd][xInd]) {\n                this.canvasContextNext.fillStyle = this.colors[color];\n                this.drawNextTile(xInd, yInd);\n            }\n        }\n    }\n\n};\n\n\nconst clear = function () {\n    for (let yInd = 0; yInd < this.numOfRows; yInd++) {\n        this.matrix[yInd] = [];\n        for (let xInd = 0; xInd < this.numOfColumns; xInd++) {\n            this.matrix[yInd][xInd] = 0;\n        }\n    }\n};\n\nconst clearPreviewAndNext = function () {\n    this.canvasContextNext.clearRect(0, 0, this.canvasNextWidth, this.canvasNextHeight);\n    this.canvasContextPreview.clearRect(0, 0, this.canvasPreviewWidth, this.canvasPreviewHeight);\n};\n\nconst pressZ = function () {\n    this.canvasContext.fillStyle = 'white';\n    this.canvasContext.fillText(\"Press Z!\", this.canvasWidth / 2, this.canvasHeight / 2);\n};\n\n//# sourceURL=webpack:///./src/presentation/render.js?");

/***/ }),

/***/ "./src/presentation/score.js":
/*!***********************************!*\
  !*** ./src/presentation/score.js ***!
  \***********************************/
/*! exports provided: putScore, putLevel, putHighScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putScore\", function() { return putScore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putLevel\", function() { return putLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putHighScore\", function() { return putHighScore; });\nconst putScore = function() {\n    if (!this.scoreHTML) {\n        this.scoreHTML = document.getElementById('score');\n    }\n    this.scoreHTML.textContent = this.score;\n    this.putLevel();\n};\n\nconst putLevel = function() {\n    if (!this.levelHTML) {\n        this.levelHTML = document.getElementById('level');\n        this.levelHTML.textContent = this.level;\n    }\n    if (this.level !== Math.floor(this.score / 1200) + 1) {\n\n        this.level = Math.floor(this.score / 1200) + 1;\n        this.levelHTML.textContent = this.level;\n        clearInterval(this.frameInterval);\n        this.frameRate -= (this.frameRate * 0.05);\n        this.frameInterval = setInterval(this.frame, this.frameRate);\n\n    }\n\n};\n\nconst putHighScore = function() {\n    let scoreHighHTML = document.getElementById('high-score-num');\n    scoreHighHTML.textContent = document.cookie;\n};\n\n\n//# sourceURL=webpack:///./src/presentation/score.js?");

/***/ })

/******/ });