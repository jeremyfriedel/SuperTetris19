export const drawTile = function (xInd, yInd)  {

    this.canvasContext.fillRect(this.tileWidth * xInd,
        this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);
};

export const drawDropTile = function(xInd, yInd) {

    this.canvasContext.fillRect(this.tileWidth * xInd,
        this.tileHeight * yInd, this.tileWidth - 2, this.tileHeight - 2);
};


export const strokeTile = function (xInd, yInd) {
    this.canvasContext.strokeRect(this.tileWidth * xInd,
        this.tileHeight * yInd, this.tileWidth, this.tileHeight);

};

export const drawNextTile = function(xInd, yInd) {

    this.canvasContextNext.fillRect(this.NexttileWidth * xInd,
        this.NexttileHeight * yInd, this.NexttileWidth - 2, this.NexttileHeight - 2);
};



export const drawPreviewTile = function(xInd, yInd) {

    this.canvasContextPreview.fillRect(this.PreviewtileWidth * xInd,
        this.PreviewtileHeight * yInd, this.PreviewtileWidth - 2, this.PreviewtileHeight - 2);
};

