export const randomPiece(givenPiece, givenId) {
        // this.pieceType = Math.floor(Math.random() * this.pieces.length);
        if (givenPiece === undefined) {
            // debugger
            this.pieceType = Math.floor(Math.random() * this.pieces.length);
            this.piece = this.pieces[this.pieceType];
        } else {
            // debugger
            this.pieceType = givenId;
            this.piece = givenPiece;
        }




        // this.activeColor = this.getRandomColor();
        // this.activeColorBack = this.getRandomColor();


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
