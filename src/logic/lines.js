export const notZero = function(tile) {
    return tile !== 0;
};

export const deleteAndMoveLine = function(linenum) {
    for (let i = linenum; i > 0; i--) {
        for (let xInd = 0; xInd < this.numOfColumns; xInd++) {
            this.matrix[i][xInd] = this.matrix[i - 1][xInd];
        }
    }

};


export const deleteLines = function() {
    this.combo = 0;
    for (let yInd = this.numOfRows - 1; yInd >= 0; yInd--) {
        let complete = this.matrix[yInd].every(this.notZero);

        if (complete) {
            this.deleteAndMoveLine(yInd);
            this.combo++;
            yInd++;
            this.lineClearPlay();
        }

    }
    if (this.combo !== 0) {
        this.score += this.scoring[this.combo];
        this.putScore();
    }


};
