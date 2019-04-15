export const render() {


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
