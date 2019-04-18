export const putScore = function() {
    if (!this.scoreHTML) {
        this.scoreHTML = document.getElementById('score');
    }
    this.scoreHTML.textContent = this.score;
    this.putLevel();
};

export const putLevel = function() {
    if (!this.levelHTML) {
        this.levelHTML = document.getElementById('level');
        this.levelHTML.textContent = this.level;
    }
    if (this.level !== Math.floor(this.score / 1200) + 1) {

        this.level = Math.floor(this.score / 1200) + 1;
        this.levelHTML.textContent = this.level;
        clearInterval(this.frameInterval);
        this.frameRate -= (this.frameRate * 0.05);
        this.frameInterval = setInterval(this.frame, this.frameRate);

    }

};

export const putHighScore = function() {
    let scoreHighHTML = document.getElementById('high-score-num');
    scoreHighHTML.textContent = document.cookie;
};
