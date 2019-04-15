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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var favicon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! favicon.js */ \"./node_modules/favicon.js/favicon.js\");\n/* harmony import */ var favicon_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(favicon_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nObject(favicon_js__WEBPACK_IMPORTED_MODULE_1__[\"animate\"])([\n    \"data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAJYAAAEsBAMAAADTCVd2AAAABGdBTUEAALGPC / xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX/////46v/o0f4OAD///8MQsbnAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAHdElNRQfjBAwAOBWZEILkAAABeElEQVR42u3bYbKCIBSGYW9tIGMDqRuQ2P/euuMdaQg4SKlc7P3+6eTzC5jDgZpGSBvOpXkjWFjrWz9tPNf+NzcsrPKWwLT9HCysL7JyV38srC0t48SO9MF5mpIe91hYFVjS18Os33svNyys8lbk60CwsPaxzpFV2beGCI+FdQir94lIRncqYmHtY0krPBZWeSuw53urvMHCqtNKTauM4xwsrM2twJmhmlHtd6BP0gTAwqrB8ssYbUH31fTzdCMGC2t9S9giPkFln4x0nIKFtZF1Nolob7E27vUMLKwvsmy9Pr3Cwipq6XBBbdxyJbbxxMJaz5KGu3+3s7OgbVGPy8obLKz/benld0Qzdp9YWJ9akVORDgsLK2X9FTtYWPtaXd56/yzosbA2texR3XJLRcpuLKyqLPe/gSpVmGNhlbXc7obyex1YWGUtqROXbEpjYR3Ciiz1F+EOKRZWMevlTlxGsLBqsfxJMTafBAsLCwsruFiPWFgHth5xUWXa470iagAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0xMVQyMjo1NjoyMSswMjowMKeUI54AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMTFUMjI6NTY6MjErMDI6MDDWyZsiAAAAAElFTkSuQmCC\",\n    \"data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAJYAAAEsBAMAAADTCVd2AAAABGdBTUEAALGPC / xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX/////46v/o0f4OAD///8MQsbnAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAHdElNRQfjBAwAOBWZEILkAAABS0lEQVR42u3bQQ7CIBCFYY0XaOUCpr1Atfe/m5ZElAjMsKBQ/N9KSfvFRUGgw+lECCFk15zHcLCwOrRixJbr9AoWVn1LZCYsrP+yxszRHwurpHVZv/NwT7r/TffwY2GVslJ3B/gkioV1XCt29ySCWFiFrMgIH7DmrQkLqyXLz5pIoPtgYR3BUoEzFlYjlr+IVM1IbroFKRZW25Zl7pFtaN0vwcIqbjnGeMO5bdo+LBmvHbGwKlg2rnnBwurG8juMCc+9P38DydEfC6u45S41qxB5jw8LaxdrfM9GsLC6tmz0VgDEwqpmiQM/FlanVqxHyYdPsLBqWbkHpbCw2rDk19pYWO1aqX28SIy30hywsFqzIhdgYbVkmd89u9DcBAurF2tIzVuwsKpai1RgIZfwY2EdxdIXFmFhVbN0xXTyGSksrJJWXo0yFlYX1hOrrVmoKyTYiQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0xMVQyMjo1NjoyMSswMjowMKeUI54AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMTFUMjI6NTY6MjErMDI6MDDWyZsiAAAAAElFTkSuQmCC\",\n    \"data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAJYAAAEsBAMAAADTCVd2AAAABGdBTUEAALGPC / xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX/////46v/o0f4OAD///8MQsbnAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAHdElNRQfjBAwAOBWZEILkAAABUElEQVR42u3aXQ6DIBBGURs3UGQDVjdQdf97azVRQ3HwLyjQ+72ZyHkbMo6TZYQkELWcJxZWGNZDySmqb0osrLQsB6OqMVhYgVt7b38srFiszshUNbXxNGS9hrCwPFmu0/Wot5WVEgvrfks4vRAsrPisXLjhbasWeCys26zKJoS8zfLBwvJpmS20dCtjYSVobQP3fkRiYXmyhH8nxc5RNBZWVFZfPk1/Wo/F1Ezg+g2PhXWJNbxmMHMmUGNhxWQNwcL6H2sGsbCCtBZm1VhYQVrtkZEJFlYElrL7D5c1vIqFdau1AEqWtNuJhRWnZU71TOu1utOMhXWxZVdBs23/HgvLp+UCtTD52NZMY2EFbtn/t7Vj7a7DwgrEOsVgYXm3TFDv2ObEworcysfptBIqCgsrJMs+nWNhJWrl5zsbLKxbrSO9CRaWT+tnPQMLKz3rA7oD91kewo9BAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA0LTExVDIyOjU2OjIxKzAyOjAwp5QjngAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNC0xMVQyMjo1NjoyMSswMjowMNbJmyIAAAAASUVORK5CYII=\",\n], 15);\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n// import KeyHashing from './input';\n// import CanvasDraw from './canvas';\n\n\n\n\nclass Game {\n    constructor(){\n        \n        \n        const game = new _gameLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        \n        // game.resetGame();\n        //  setInterval(e.render, 1);\n\n        \n\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameLogic {\n\n    constructor() {\n        this.canvas = document.getElementsByTagName('canvas')[0];\n        this.canvasContext = this.canvas.getContext('2d');\n        this.canvasHeight = this.canvas.height;\n        this.canvasWidth = this.canvas.width;\n        this.numOfColumns = 10;\n        this.numOfRows = 20;\n        this.tileHeight = this.canvasHeight / this.numOfRows;\n        this.tileWidth = this.canvasWidth / this.numOfColumns;\n        this.canvasContext.font = \"30px Arial\";\n        this.canvasContext.fillStyle = 'white';\n        this.canvasContext.textAlign = \"center\";\n        this.audioEnabled = false;\n\n        this.canvasContext.fillText(\"Press Z to Play!\", this.canvasWidth / 2, this.canvasHeight / 2);\n\n\n\n\n        this.matrix = [];\n        this.pieces = [\n            [0, 1, 1, 0,\n                1, 1\n            ],\n            [1, 1, 0, 0,\n                0, 1, 1\n            ],\n            [1, 1, 0, 0,\n                1, 1\n            ],\n\n            [0, 1, 0, 0,\n                1, 1, 1\n            ],\n            [1, 1, 1, 0,\n                0, 0, 1\n            ],\n            [1, 1, 1, 0,\n                1\n            ],\n            [1, 1, 1, 1]\n\n        ];\n        this.piecesNames = ['S piece', 'Z piece', 'Square piece', 'T piece', 'J piece', 'L piece', 'Line piece']\n        this.colors = ['#00F000', '#F02300', '#d1d100', '#9F35F0', '#022FF0', '#F0A000', '#00F0F0'];\n\n        this.drawTile = this.drawTile.bind(this);\n        this.render = this.render.bind(this);\n        this.stopFalling = this.stopFalling.bind(this);\n        this.frame = this.frame.bind(this);\n        this.randomPiece = this.randomPiece.bind(this);\n        this.clear = this.clear.bind(this);\n        // this.testing = this.testing.bind(this);\n        this.testx = 0;\n        this.testy = 0;\n        // this.activeColor = 'darkkhaki';\n        this.activeColorBack = 'white';\n\n\n        this.lost = false;\n\n        this.activePiece = [];\n        this.activeX = 5;\n        this.activeY = 0;\n        this.sizeOfPiece = 4;\n        this.pieceType = 0;\n        this.piece = [];\n        this.notFalling = false;\n        this.keyPress = this.keyPress.bind(this);\n        this.KeyHashing = this.KeyHashing.bind(this);\n        document.body.onkeydown = this.KeyHashing;\n        this.deleteLines = this.deleteLines.bind(this);\n        this.notZero = this.notZero.bind(this);\n        this.deleteAndMoveLine = this.deleteAndMoveLine.bind(this);\n        this.putScore.bind(this);\n        this.rotate = this.rotate.bind(this);\n        this.handleSavePiece = this.handleSavePiece.bind(this);\n        this.playMusic = this.playMusic.bind(this);\n        this.score = 0;\n        // this.canvasContext.lineWidth = 2;\n        this.putScore();\n\n\n\n    }\n\n\n    drawTile(xInd, yInd) {\n\n        this.canvasContext.fillRect(this.tileWidth * xInd,\n            this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);\n        this.canvasContext.strokeRect(this.tileWidth * xInd,\n            this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);\n    }\n\n\n\n\n\n    render() {\n\n\n        this.canvasContext.strokeStyle = 'silver';\n        this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n        this.canvasContext.fillStyle = 'white';\n        this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);\n        for (let xInd = 0; xInd < this.numOfColumns; xInd++) {\n            for (let yInd = 0; yInd < this.numOfRows; yInd++) {\n                if (this.matrix[yInd][xInd]) {\n                    this.canvasContext.fillStyle = this.colors[this.matrix[yInd][xInd] - 1];\n                    this.drawTile(xInd, yInd);\n                }\n            }\n        }\n        this.canvasContext.strokeStyle = 'silver';\n        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n                if (this.activePiece[yInd][xInd]) {\n                    this.canvasContext.fillStyle = this.colors[this.activePiece[yInd][xInd] - 1];\n                    this.drawTile(this.activeX + xInd, this.activeY + yInd);\n                }\n            }\n        }\n    }\n\n\n\n\n\n\n    randomPiece(givenPiece, givenId) {\n        if (givenPiece === undefined) {\n            // debugger\n            this.pieceType = Math.floor(Math.random() * this.pieces.length);\n            this.piece = this.pieces[this.pieceType];\n        } else {\n            // debugger\n            this.pieceType = givenId;\n            this.piece = givenPiece;\n        }\n\n\n\n\n\n\n        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n            this.activePiece[yInd] = [];\n            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n                let ind = 4 * yInd + xInd;\n                if (this.piece[ind] !== undefined && this.piece[ind]) {\n                    this.activePiece[yInd][xInd] = this.pieceType + 1;\n                } else {\n                    this.activePiece[yInd][xInd] = 0;\n                }\n            }\n\n        }\n\n        this.notFalling = false;\n        this.activeX = 5;\n        this.activeY = 0;\n\n\n\n    }\n\n    clear() {\n        for (let yInd = 0; yInd < this.numOfRows; yInd++) {\n            this.matrix[yInd] = [];\n            for (let xInd = 0; xInd < this.numOfColumns; xInd++) {\n                this.matrix[yInd][xInd] = 0;\n            }\n        }\n    }\n\n    stopFalling() {\n        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n                if (this.activePiece[yInd][xInd]) {\n\n                    this.matrix[yInd + this.activeY][xInd + this.activeX] = this.activePiece[yInd][xInd];\n                }\n            }\n        }\n        this.notFalling = true;\n\n    }\n\n    resetGame() {\n        this.resetIntervals();\n        this.reRender = setInterval(this.render, 40);\n        this.clear();\n        this.randomPiece(); \n        this.lost = false;\n        this.score = 0;\n        this.putScore();\n        this.frameInterval = setInterval(this.frame, 500);\n        this.playMusic();\n        \n\n    }\n\n    playMusic() {\n        if (this.themeMusic) {\n            this.themeMusic.pause();\n        }\n\n        if (this.audioEnabled) {\n            this.themeMusic = new Audio('./music/Tetristheme.mp3');\n            this.themeMusic.play();\n        }\n\n\n    }\n\n\n    resetIntervals() {\n        clearInterval(this.frameInterval);\n        clearInterval(this.reRender);\n    }\n\n    frame() {\n        if (this.collisionCheck(0, 1)) {\n            this.activeY++;\n        } else {\n            this.stopFalling();\n            this.collisionCheck(0, 1);\n            this.deleteLines();\n            if (this.lost) {\n                this.resetIntervals();\n                this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n                this.canvasContext.fillStyle = 'white';\n                this.canvasContext.fillText(\"Press Z to Play Again!\", this.canvasWidth / 2, this.canvasHeight / 2);\n\n                // return 0;\n                // this.resetGame();\n            }\n            this.randomPiece();\n        }\n    }\n\n    rotate(activePiece) {\n        let rotatedPiece = [];\n        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n            rotatedPiece[yInd] = [];\n            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n                rotatedPiece[yInd][xInd] = activePiece[3 - xInd][yInd];\n\n            }\n\n        }\n\n        return rotatedPiece;\n\n    }\n\n\n    KeyHashing(keyEvent) {\n        const keyHash = {\n            90: 'z',\n            38: 'up',\n            87: 'up',\n            81: 'up',\n            69: 'up',\n            40: 'down',\n            83: 'down',\n            37: 'left',\n            65: 'left',\n            39: 'right',\n            68: 'right',\n            32: 'space',\n            16: 'save',\n            77: 'music'\n        };\n        if (keyHash[keyEvent.keyCode] !== undefined) {\n            // console.log(keyHash[keyEvent.keyCode]);\n\n            this.keyPress(keyHash[keyEvent.keyCode]);\n        }\n    }\n\n    keyPress(key) {\n        if (key === 'up' && this.collisionCheck(0, 0, this.rotate(this.activePiece))) {\n            this.activePiece = this.rotate(this.activePiece);\n        } else if (key === 'down' && this.collisionCheck(0, 1)) {\n            this.activeY++;\n        } else if (key === 'left' && this.collisionCheck(-1, 0)) {\n            this.activeX--;\n        } else if (key === 'right' && this.collisionCheck(1, 0)) {\n            this.activeX++;\n        } else if (key === 'space') {\n            while (this.collisionCheck(0, 1)) {\n                this.activeY++;\n            }\n            this.render();\n        } else if (key === 'z') {\n            this.resetGame();\n        } else if (key === 'save') {\n            this.handleSavePiece();\n        } else if (key === 'music') {\n            \n            this.audioEnabled = !this.audioEnabled;\n            this.playMusic();   \n        }\n\n\n\n\n\n\n    }\n\n\n    handleSavePiece() {\n        if (this.savedPiece) {\n            this.oldPiece = this.piece;\n            this.oldPieceType = this.pieceType;\n            this.randomPiece(this.savedPiece, this.savedId);\n            this.savedPiece = this.oldPiece;\n            this.savedId = this.oldPieceType;\n            let scoreHTML = document.getElementById('saved-piece');\n            // scoreHTML.textContent = this.pieceNames[this.savedId];\n            scoreHTML.textContent = this.piecesNames[this.savedId];\n\n\n\n        } else {\n            this.savedPiece = this.piece;\n            this.savedId = this.pieceType;\n            let scoreHTML = document.getElementById('saved-piece');\n            // scoreHTML.textContent = this.pieceNames[this.savedId];\n            scoreHTML.textContent = this.piecesNames[this.savedId];\n\n            this.randomPiece();\n\n        }\n\n    }\n\n\n    collisionCheck(moveX = 0, moveY = 0, movedPiece = this.activePiece) {\n        moveX = this.activeX + moveX;\n        moveY = this.activeY + moveY;\n\n        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {\n            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {\n                if (movedPiece[yInd][xInd]) {\n                    if (this.matrix[yInd + moveY] === undefined ||\n                        this.matrix[yInd + moveY][xInd + moveX] === undefined ||\n                        this.matrix[yInd + moveY][xInd + moveX] ||\n                        xInd + moveX < 0 ||\n                        yInd + moveY >= this.numOfRows || xInd + moveX >= this.numOfColumns) {\n                        if (this.notFalling && moveY == 1) {\n                            this.lost = true;\n\n                            console.log('lost');\n                            // this.score = \"LOST\";\n                            // this.putScore();\n                        }\n                        return false;\n                    }\n                }\n            }\n        }\n\n        return true;\n    }\n\n    notZero(tile) {\n        return tile !== 0;\n    }\n\n    deleteAndMoveLine(linenum) {\n        for (let i = linenum; i > 0; i--) {\n            for (let xInd = 0; xInd < this.numOfColumns; xInd++) {\n                this.matrix[i][xInd] = this.matrix[i - 1][xInd];\n            }\n        }\n\n    }\n\n\n    deleteLines() {\n        for (let yInd = this.numOfRows - 1; yInd >= 0; yInd--) {\n            let complete = this.matrix[yInd].every(this.notZero);\n\n            if (complete) {\n                this.deleteAndMoveLine(yInd);\n                this.score++;\n                this.putScore();\n                yInd++;\n                if (this.audioEnabled){\n                    if (!this.linecleareffect){\n                    this.linecleareffect = new Audio('./music/line.wav');\n                    }\n                    this.linecleareffect.play();\n                }\n            }\n        }\n    }\n\n    putScore() {\n        let scoreHTML = document.getElementById('score');\n        scoreHTML.textContent = this.score;\n    }\n\n\n\n\n\n\n\n\n    // git subtree push --prefix dist origin gh-pages\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameLogic);\n\n//# sourceURL=webpack:///./src/gameLogic.js?");

/***/ })

/******/ });