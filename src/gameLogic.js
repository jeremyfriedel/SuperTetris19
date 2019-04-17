class GameLogic {

    constructor() {
        this.started = false;
        this.canvas = document.getElementsByTagName('canvas')[0];
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasHeight = this.canvas.height;
        this.canvasWidth = this.canvas.width;
        this.numOfColumns = 10;
        this.numOfRows = 20;
        this.tileHeight = this.canvasHeight / this.numOfRows;
        this.tileWidth = this.canvasWidth / this.numOfColumns;
        this.canvasContext.font = '30px Arial';
        
        this.canvasContext.fillStyle = 'white';
        this.canvasContext.textAlign = "center";
        this.audioEnabled = false;

        this.canvasContext.fillText("Press Z to Play!", this.canvasWidth / 2, this.canvasHeight / 2);
        



        this.matrix = [];
        this.pieces = [
            [0, 1, 1, 0,
                1, 1
            ],
            [1, 1, 0, 0,
                0, 1, 1
            ],
            [1, 1, 0, 0,
                1, 1
            ],

            [0, 1, 0, 0,
                1, 1, 1
            ],
            [1, 1, 1, 0,
                0, 0, 1
            ],
            [1, 1, 1, 0,
                1
            ],
            [1, 1, 1, 1]

        ];
        this.previewArrays = [
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 1, 1],
                [1, 1, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [1, 1, 0],
                [0, 1, 1]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [1, 1, 0],
                [1, 1, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 1, 0],
                [1, 1, 1]
            ],
            [
                [0, 0, 0],
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0]
            ],
            [
                [0, 0, 0],
                [1, 0, 0],
                [1, 0, 0],
                [1, 1, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]

        ];
        this.nextArrays = this.previewArrays;
        this.level = 1;

        this.piecesNames = ['S piece', 'Z piece', 'Square', 'T piece', 'J piece', 'L piece', 'Line piece']
        // this.colors = ['#00F000', '#F02300', '#d1d100', '#9F35F0', '#022FF0', '#F0A000', '#00F0F0'];

        this.colors =     ['#349E00', '#EC003F', '#FEDE1B', '#A737FA', '#2131F8', '#FB700A', '#03E5FF'];
        this.dropColors = ['#194204', '#38000A', '#3D3107', '#27003B', '#04003C', '#3B1103', '#05383A'];

        this.resetPieceQueue = this.resetPieceQueue.bind(this);
        this.resetPieceQueue();
        this.clearPreviewAndNext = this.clearPreviewAndNext.bind(this);

        this.drawTile = this.drawTile.bind(this);
        this.render = this.render.bind(this);
        this.putLevel = this.putLevel.bind(this);
        this.stopFalling = this.stopFalling.bind(this);
        this.calculateDrop = this.calculateDrop.bind(this);
        this.renderDrop = this.renderDrop.bind(this);
        this.drawDropTile = this.drawDropTile.bind(this);
        this.frame = this.frame.bind(this);
        this.randomPiece = this.randomPiece.bind(this);
        this.drawNextTile = this.drawNextTile.bind(this);
        this.clear = this.clear.bind(this);
        this.drawTile = this.drawTile.bind(this);
        // this.testing = this.testing.bind(this);
        this.testx = 0;
        this.testy = 0;
        // this.activeColor = 'darkkhaki';
        this.activeColorBack = 'white';


        this.lost = false;

        this.activePiece = [];
        this.activeX = 5;
        this.activeY = 0;
        this.sizeOfPiece = 4;
        this.pieceType = 0;
        this.piece = [];
        this.notFalling = false;
        this.keyPress = this.keyPress.bind(this);
        this.KeyHashing = this.KeyHashing.bind(this);
        document.body.onkeydown = this.KeyHashing;
        this.deleteLines = this.deleteLines.bind(this);
        this.notZero = this.notZero.bind(this);
        this.deleteAndMoveLine = this.deleteAndMoveLine.bind(this);
        this.putScore.bind(this);
        this.rotate = this.rotate.bind(this);
        this.handleSavePiece = this.handleSavePiece.bind(this);
        this.playMusic = this.playMusic.bind(this);
        this.renderSavedPiece = this.renderSavedPiece.bind(this);
        this.renderNextPiece = this.renderNextPiece.bind(this);
        this.drawPreviewTile = this.drawPreviewTile.bind(this);
        this.putHighScore = this.putHighScore.bind(this);
        this.putHighScore();
        this.score = 0;
        // this.canvasContext.lineWidth = 2;
        this.putScore();
        this.scoring = [0, 40, 100, 300, 1200];



    }


    drawTile(xInd, yInd) {

        this.canvasContext.fillRect(this.tileWidth * xInd,
            this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);
        // this.canvasContext.strokeRect(this.tileWidth * xInd,
        //     this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);
    }

    drawDropTile(xInd, yInd) {

        this.canvasContext.fillRect(this.tileWidth * xInd,
            this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);
    }


    strokeTile(xInd, yInd) {
        this.canvasContext.strokeRect(this.tileWidth * xInd,
            this.tileHeight * yInd, this.tileWidth, this.tileHeight);

    }


    resetPieceQueue() {
        this.pieceQueue = [Math.floor(Math.random() * this.pieces.length),
            Math.floor(Math.random() * this.pieces.length)
        ];
    }






    render() {


        this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.canvasContext.fillStyle = 'black';
        this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        // this.canvasContext.strokeStyle = '#1B1B1B';

        // for (let xInd = 0; xInd < this.numOfColumns; xInd++) {
        //     for (let yInd = 0; yInd < this.numOfRows; yInd++) {
        //         this.strokeTile(xInd, yInd);
        //     }
        // }
        this.calculateDrop();
        this.renderDrop();

        // this.canvasContext.strokeStyle = 'silver';

        for (let xInd = 0; xInd < this.numOfColumns; xInd++) {
            for (let yInd = 0; yInd < this.numOfRows; yInd++) {
                if (this.matrix[yInd][xInd]) {
                    this.canvasContext.fillStyle = this.colors[this.matrix[yInd][xInd] - 1];
                    this.drawTile(xInd, yInd);
                }
            }
        }
        // this.canvasContext.strokeStyle = 'silver';
        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
                if (this.activePiece[yInd][xInd]) {
                    this.canvasContext.fillStyle = this.colors[this.activePiece[yInd][xInd] - 1];
                    this.drawTile(this.activeX + xInd, this.activeY + yInd);
                }
            }
        }




    }

    renderDrop(){
        // if (this.dropY - this.activeY > 3) {
            for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
                for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
                    // debugger
                    if (this.preDrop[yInd][xInd]) {
                        this.canvasContext.fillStyle = this.dropColors[this.preDrop[yInd][xInd] - 1];
                        this.drawDropTile(this.dropX + xInd, this.bottomY + yInd);
                    }
                }
            }
        // }

    }

    renderSavedPiece(shapeId, color) {
        // this.piecesNames = ['S piece', 'Z piece', 'Square piece', 'T piece', 'J piece', 'L piece', 'Line piece']


        this.PreviewMatrix = this.previewArrays[shapeId];
        this.canvasPreview = document.getElementsByTagName('canvas')[1];

        this.canvasContextPreview = this.canvasPreview.getContext('2d');
        this.canvasPreviewHeight = this.canvasPreview.height;
        this.canvasPreviewWidth = this.canvasPreview.width;
        this.PreviewNumOfColumns = 3;
        this.PreviewNumOfRows = 4;
        this.PreviewtileHeight = this.canvasPreviewHeight / this.PreviewNumOfRows;
        this.PreviewtileWidth = this.PreviewtileHeight
        this.canvasContextPreview.fillStyle = '#422445';

        this.canvasContextPreview.strokeStyle = 'silver';
        // this.canvasContextPreview.lineWidth = 10;
        this.canvasContextPreview.clearRect(0, 0, this.canvasPreviewWidth, this.canvasPreviewHeight);
        this.canvasContextPreview.fillRect(0, 0, this.canvasPreviewWidth, this.canvasPreviewHeight);
        for (let xInd = 0; xInd < this.PreviewNumOfColumns; xInd++) {
            for (let yInd = 0; yInd < this.PreviewNumOfRows; yInd++) {
                if (this.PreviewMatrix[yInd][xInd]) {
                    this.canvasContextPreview.fillStyle = this.colors[color];
                    this.drawPreviewTile(xInd, yInd);
                }
            }
        }

    }

    renderNextPiece(shapeId, color) {


        this.nextMatrix = this.nextArrays[shapeId];
        this.canvasNext = document.getElementsByTagName('canvas')[2];

        this.canvasContextNext = this.canvasNext.getContext('2d');
        this.canvasNextHeight = this.canvasNext.height;
        this.canvasNextWidth = this.canvasNext.width;
        this.NextNumOfColumns = 3;
        this.NextNumOfRows = 4;
        this.NexttileHeight = this.canvasNextHeight / this.NextNumOfRows;
        this.NexttileWidth = this.NexttileHeight;
        this.canvasContextNext.fillStyle = '#422445';

        this.canvasContextNext.strokeStyle = 'silver';
        this.canvasContextNext.clearRect(0, 0, this.canvasNextWidth, this.canvasNextHeight);
        this.canvasContextNext.fillRect(0, 0, this.canvasNextWidth, this.canvasNextHeight);
        for (let xInd = 0; xInd < this.NextNumOfColumns; xInd++) {
            for (let yInd = 0; yInd < this.NextNumOfRows; yInd++) {
                if (this.nextMatrix[yInd][xInd]) {
                    this.canvasContextNext.fillStyle = this.colors[color];
                    this.drawNextTile(xInd, yInd);
                }
            }
        }

    }

    drawNextTile(xInd, yInd) {

        this.canvasContextNext.fillRect(this.NexttileWidth * xInd,
            this.NexttileHeight * yInd, this.NexttileWidth - 2, this.NexttileHeight - 2);
        // this.canvasContextNext.strokeRect(this.NexttileWidth * xInd,
        //     this.NexttileHeight * yInd, this.NexttileWidth - 2, this.NexttileHeight - 2);
    }



    drawPreviewTile(xInd, yInd) {

        this.canvasContextPreview.fillRect(this.PreviewtileWidth * xInd,
            this.PreviewtileHeight * yInd, this.PreviewtileWidth - 2, this.PreviewtileHeight - 2);
        // this.canvasContextPreview.strokeRect(this.PreviewtileWidth * xInd,
        //     this.PreviewtileHeight * yInd, this.PreviewtileWidth - 2, this.PreviewtileHeight - 2);
    }







    randomPiece(givenPiece, givenId) {
        if (givenPiece === undefined) {
            // debugger
            // this.pieceType = Math.floor(Math.random() * this.pieces.length);
            // this.piece = this.pieces[this.pieceType];
            this.pieceType = this.pieceQueue.shift();
            this.pieceQueue.push(Math.floor(Math.random() * this.pieces.length));
            this.piece = this.pieces[this.pieceType];
            this.renderNextPiece(this.pieceQueue[0], this.pieceQueue[0]);
        } else {
            // debugger
            this.pieceType = givenId;
            this.piece = givenPiece;
        }






        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
            this.activePiece[yInd] = [];
            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
                let ind = 4 * yInd + xInd;
                if (this.piece[ind] !== undefined && this.piece[ind]) {
                    this.activePiece[yInd][xInd] = this.pieceType + 1;
                } else {
                    this.activePiece[yInd][xInd] = 0;
                }
            }

        }

        this.notFalling = false;
        this.activeX = 5;
        this.activeY = 0;

        this.preDrop = this.activePiece;
        this.dropX = this.activeX;
        this.dropY = this.activeY;



    }

    clear() {
        for (let yInd = 0; yInd < this.numOfRows; yInd++) {
            this.matrix[yInd] = [];
            for (let xInd = 0; xInd < this.numOfColumns; xInd++) {
                this.matrix[yInd][xInd] = 0;
            }
        }
    }

    stopFalling() {
        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
                if (this.activePiece[yInd][xInd]) {

                    this.matrix[yInd + this.activeY][xInd + this.activeX] = this.activePiece[yInd][xInd];
                }
            }
        }
        this.notFalling = true;

    }

    clearPreviewAndNext(){
        this.canvasContextNext.clearRect(0, 0, this.canvasNextWidth, this.canvasNextHeight);
        this.canvasContextPreview.clearRect(0, 0, this.canvasPreviewWidth, this.canvasPreviewHeight);
    }

    resetGame() {
        if (this.started === false){
            this.started = true;
        }
        this.resetIntervals();
        this.savedPiece = undefined;
        this.savedId = undefined;
        this.resetPieceQueue();
        this.renderSavedPiece(7, 0); // clear preview
        this.renderNextPiece(7, 0);
        this.clearPreviewAndNext();
        this.reRender = setInterval(this.render, 30);
        this.clear();
        this.randomPiece();
        this.lost = false;
        this.score = 0;
        this.putScore();
        this.putHighScore();
        this.frameRate = 500;
        this.frameInterval = setInterval(this.frame, this.frameRate);
        this.playMusic();


    }

    playMusic() {
        if (this.themeMusic) {
            this.themeMusic.pause();
        }

        if (this.audioEnabled) {
            if (!this.themeMusic) {
                this.themeMusic = new Audio('./music/TetrisTheme.mp3');
                this.themeMusic.volume = 0.15;
                this.themeMusic.loop = true;
            }
            this.themeMusic.play();
        }


    }


    resetIntervals() {
        clearInterval(this.frameInterval);
        clearInterval(this.reRender);
    }

    calculateDrop(){
        this.preDrop = this.activePiece;
        this.dropX = this.activeX;
        this.dropY = this.activeY;

        while (this.collisionCheck(0, 1, this.preDrop, true)) {
            this.dropY++;
        }

        this.bottomY = this.dropY;

    }

    frame() {
        if (this.collisionCheck(0, 1)) {
            this.activeY++;
            


        } else {
            this.stopFalling();
            this.collisionCheck(0, 1);
            this.deleteLines();
            if (this.lost) {
                this.resetIntervals();
                this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                this.canvasContext.fillStyle = 'white';
                this.clearPreviewAndNext();
                this.putHighScore();
                this.canvasContext.font = '20px Helvetica';
                this.canvasContext.fillText("Press Z to Play Again!", this.canvasWidth / 2, this.canvasHeight / 2);
                this.canvasContext.fillText("GAME OVER!", this.canvasWidth / 2, (this.canvasHeight / 2) - 40);

                // return 0;
                // this.resetGame();
            }
            else {
                this.randomPiece();
            }
        }
    }

    rotate(activePiece) {
        if (this.activePiece.length === 0) {
            return activePiece;
        }

        // dont rotate squares
        if (this.pieceType === 2) {
            return activePiece;
        }
        let rotatedPiece = [];
        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
            rotatedPiece[yInd] = [];
            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
                rotatedPiece[yInd][xInd] = activePiece[3 - xInd][yInd];

            }

        }

        return rotatedPiece;

    }


    KeyHashing(keyEvent) {
        if (!this.started || this.lost){
            const keyHash = { 90: 'z', 77: 'music' };
            if (keyHash[keyEvent.keyCode] !== undefined) {
                this.keyPress(keyHash[keyEvent.keyCode]);
            }
            return false;
        }
        const keyHash = {
            90: 'z',
            38: 'up',
            87: 'up',
            81: 'up',
            69: 'up',
            40: 'down',
            83: 'down',
            37: 'left',
            65: 'left',
            39: 'right',
            68: 'right',
            32: 'space',
            16: 'save',
            77: 'music'
        };
        if (keyHash[keyEvent.keyCode] !== undefined) {
            // console.log(keyHash[keyEvent.keyCode]);

            this.keyPress(keyHash[keyEvent.keyCode]);
        }
    }

    keyPress(key) {
        if (key === 'up' && this.collisionCheck(0, 0, this.rotate(this.activePiece))) {
            this.activePiece = this.rotate(this.activePiece);
        } else if (key === 'down' && this.collisionCheck(0, 1)) {
            this.activeY++;
        } else if (key === 'left' && this.collisionCheck(-1, 0)) {
            this.activeX--;
        } else if (key === 'right' && this.collisionCheck(1, 0)) {
            this.activeX++;
        } else if (key === 'space') {
            while (this.collisionCheck(0, 1)) {
                this.activeY++;
            }
            this.render();
        } else if (key === 'z') {
            this.resetGame();
        } else if (key === 'save') {
            this.handleSavePiece();
        } else if (key === 'music') {

            this.audioEnabled = !this.audioEnabled;
            this.playMusic();
        }






    }


    handleSavePiece() {
        if (this.savedPiece) {
            this.oldPiece = this.piece;
            this.oldPieceType = this.pieceType;
            this.randomPiece(this.savedPiece, this.savedId);
            this.savedPiece = this.oldPiece;
            this.savedId = this.oldPieceType;
            // let scoreHTML = document.getElementById('saved-piece');
            // // scoreHTML.textContent = this.pieceNames[this.savedId];
            // scoreHTML.textContent = this.piecesNames[this.savedId];



        } else {
            this.savedPiece = this.piece;
            this.savedId = this.pieceType;
            // let scoreHTML = document.getElementById('saved-piece');
            // // scoreHTML.textContent = this.pieceNames[this.savedId];
            // scoreHTML.textContent = this.piecesNames[this.savedId];

            this.randomPiece();

        }

        this.renderSavedPiece(this.savedId, this.savedId);

    }


    collisionCheck(moveX = 0, moveY = 0, movedPiece = this.activePiece, preDrop = false) {

        if (this.activePiece.length === 0) {
            return true;
        }
        if (preDrop){
            // debugger
            moveX = this.dropX + moveX;
            moveY = this.dropY + moveY;

        }
        else {
            moveX = this.activeX + moveX;
            moveY = this.activeY + moveY;
        }

        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
                if (movedPiece[yInd][xInd]) {
                    if (this.matrix[yInd + moveY] === undefined ||
                        this.matrix[yInd + moveY][xInd + moveX] === undefined ||
                        this.matrix[yInd + moveY][xInd + moveX] ||
                        xInd + moveX < 0 ||
                        yInd + moveY >= this.numOfRows || xInd + moveX >= this.numOfColumns) {
                        if (this.notFalling && moveY == 1) {
                            this.lost = true;

                            // console.log('lost');
                            // this.score = "LOST";
                            // this.putScore();
                            // document.cookie = `score=${this.score}`;
                            if (document.cookie < this.score || this.score === 0) {
                                let d = new Date();
                                d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
                                let expires = "expires=" + d.toUTCString();
                                document.cookie = this.score + ";" + expires;
                            }

                            // console.log(document.cookie);

                        }
                        return false;
                    }
                }
            }
        }

        return true;
    }

    notZero(tile) {
        return tile !== 0;
    }

    deleteAndMoveLine(linenum) {
        for (let i = linenum; i > 0; i--) {
            for (let xInd = 0; xInd < this.numOfColumns; xInd++) {
                this.matrix[i][xInd] = this.matrix[i - 1][xInd];
            }
        }

    }


    deleteLines() {
        this.combo = 0;
        for (let yInd = this.numOfRows - 1; yInd >= 0; yInd--) {
            let complete = this.matrix[yInd].every(this.notZero);

            if (complete) {
                this.deleteAndMoveLine(yInd);
                this.combo++;
                yInd++;
                if (this.audioEnabled) {
                    if (!this.linecleareffect) {
                        this.linecleareffect = new Audio('./music/line.wav');
                    }
                    this.linecleareffect.play();
                }
            }

        }
        // debugger
        this.score += this.scoring[this.combo];
        this.putScore();

    }

    putScore() {
        if (!this.scoreHTML){
            this.scoreHTML = document.getElementById('score');
        }
        this.scoreHTML.textContent = this.score;
        this.putLevel();
    }

    putLevel() {
        if (!this.levelHTML) {
            this.levelHTML = document.getElementById('level');
            this.levelHTML.textContent = this.level;
        }
        if (this.level !== Math.floor(this.score / 1200) + 1) {
            this.level = Math.floor(this.score / 1200) + 1;
            this.levelHTML.textContent = this.level;
            clearInterval(this.frameInterval);
            this.frameRate -= (this.frameRate * 0.05);
            console.log(this.frameRate)
            this.frameInterval = setInterval(this.frame, this.frameRate);

        }

    }

    putHighScore() {
        let scoreHighHTML = document.getElementById('high-score-num');
        scoreHighHTML.textContent = document.cookie;
    }









    // git subtree push --prefix dist origin gh-pages

}

export default GameLogic;