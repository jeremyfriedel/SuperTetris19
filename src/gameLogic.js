class GameLogic {

    constructor() {
        this.canvas = document.getElementsByTagName('canvas')[0];
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasHeight = this.canvas.height;
        this.canvasWidth = this.canvas.width;
        this.numOfColumns = 10;
        this.numOfRows = 20;
        this.tileHeight = this.canvasHeight / this.numOfRows;
        this.tileWidth = this.canvasWidth / this.numOfColumns;
        this.canvasContext.font = "30px Arial";
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
        this.piecesNames = ['Z piece', 'Z piece', 'Square piece', 'T piece', 'J piece', 'L piece', 'line piece']
        this.colors = ['blue', 'green', 'yellow', 'purple', 'red', 'cyan', 'orange'];

        this.drawTile = this.drawTile.bind(this);
        this.render = this.render.bind(this);
        this.stopFalling = this.stopFalling.bind(this);
        this.frame = this.frame.bind(this);
        this.randomPiece = this.randomPiece.bind(this);
        this.clear = this.clear.bind(this);
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
        this.playMusic = this.playMusic().bind(this);
        this.score = 0;
        this.putScore();



    }


    drawTile(xInd, yInd) {

        this.canvasContext.fillRect(this.tileWidth * xInd,
            this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);
        this.canvasContext.strokeRect(this.tileWidth * xInd,
            this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);
    }





    render() {


        this.canvasContext.strokeStyle = 'silver';
        this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.canvasContext.fillStyle = 'white';
        this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        for (let xInd = 0; xInd < this.numOfColumns; xInd++) {
            for (let yInd = 0; yInd < this.numOfRows; yInd++) {
                if (this.matrix[yInd][xInd]) {
                    this.canvasContext.fillStyle = this.colors[this.matrix[yInd][xInd] - 1];
                    this.drawTile(xInd, yInd);
                }
            }
        }
        this.canvasContext.strokeStyle = 'silver';
        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
                if (this.activePiece[yInd][xInd]) {
                    this.canvasContext.fillStyle = this.colors[this.activePiece[yInd][xInd] - 1];
                    this.drawTile(this.activeX + xInd, this.activeY + yInd);
                }
            }
        }
    }






    randomPiece(givenPiece, givenId) {
        if (givenPiece === undefined) {
            // debugger
            this.pieceType = Math.floor(Math.random() * this.pieces.length);
            this.piece = this.pieces[this.pieceType];
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

    resetGame() {
        this.resetIntervals();
        this.reRender = setInterval(this.render, 40);
        this.clear();
        this.randomPiece(); 
        this.lost = false;
        this.score = 0;
        this.putScore();
        this.frameInterval = setInterval(this.frame, 500);
        this.playMusic();
        

    }

    playMusic() {
        if (this.themeMusic) {
            this.themeMusic.pause();
        }

        if (this.audioEnabled) {
            this.themeMusic = new Audio('./music/Tetristheme.mp3');
            this.themeMusic.play();
        }


    }


    resetIntervals() {
        clearInterval(this.frameInterval);
        clearInterval(this.reRender);
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
                // return 0;
                this.resetGame();
            }
            this.randomPiece();
        }
    }

    rotate(activePiece) {
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
            let scoreHTML = document.getElementById('saved-piece');
            // scoreHTML.textContent = this.pieceNames[this.savedId];
            scoreHTML.textContent = this.piecesNames[this.savedId];



        } else {
            this.savedPiece = this.piece;
            this.savedId = this.pieceType;
            let scoreHTML = document.getElementById('saved-piece');
            // scoreHTML.textContent = this.pieceNames[this.savedId];
            scoreHTML.textContent = this.piecesNames[this.savedId];

            this.randomPiece();

        }

    }


    collisionCheck(moveX = 0, moveY = 0, movedPiece = this.activePiece) {
        moveX = this.activeX + moveX;
        moveY = this.activeY + moveY;

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

                            console.log('lost');
                            this.score = "LOST";
                            this.putScore();
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
        for (let yInd = this.numOfRows - 1; yInd >= 0; yInd--) {
            let complete = this.matrix[yInd].every(this.notZero);

            if (complete) {
                this.deleteAndMoveLine(yInd);
                this.score++;
                this.putScore();
                yInd++;
                let linecleareffect = new Audio('./music/line.wav');
                linecleareffect.play();
            }
        }
    }

    putScore() {
        let scoreHTML = document.getElementById('score');
        scoreHTML.textContent = this.score;
    }








    // git subtree push --prefix dist origin gh-pages

}

export default GameLogic;