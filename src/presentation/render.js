export const render = function () {


    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.canvasContext.fillStyle = 'black';
    this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.calculateDrop();
    this.renderDrop();

    for (let xInd = 0; xInd < this.numOfColumns; xInd++) {
        for (let yInd = 0; yInd < this.numOfRows; yInd++) {
            if (this.matrix[yInd][xInd]) {
                this.canvasContext.fillStyle = this.colors[this.matrix[yInd][xInd] - 1];
                this.drawTile(xInd, yInd);
            }
        }
    }
    for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
        for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
            if (this.activePiece[yInd][xInd]) {
                this.canvasContext.fillStyle = this.colors[this.activePiece[yInd][xInd] - 1];
                this.drawTile(this.activeX + xInd, this.activeY + yInd);
            }
        }
    }




};

export const renderDrop = function () {
    for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
        for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
            if (this.preDrop[yInd][xInd]) {
                this.canvasContext.fillStyle = this.dropColors[this.preDrop[yInd][xInd] - 1];
                this.drawDropTile(this.dropX + xInd, this.bottomY + yInd);
            }
        }
    }
};

export const renderSavedPiece = function (shapeId, color) {
    // this.piecesNames = ['S piece', 'Z piece', 'Square piece', 'T piece', 'J piece', 'L piece', 'Line piece']


    this.PreviewMatrix = this.previewArrays[shapeId];
    this.canvasPreview = document.getElementsByTagName('canvas')[1];

    this.canvasContextPreview = this.canvasPreview.getContext('2d');
    this.canvasPreviewHeight = this.canvasPreview.height;
    this.canvasPreviewWidth = this.canvasPreview.width;
    this.PreviewNumOfColumns = 3;
    this.PreviewNumOfRows = 4;
    this.PreviewtileHeight = this.canvasPreviewHeight / this.PreviewNumOfRows;
    this.PreviewtileWidth = this.PreviewtileHeight;
    this.canvasContextPreview.fillStyle = '#422445';

    this.canvasContextPreview.strokeStyle = 'silver';
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

};

export const renderNextPiece = function (shapeId, color) {


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

};


export const clear = function () {
    for (let yInd = 0; yInd < this.numOfRows; yInd++) {
        this.matrix[yInd] = [];
        for (let xInd = 0; xInd < this.numOfColumns; xInd++) {
            this.matrix[yInd][xInd] = 0;
        }
    }
};

export const clearPreviewAndNext = function () {
    this.canvasContextNext.clearRect(0, 0, this.canvasNextWidth, this.canvasNextHeight);
    this.canvasContextPreview.clearRect(0, 0, this.canvasPreviewWidth, this.canvasPreviewHeight);
};

export const pressZ = function () {
    this.canvasContext.fillStyle = 'white';
    this.canvasContext.fillText("Press Z!", this.canvasWidth / 2, this.canvasHeight / 2);
};