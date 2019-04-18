export const resetGame = function() {
    if (this.started === false) {
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
    this.level = 1;
    this.putScore();
    this.levelHTML.textContent = this.level;
    this.putHighScore();
    this.frameRate = 500;
    this.frameInterval = setInterval(this.frame, this.frameRate);
    this.playMusic();


};

export const resetIntervals = function() {
        clearInterval(this.frameInterval);
        clearInterval(this.reRender);
};

