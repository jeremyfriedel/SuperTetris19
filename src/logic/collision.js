export const stopFalling = function() {
        for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
            for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
                if (this.activePiece[yInd][xInd]) {
                    this.matrix[yInd + this.activeY][xInd + this.activeX] = this.activePiece[yInd][xInd];
                }
            }
        }
        this.notFalling = true;
};

export const  calculateDrop = function () {
    this.preDrop = this.activePiece;
    this.dropX = this.activeX;
    this.dropY = this.activeY;

    while (this.collisionCheck(0, 1, this.preDrop, true)) {
        this.dropY++;
    }
    this.bottomY = this.dropY;
};

export const frame = function () {
    if (this.collisionCheck(0, 1)) {
        this.activeY++;
    } 
    else {
        this.stopFalling();
        this.collisionCheck(0, 1);
        this.deleteLines();
        if (this.lost) {
            this.lostScreen();
        } else {
            this.randomPiece();
        }
    }
};
export const lostScreen = function () {
    this.resetIntervals();
    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.canvasContext.fillStyle = 'white';
    this.clearPreviewAndNext();
    this.putHighScore();
    this.canvasContext.font = '20px arcade';
    this.canvasContext.textAlign = "center";
    this.canvasContext.fillText("Press Z", this.canvasWidth / 2, this.canvasHeight / 2);
    this.canvasContext.fillText("GAME OVER!", this.canvasWidth / 2, (this.canvasHeight / 2) - 40);
};

export const rotate = function(activePiece) {
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

};

export const collisionCheck = function(moveX = 0, moveY = 0, movedPiece = this.activePiece, preDrop = false) {
    if (this.activePiece.length === 0) {
        return true;
    }
    if (preDrop) {
        moveX = this.dropX + moveX;
        moveY = this.dropY + moveY;

    } else {
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
                        // document.cookie = `score=${this.score}`;
                        if (document.cookie < this.score) {
                            
                            let d = new Date();
                            d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
                            let expires = "expires=" + d.toUTCString();
                            document.cookie = this.score + ";" + expires;
                        }
                    }
                    return false;
                }
            }
        }
    }
    return true;
};


