!function(e){var A={};function t(i){if(A[i])return A[i].exports;var s=A[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=A,t.d=function(e,A,i){t.o(e,A)||Object.defineProperty(e,A,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,A){if(1&A&&(e=t(e)),8&A)return e;if(4&A&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&A&&"string"!=typeof e)for(var s in e)t.d(i,s,function(A){return e[A]}.bind(null,s));return i},t.n=function(e){var A=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(A,"a",A),A},t.o=function(e,A){return Object.prototype.hasOwnProperty.call(e,A)},t.p="",t(t.s=1)}([function(e,A,t){var i,s,h;"undefined"!=typeof self&&self,s=[],void 0===(h="function"==typeof(i=function(){var e=document,A=e.getElementsByTagName("head")[0],t=null,i=function(t){var i=e.createElement("link");i.type="image/x-icon",i.rel="icon",i.href=t,s(),A.appendChild(i)},s=function(){for(var e=A.getElementsByTagName("link"),t=0;t<e.length;t++)/\bicon\b/i.test(e[t].getAttribute("rel"))&&A.removeChild(e[t])};return{defaultPause:2e3,change:function(A,s){clearTimeout(t),s&&(e.title=s),""!==A&&i(A)},animate:function(e,A){clearTimeout(t),e.forEach(function(e){(new Image).src=e}),A=A||this.defaultPause;var s=0;i(e[s]),t=setTimeout(function h(){s=(s+1)%e.length,i(e[s]),t=setTimeout(h,A)},A)},stopAnimate:function(){clearTimeout(t)}}})?i.apply(A,s):i)||(e.exports=h)},function(e,A,t){"use strict";t.r(A);var i=class{constructor(){this.started=!1,this.canvas=document.getElementsByTagName("canvas")[0],this.canvasContext=this.canvas.getContext("2d"),this.canvasHeight=this.canvas.height,this.canvasWidth=this.canvas.width,this.numOfColumns=10,this.numOfRows=20,this.tileHeight=this.canvasHeight/this.numOfRows,this.tileWidth=this.canvasWidth/this.numOfColumns,this.canvasContext.font="30px arcade",this.canvasContext.fillStyle="white",this.canvasContext.textAlign="center",this.audioEnabled=!1,this.matrix=[],this.pieces=[[0,1,1,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,1,1],[0,1,0,0,1,1,1],[1,1,1,0,0,0,1],[1,1,1,0,1],[1,1,1,1]],this.previewArrays=[[[0,0,0],[0,0,0],[0,1,1],[1,1,0]],[[0,0,0],[0,0,0],[1,1,0],[0,1,1]],[[0,0,0],[0,0,0],[1,1,0],[1,1,0]],[[0,0,0],[0,0,0],[0,1,0],[1,1,1]],[[0,0,0],[0,1,0],[0,1,0],[1,1,0]],[[0,0,0],[1,0,0],[1,0,0],[1,1,0]],[[0,1,0],[0,1,0],[0,1,0],[0,1,0]],[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],this.nextArrays=this.previewArrays,this.level=1,this.piecesNames=["S piece","Z piece","Square","T piece","J piece","L piece","Line piece"],this.colors=["#349E00","#EC003F","#FEDE1B","#A737FA","#2131F8","#FB700A","#03E5FF"],this.dropColors=["#194204","#38000A","#3D3107","#27003B","#04003C","#3B1103","#05383A"],this.resetPieceQueue=this.resetPieceQueue.bind(this),this.resetPieceQueue(),this.clearPreviewAndNext=this.clearPreviewAndNext.bind(this),this.drawTile=this.drawTile.bind(this),this.render=this.render.bind(this),this.putLevel=this.putLevel.bind(this),this.stopFalling=this.stopFalling.bind(this),this.calculateDrop=this.calculateDrop.bind(this),this.renderDrop=this.renderDrop.bind(this),this.drawDropTile=this.drawDropTile.bind(this),this.frame=this.frame.bind(this),this.randomPiece=this.randomPiece.bind(this),this.drawNextTile=this.drawNextTile.bind(this),this.clear=this.clear.bind(this),this.drawTile=this.drawTile.bind(this),this.testx=0,this.testy=0,this.activeColorBack="white",this.lost=!1,this.activePiece=[],this.activeX=5,this.activeY=0,this.sizeOfPiece=4,this.pieceType=0,this.piece=[],this.notFalling=!1,this.keyPress=this.keyPress.bind(this),this.KeyHashing=this.KeyHashing.bind(this),document.body.onkeydown=this.KeyHashing,this.deleteLines=this.deleteLines.bind(this),this.notZero=this.notZero.bind(this),this.deleteAndMoveLine=this.deleteAndMoveLine.bind(this),this.putScore.bind(this),this.rotate=this.rotate.bind(this),this.handleSavePiece=this.handleSavePiece.bind(this),this.playMusic=this.playMusic.bind(this),this.renderSavedPiece=this.renderSavedPiece.bind(this),this.renderNextPiece=this.renderNextPiece.bind(this),this.drawPreviewTile=this.drawPreviewTile.bind(this),this.putHighScore=this.putHighScore.bind(this),this.pressZ=this.pressZ.bind(this),this.putHighScore(),this.score=0,this.putScore(),this.scoring=[0,40,100,300,1200],setTimeout(this.pressZ,0)}drawTile(e,A){this.canvasContext.fillRect(this.tileWidth*e,this.tileHeight*A,this.tileWidth-2,this.tileHeight-2)}drawDropTile(e,A){this.canvasContext.fillRect(this.tileWidth*e,this.tileHeight*A,this.tileWidth-2,this.tileHeight-2)}strokeTile(e,A){this.canvasContext.strokeRect(this.tileWidth*e,this.tileHeight*A,this.tileWidth,this.tileHeight)}resetPieceQueue(){this.pieceQueue=[Math.floor(Math.random()*this.pieces.length),Math.floor(Math.random()*this.pieces.length)]}pressZ(){this.canvasContext.fillText("Press Z!",this.canvasWidth/2,this.canvasHeight/2)}render(){this.canvasContext.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.canvasContext.fillStyle="black",this.canvasContext.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.calculateDrop(),this.renderDrop();for(let e=0;e<this.numOfColumns;e++)for(let A=0;A<this.numOfRows;A++)this.matrix[A][e]&&(this.canvasContext.fillStyle=this.colors[this.matrix[A][e]-1],this.drawTile(e,A));for(let e=0;e<this.sizeOfPiece;e++)for(let A=0;A<this.sizeOfPiece;A++)this.activePiece[e][A]&&(this.canvasContext.fillStyle=this.colors[this.activePiece[e][A]-1],this.drawTile(this.activeX+A,this.activeY+e))}renderDrop(){for(let e=0;e<this.sizeOfPiece;e++)for(let A=0;A<this.sizeOfPiece;A++)this.preDrop[e][A]&&(this.canvasContext.fillStyle=this.dropColors[this.preDrop[e][A]-1],this.drawDropTile(this.dropX+A,this.bottomY+e))}renderSavedPiece(e,A){this.PreviewMatrix=this.previewArrays[e],this.canvasPreview=document.getElementsByTagName("canvas")[1],this.canvasContextPreview=this.canvasPreview.getContext("2d"),this.canvasPreviewHeight=this.canvasPreview.height,this.canvasPreviewWidth=this.canvasPreview.width,this.PreviewNumOfColumns=3,this.PreviewNumOfRows=4,this.PreviewtileHeight=this.canvasPreviewHeight/this.PreviewNumOfRows,this.PreviewtileWidth=this.PreviewtileHeight,this.canvasContextPreview.fillStyle="#422445",this.canvasContextPreview.strokeStyle="silver",this.canvasContextPreview.clearRect(0,0,this.canvasPreviewWidth,this.canvasPreviewHeight),this.canvasContextPreview.fillRect(0,0,this.canvasPreviewWidth,this.canvasPreviewHeight);for(let e=0;e<this.PreviewNumOfColumns;e++)for(let t=0;t<this.PreviewNumOfRows;t++)this.PreviewMatrix[t][e]&&(this.canvasContextPreview.fillStyle=this.colors[A],this.drawPreviewTile(e,t))}renderNextPiece(e,A){this.nextMatrix=this.nextArrays[e],this.canvasNext=document.getElementsByTagName("canvas")[2],this.canvasContextNext=this.canvasNext.getContext("2d"),this.canvasNextHeight=this.canvasNext.height,this.canvasNextWidth=this.canvasNext.width,this.NextNumOfColumns=3,this.NextNumOfRows=4,this.NexttileHeight=this.canvasNextHeight/this.NextNumOfRows,this.NexttileWidth=this.NexttileHeight,this.canvasContextNext.fillStyle="#422445",this.canvasContextNext.strokeStyle="silver",this.canvasContextNext.clearRect(0,0,this.canvasNextWidth,this.canvasNextHeight),this.canvasContextNext.fillRect(0,0,this.canvasNextWidth,this.canvasNextHeight);for(let e=0;e<this.NextNumOfColumns;e++)for(let t=0;t<this.NextNumOfRows;t++)this.nextMatrix[t][e]&&(this.canvasContextNext.fillStyle=this.colors[A],this.drawNextTile(e,t))}drawNextTile(e,A){this.canvasContextNext.fillRect(this.NexttileWidth*e,this.NexttileHeight*A,this.NexttileWidth-2,this.NexttileHeight-2)}drawPreviewTile(e,A){this.canvasContextPreview.fillRect(this.PreviewtileWidth*e,this.PreviewtileHeight*A,this.PreviewtileWidth-2,this.PreviewtileHeight-2)}pressZ(){this.canvasContext.fillText("Press Z!",this.canvasWidth/2,this.canvasHeight/2)}randomPiece(e,A){void 0===e?(this.pieceType=this.pieceQueue.shift(),this.pieceQueue.push(Math.floor(Math.random()*this.pieces.length)),this.piece=this.pieces[this.pieceType],this.renderNextPiece(this.pieceQueue[0],this.pieceQueue[0])):(this.pieceType=A,this.piece=e);for(let e=0;e<this.sizeOfPiece;e++){this.activePiece[e]=[];for(let A=0;A<this.sizeOfPiece;A++){let t=4*e+A;void 0!==this.piece[t]&&this.piece[t]?this.activePiece[e][A]=this.pieceType+1:this.activePiece[e][A]=0}}this.notFalling=!1,this.activeX=5,this.activeY=0,this.preDrop=this.activePiece,this.dropX=this.activeX,this.dropY=this.activeY}clear(){for(let e=0;e<this.numOfRows;e++){this.matrix[e]=[];for(let A=0;A<this.numOfColumns;A++)this.matrix[e][A]=0}}stopFalling(){for(let e=0;e<this.sizeOfPiece;e++)for(let A=0;A<this.sizeOfPiece;A++)this.activePiece[e][A]&&(this.matrix[e+this.activeY][A+this.activeX]=this.activePiece[e][A]);this.notFalling=!0}clearPreviewAndNext(){this.canvasContextNext.clearRect(0,0,this.canvasNextWidth,this.canvasNextHeight),this.canvasContextPreview.clearRect(0,0,this.canvasPreviewWidth,this.canvasPreviewHeight)}resetGame(){!1===this.started&&(this.started=!0),this.resetIntervals(),this.savedPiece=void 0,this.savedId=void 0,this.resetPieceQueue(),this.renderSavedPiece(7,0),this.renderNextPiece(7,0),this.clearPreviewAndNext(),this.reRender=setInterval(this.render,30),this.clear(),this.randomPiece(),this.lost=!1,this.score=0,this.level=1,this.putScore(),this.levelHTML.textContent=this.level,this.putHighScore(),this.frameRate=500,this.frameInterval=setInterval(this.frame,this.frameRate),this.playMusic()}playMusic(){this.themeMusic&&this.themeMusic.pause(),this.audioEnabled&&(this.themeMusic||(this.themeMusic=new Audio("./music/TetrisTheme.mp3"),this.themeMusic.volume=.15,this.themeMusic.loop=!0),this.themeMusic.play())}resetIntervals(){clearInterval(this.frameInterval),clearInterval(this.reRender)}calculateDrop(){for(this.preDrop=this.activePiece,this.dropX=this.activeX,this.dropY=this.activeY;this.collisionCheck(0,1,this.preDrop,!0);)this.dropY++;this.bottomY=this.dropY}frame(){this.collisionCheck(0,1)?this.activeY++:(this.stopFalling(),this.collisionCheck(0,1),this.deleteLines(),this.lost?(this.resetIntervals(),this.canvasContext.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.canvasContext.fillStyle="#FFF1B9",this.clearPreviewAndNext(),this.putHighScore(),this.canvasContext.font="20px arcade",this.canvasContext.textAlign="center",this.canvasContext.fillText("Press Z",this.canvasWidth/2,this.canvasHeight/2),this.canvasContext.fillText("GAME OVER!",this.canvasWidth/2,this.canvasHeight/2-40)):this.randomPiece())}rotate(e){if(0===this.activePiece.length)return e;if(2===this.pieceType)return e;let A=[];for(let t=0;t<this.sizeOfPiece;t++){A[t]=[];for(let i=0;i<this.sizeOfPiece;i++)A[t][i]=e[3-i][t]}return A}KeyHashing(e){if(!this.started||this.lost){const A={90:"z",77:"music"};return void 0!==A[e.keyCode]&&this.keyPress(A[e.keyCode]),!1}const A={90:"z",38:"up",87:"up",81:"up",69:"up",40:"down",83:"down",37:"left",65:"left",39:"right",68:"right",32:"space",16:"save",77:"music"};void 0!==A[e.keyCode]&&this.keyPress(A[e.keyCode])}keyPress(e){if("up"===e&&this.collisionCheck(0,0,this.rotate(this.activePiece)))this.activePiece=this.rotate(this.activePiece);else if("down"===e&&this.collisionCheck(0,1))this.activeY++;else if("left"===e&&this.collisionCheck(-1,0))this.activeX--;else if("right"===e&&this.collisionCheck(1,0))this.activeX++;else if("space"===e){for(;this.collisionCheck(0,1);)this.activeY++;this.render()}else"z"===e?this.resetGame():"save"===e?this.handleSavePiece():"music"===e&&(this.audioEnabled=!this.audioEnabled,this.playMusic())}handleSavePiece(){this.savedPiece?(this.oldPiece=this.piece,this.oldPieceType=this.pieceType,this.randomPiece(this.savedPiece,this.savedId),this.savedPiece=this.oldPiece,this.savedId=this.oldPieceType):(this.savedPiece=this.piece,this.savedId=this.pieceType,this.randomPiece()),this.renderSavedPiece(this.savedId,this.savedId)}collisionCheck(e=0,A=0,t=this.activePiece,i=!1){if(0===this.activePiece.length)return!0;i?(e=this.dropX+e,A=this.dropY+A):(e=this.activeX+e,A=this.activeY+A);for(let i=0;i<this.sizeOfPiece;i++)for(let s=0;s<this.sizeOfPiece;s++)if(t[i][s]&&(void 0===this.matrix[i+A]||void 0===this.matrix[i+A][s+e]||this.matrix[i+A][s+e]||s+e<0||i+A>=this.numOfRows||s+e>=this.numOfColumns)){if(this.notFalling&&1==A&&(this.lost=!0,document.cookie<this.score)){let e=new Date;e.setTime(e.getTime()+2592e5);let A="expires="+e.toUTCString();document.cookie=this.score+";"+A}return!1}return!0}notZero(e){return 0!==e}deleteAndMoveLine(e){for(let A=e;A>0;A--)for(let e=0;e<this.numOfColumns;e++)this.matrix[A][e]=this.matrix[A-1][e]}deleteLines(){this.combo=0;for(let e=this.numOfRows-1;e>=0;e--)this.matrix[e].every(this.notZero)&&(this.deleteAndMoveLine(e),this.combo++,e++,this.audioEnabled&&(this.linecleareffect||(this.linecleareffect=new Audio("./music/line.wav")),this.linecleareffect.play()));0!==this.combo&&(this.score+=this.scoring[this.combo],this.putScore())}putScore(){this.scoreHTML||(this.scoreHTML=document.getElementById("score")),this.scoreHTML.textContent=this.score,this.putLevel()}putLevel(){this.levelHTML||(this.levelHTML=document.getElementById("level"),this.levelHTML.textContent=this.level),this.level!==Math.floor(this.score/1200)+1&&(this.level=Math.floor(this.score/1200)+1,this.levelHTML.textContent=this.level,clearInterval(this.frameInterval),this.frameRate-=.05*this.frameRate,this.frameInterval=setInterval(this.frame,this.frameRate))}putHighScore(){document.getElementById("high-score-num").textContent=document.cookie}};var s=class{constructor(){new i}},h=t(0);new s,Object(h.animate)(["data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC / xhBQAAAAFzUkdCAK7OHOkAAAAzUExURfusEelORvy9RG6 / SeMeE + pRSv7cnbffpfmsQt7w1Py3MpLEWtqxII + 0 WvWrqOc9NEdwTKtwAtQAAAARdFJOU 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","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURT7O8PusEW6/SelORvy9ROMeE+hDO/uxOJPPeP3Nc8LksqHo+dmxIYW9RIGqRO57dvzBUGLX853m90dwTPJild4AAAAUdFJOU/////////////////////////8AT0/nEQAAAxNJREFUeNrt2mlyUzEUROE4YDskQALsf6/MkMGDhlbZ3ff0BvTOV6p6f3Tz7ap2s2QPp04EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEC9L61LBVhR9VX0aQC4AjxwAwAAAAAAAOA3CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADANQBc8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAF4LF9Tx9W7P7CAO/at3+v337zdGGA3UUB9pvaAD/6SwP87K8M8Ku/MMDv/roAf/rLAvztrwrwr78owP/+mgDP+ksCPO+vCPCivyDAy/56AK/6ywG87q8G8Ka/GMDb/loAB/pLARzqrwRwsL8QwOH+OgBH+ssAHOuvAnC0vwjA8f4aACf6SwCc6q8AcLK/AMDp/nyAM/3xAOf60wHO9ocDnO/PBmjojwZo6U8GaOoPBmjrzwVo7I8FaO1PBWjuDwVo788E6OjffLxvnwtAT//m023z7kwAuvoDAfr68wA6++MAevvTALr7wwD6+7MABvqjAEb6kwCG+oMAxvpzAAb7YwBG+1MAhvtDAMb7MwAm+iMAZvoTAKb6AwDm+v0BJvvtAWb73QGm+80B5vu9AQT91gCKfmcASb8xgKbfF0DUbwug6ncFkPWbAuj6PQGE/ZYAyn5HAGm/IYC23w9A3G8HoO53A5D3mwHo+70AFvRbAazoNwLYLel3Auh5/9q+HoAFT2rbAXbbjn2+veTuVgB09QcC9PXnAXT2xwH09qcBdPeHAfT3ZwEM9EcBjPQnAQz1BwGM9ecADPbHAIz2pwAM94cAjPdnAEz0RwDM9CcATPUHAMz1+wNM9tsDzPa7A0z3mwPM93sDCPqtART9zgCSfmMATb8vgKjfFkDV7wog6zcF0PV7Agj7LQGU/Y4A0n5DAG2/H4C43w5A3e8GIO83A9D3ewEs6LcCWNFvBbAtDrAtDvAdip/l7X88KxwAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURT7O8Py9RPusEelORm6/SeMeEwC97OhDO5PPeIO0RPmrP8Lw+vy3Mv3Nc8DjsWPX8xrF79mxIe57dpDj9v7ks0dwTDLThYsAAAAWdFJOU////////////////////////////wAB0sDkAAAD20lEQVR42u3aWUJTURBFUYiGYEAJivOfqvSkec2tuvVMTlMjqL2+z9Vf8bsygAEMYAADGMAABjCAAQxgAAMYwAAGMIABzvrOIndnAAMYwAAGMIABVAF24gC7G22A3Y02wHO/NMBLvzLAa78wwFu/LsB7vyzAR78qwGe/KMBXvybAXr8kwH6/IsBBvyDAYb8ewFG/HMBxvxrASb8YwGm/FsBAvxTAUL8SwGC/EMBwvw7ASL8MwFi/CsBovwjAeL8GwES/BMBUvwLAZL8AwHT/BQD8ab1A9MPXXf4+4H+vHiKvGcAABjCAAQxgAAMYwABYADtxgOn9Kz/AzP6VHmBu/8oOMLt/JQeY379yAzTsX6kBWvavzABN+1digLb9Ky9A4/6VFqB1/8oK0Lx/JQVo379yAgT2r5QAkf0rI0Bo/0oIENu/8gEE9690ANH9KxtAeP9KBhDfv3IBJPavVACZ/SsTQGr/SgSQ27/yACT3rzQA2f0rC0B6/0oCkN+/cgB07F8vDuAhcVT7gAs+AxjAAAYwgAEMYAADGMAABjCAAQxgAAMYwAAGMIABlAB+t9/25wL39HRmgG/tt72uv/vV9ZkBNmcFuF9pAzz3SwO89CsDvPYLA7z16wK898sCfPSrAnz2iwJ89WsC7PVLAuz3KwIc9AsCHPbrARz1ywEc96sBnPSLAZz2awEM9EsBDPUrAQz2CwEM9+sAjPTLAIz1qwCM9osAjPdrAEz0SwBM9SsATPYLAEz38wPM9NMDzPWzA8z2kwPM93MDNPRTA7T0MwM09RMDtPXzAjT20wK09rMCNPeTArT3cwIE+u8ffzXfHQpAoH+1+vG9+W5BAEL9hACxfj6AYD8dQLSfDSDcTwYQ7+cCSPRTAWT6mQBS/UQAuX4egGQ/DUC2nwUg3U8CkO/nAOjopwDo6WcA6OonAOjrxwfo7IcH6O1HB+juBwfo78cGKOiHBqjoRwYo6QcGqOnHBSjqhwWo6kcFKOsHBajrxwQo7IcEqOxHBCjtBwSo7ccDKO6HA6juRwMo7wcDqO/HAligHwpgiX4ggM12JQ4QqHpsvwjAApPadoDNOnCBqgXudgmAUD8hQKyfDyDYTwcQ7WcDCPeTAcT7uQAS/VQAmX4mgFQ/EUCunwcg2U8DkO1nAUj3kwDk+zkAOvopAHr6GQC6+gkA+vrxATr74QF6+9EBuvvBAfr7sQEK+qEBKvqRAUr6gQFq+nEBivphAar6UQHK+kEB6voxAQr7IQEq+xEBSvsBAWr78QCK++EAqvvRAMr7wQDq+7EAFuiHAliiHwpgLQ6wFgf4BwVO0GnFfZGEAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURT7O8Py9RPusEW6/SelORuMeEwC97OhDO3Lb9JPPeIO0RPmrP8Pw+vy3Mv3Nc8DjsdmxIe57dhrF7/7ks0dwTHYyU5kAAAAVdFJOU///////////////////////////ACvZfeoAAAOOSURBVHja7dppVttAEIVR48QYYhyIyf7XGmY8aKjqLh3nDW8BUn/3SP969ffau1uFd7fA61cGMIABDGAAAxjAAAYwgAEMYAADGMAABjCAAQxgAAMYwAAGMIABDGAAAxjAAAYwgAEMYAADGMAA/wNAdAYQBziIAxxutQEOt9oAL/3SAK/9ygBv/cIA7/26AB/9sgCf/aoAX/2iAN/9mgBH/ZIAx/2KACf9ggCn/XoAZ/1yAOf9agAX/WIAl/1aAAP9UgBD/UoAg/1CAMP9OgAj/TIAY/0qAKP9IgDj/RoAE/0SAFP9CgCT/QIA0/38ADP99ABz/ewAs/3kAPP93ACBfmqASD8zQKifGCDWzwsQ7KcFiPaDATzEx/kFZA5rAAMYwAAGMIABDGAAAxjAAAYwgAEMYAADGMAABjCAAQxgAAMYwAAGMIABDGAAAxjAAAYwgAEMkHnmn/h2vxfY8/OVAX7Gt7up3359Ez9s9EptCmB7VYD9OgOwyG91VYCXfmmA135lgLd+YYD3fl2Aj35ZgM9+VYCvflGA735NgKN+SYDjfkWAk35BgNN+PYCzfjmA8341gIt+MYDLfi2AgX4pgKF+JYDBfiGA4X4dgJF+GYCxfhWA0X4RgPF+DYCJfgmAqX4FgMl+AYDpfn6AmX56gLl+doDZfnKA+X5ugEA/NUCknxkg1E8MEOvnBQj20wJE+1kBwv2kAPF+ToBE//7pMbwHFIBE/3r960d49yAAqX5CgFw/H0Cynw4g288GkO4nA8j3cwE09FMBtPQzATT1EwG09fMANPbTALT2swA095MAtPdzAHT0UwD09DMAdPUTAPT14wN09sMD9PajA3T3gwP092MDFPRDA1T0IwOU9AMD1PTjAhT1wwJU9aMClPWDAtT1YwIU9kMCVPYjApT2AwLU9uMBFPfDAVT3owGU94MB1PdjASzQDwWwRD8QwHa3FgdIVD3FlwFY4EptHGC7SSxRtcDulwBI9RMC5Pr5AJL9dADZfjaAdD8ZQL6fC6ChnwqgpZ8JoKmfCKCtnwegsZ8GoLWfBaC5nwSgvZ8DoKOfAqCnnwGgq58AoK8fH6CzHx6gtx8doLsfHKC/HxugoB8aoKIfGaCkHxigph8XoKgfFqCqHxWgrB8UoK4fE6CwHxKgsh8RoLQfEKC2Hw+guB8OoLofDaC8Hwygvh8LYIF+KIAl+qEANuIAG3GAf8vqXCY+1p1jAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURQC97G6/Sfy9RPusEelORuMeEz7O8OhDO++tNSzAy/3Odfy3MlG+c3Lb9IGqRO57dpPPeIW9REdwTMms5IMAAAATdFJOU////////////////////////wCyfdwIAAADVUlEQVR42u3aSVIbQBBE0RKykEDG2Nz/sBC2w2bQ0EN1KLLy9w3+i1zUouPF/AUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPe/pvunF23syBghzgADAGiDCGyDMAQIAa4AIb4AwBwgArAEivAHCHCAAsAaI8AYIc4AAwBogwhsgzAECAGuACG+AMAcIAKwBIrwBwhwgALAGiPAGCHOAAMAaIMIbIMwBwhzg/sYAz+3v7nHFuzXAt/Z3uMt/x+1DpL8ugP1NAY5bb4C3fiWAJf3OC/jdbwzwp98X4G+/EsBxRb/rAv71mwL87/cEeNdveQe873dcwId+Q4CP/X4An/rt7oDP/W4L+NJvBvC13wvgRL/VHXCq32kBJ/uNAE73+wCc6be5A871uyzgbL8JwPl+D4AL/RZ3wKV+hwVc7DcAuNxfH+BKf/k74Fp/9QVc7S8OcL2/NkBDf+k7oKW/8gKa+gsDtPXXBWjsL3sHtPZXXUBzf1GA9v6aAB39Je+Anv7t5nvzexBZQFf/9tem+YkA9PXXA+jsVwI4ruivtoDu/mIA/f21AAb6lQCW9FdawFB/IYCx/joAg/1l7oDR/ioLGO4vAjDeXwNgor/EHTDTX2EBU/0FAOb69QEm++XvgNl+9QVM94sDzPdrAyT0S98BGf3KC0jpFwbI6dcFSOqXvQOy+lUXkNYvCpDXrwmQ2C95B2T2Ky4gtV8QILdfDyC5X+4OyO5XW0B6vxhAfr8WwIJ+qTtgRb8QwP6wNQfoqDq0v00+wOMSgP2u4/3YrHitX2p/rgDo6l8E0PpWAPT11wPo7C8H0NtfDaC7vxhAf38tgIH+UgAj/ZUAhvoLAYz11wEY7C8DMNpfBWC4vwjAeH8NgIn+EgAz/RUApvoLAMz16wNM9ssDzParA0z3iwPM92sDJPRLA2T0KwOk9AsD5PTrAiT1ywJk9asCpPWLAuT1awIk9ksCZPYrAqT2CwLk9usBJPfLAWT3qwGk94sB5PdrASzolwJY0S8FsDMH2JkDvAJGcQcw/NqKIgAAAABJRU5ErkJggg=="],500)}]);