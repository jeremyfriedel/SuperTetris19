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

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass CanvasDraw {\n\n    constructor(){\n        this.canvas = document.getElementsByTagName('canvas')[0];\n        this.canvasContext = this.canvas.getContext('2d');\n        this.canvasHeight = this.canvas.height;\n        this.canvasWidth = this.canvas.width;\n        this.numOfColumns = 10;\n        this.numOfRows = 20;\n        this.blockHeight = this.canvasHeight / this.numOfRows;\n        this.blockWidth = this.canvasWidth / this.numOfColumns;\n        this.drawRect = this.drawRect.bind(this);\n        this.render = this.render.bind(this);\n        // this.testing = this.testing.bind(this);\n        this.testx = 0;\n        this.testy = 0;\n\n    }\n\n    drawRect(x,y){\n        \n        this.canvasContext.fillRect(this.blockWidth * x, \n            this.blockHeight * y, this.blockWidth - 2, this.blockHeight - 2);\n        this.canvasContext.strokeRect(this.blockWidth * x, \n            this.blockHeight * y, this.blockWidth - 2, this.blockHeight - 2);\n    }\n\n    getRandomColor(){\n        var letters = '0123456789ABCDEF';\n        var color = '#';\n        for (var i = 0; i < 6; i++) {\n            color += letters[Math.floor(Math.random() * 16)];\n        }\n        return color;\n    }\n\n\n    render() {\n        this.canvasContext.fillStyle = 'white';\n        this.canvasContext.strokeStyle = 'red';\n        this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n        this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);\n        for (let x = 0; x < this.canvasHeight; x++) {\n            for (let y = 0; y < this.canvasWidth; y++) {\n                this.canvasContext.fillStyle = this.getRandomColor();\n                this.drawRect(x, y);\n                \n            }\n        }\n\n\n\n        this.canvasContext.fillStyle = 'black';\n        // setInterval(this.testing, 100);\n\n\n        // this.drawRect(0,0);\n\n\n        // this.drawRect();\n    }\n\n    // testing() {\n    //     this.testx++;\n\n        \n    //     this.drawRect(this.testy, this.testx);\n    //     if (this.testx > this.numOfRows) {\n    //         this.testx = 0;\n    //         this.testy++;\n\n    //         this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n\n    //     }\n        \n\n\n    // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasDraw);\n\n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var favicon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! favicon.js */ \"./node_modules/favicon.js/favicon.js\");\n/* harmony import */ var favicon_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(favicon_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nObject(favicon_js__WEBPACK_IMPORTED_MODULE_1__[\"animate\"])([\n    \"data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAJYAAAEsBAMAAADTCVd2AAAABGdBTUEAALGPC / xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX/////46v/o0f4OAD///8MQsbnAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAHdElNRQfjBAwAOBWZEILkAAABeElEQVR42u3bYbKCIBSGYW9tIGMDqRuQ2P/euuMdaQg4SKlc7P3+6eTzC5jDgZpGSBvOpXkjWFjrWz9tPNf+NzcsrPKWwLT9HCysL7JyV38srC0t48SO9MF5mpIe91hYFVjS18Os33svNyys8lbk60CwsPaxzpFV2beGCI+FdQir94lIRncqYmHtY0krPBZWeSuw53urvMHCqtNKTauM4xwsrM2twJmhmlHtd6BP0gTAwqrB8ssYbUH31fTzdCMGC2t9S9giPkFln4x0nIKFtZF1Nolob7E27vUMLKwvsmy9Pr3Cwipq6XBBbdxyJbbxxMJaz5KGu3+3s7OgbVGPy8obLKz/benld0Qzdp9YWJ9akVORDgsLK2X9FTtYWPtaXd56/yzosbA2texR3XJLRcpuLKyqLPe/gSpVmGNhlbXc7obyex1YWGUtqROXbEpjYR3Ciiz1F+EOKRZWMevlTlxGsLBqsfxJMTafBAsLCwsruFiPWFgHth5xUWXa470iagAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0xMVQyMjo1NjoyMSswMjowMKeUI54AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMTFUMjI6NTY6MjErMDI6MDDWyZsiAAAAAElFTkSuQmCC\",\n    \"data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAJYAAAEsBAMAAADTCVd2AAAABGdBTUEAALGPC / xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX/////46v/o0f4OAD///8MQsbnAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAHdElNRQfjBAwAOBWZEILkAAABS0lEQVR42u3bQQ7CIBCFYY0XaOUCpr1Atfe/m5ZElAjMsKBQ/N9KSfvFRUGgw+lECCFk15zHcLCwOrRixJbr9AoWVn1LZCYsrP+yxszRHwurpHVZv/NwT7r/TffwY2GVslJ3B/gkioV1XCt29ySCWFiFrMgIH7DmrQkLqyXLz5pIoPtgYR3BUoEzFlYjlr+IVM1IbroFKRZW25Zl7pFtaN0vwcIqbjnGeMO5bdo+LBmvHbGwKlg2rnnBwurG8juMCc+9P38DydEfC6u45S41qxB5jw8LaxdrfM9GsLC6tmz0VgDEwqpmiQM/FlanVqxHyYdPsLBqWbkHpbCw2rDk19pYWO1aqX28SIy30hywsFqzIhdgYbVkmd89u9DcBAurF2tIzVuwsKpai1RgIZfwY2EdxdIXFmFhVbN0xXTyGSksrJJWXo0yFlYX1hOrrVmoKyTYiQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0xMVQyMjo1NjoyMSswMjowMKeUI54AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMTFUMjI6NTY6MjErMDI6MDDWyZsiAAAAAElFTkSuQmCC\",\n    \"data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAJYAAAEsBAMAAADTCVd2AAAABGdBTUEAALGPC / xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX/////46v/o0f4OAD///8MQsbnAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAHdElNRQfjBAwAOBWZEILkAAABUElEQVR42u3aXQ6DIBBGURs3UGQDVjdQdf97azVRQ3HwLyjQ+72ZyHkbMo6TZYQkELWcJxZWGNZDySmqb0osrLQsB6OqMVhYgVt7b38srFiszshUNbXxNGS9hrCwPFmu0/Wot5WVEgvrfks4vRAsrPisXLjhbasWeCys26zKJoS8zfLBwvJpmS20dCtjYSVobQP3fkRiYXmyhH8nxc5RNBZWVFZfPk1/Wo/F1Ezg+g2PhXWJNbxmMHMmUGNhxWQNwcL6H2sGsbCCtBZm1VhYQVrtkZEJFlYElrL7D5c1vIqFdau1AEqWtNuJhRWnZU71TOu1utOMhXWxZVdBs23/HgvLp+UCtTD52NZMY2EFbtn/t7Vj7a7DwgrEOsVgYXm3TFDv2ObEworcysfptBIqCgsrJMs+nWNhJWrl5zsbLKxbrSO9CRaWT+tnPQMLKz3rA7oD91kewo9BAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA0LTExVDIyOjU2OjIxKzAyOjAwp5QjngAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNC0xMVQyMjo1NjoyMSswMjowMNbJmyIAAAAASUVORK5CYII=\",\n], 15);\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n\n\n\n\n\nclass Game {\n    constructor(){\n        document.body.onkeydown = _input__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        \n        const e = new _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        e.render();\n        //  setInterval(e.render, 1);\n\n        \n\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst KeyHashing = (keyEvent) => {\n    const keyHash = {\n        37: 'left',\n        65: 'left',\n        39: 'right',\n        68: 'right',\n        40: 'down',\n        83: 'down',\n        38: 'rotate',\n        87: 'rotate',\n        32: 'drop'\n    };\n    if (keyHash[ keyEvent.keyCode ] !== undefined ) {\n        console.log(keyHash[keyEvent.keyCode]);\n        // keyPress(keyHash[keyEvent.keyCode] );\n        // render();\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyHashing);\n\n\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ })

/******/ });