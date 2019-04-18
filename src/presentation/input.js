export const KeyHashing = function (keyEvent) {
    if (!this.started || this.lost) {
        const keyHash = {
            90: 'z',
            77: 'music'
        };
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

        this.keyPress(keyHash[keyEvent.keyCode]);
    }
};

export const keyPress = function (key) {
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

};