export const playMusic = function () {
    if (this.themeMusic) {
        this.themeMusic.pause();
    }

    if (this.audioEnabled) {
        if (!this.themeMusic) {
            this.themeMusic = new Audio('./music/TetrisTheme.mp3');
            this.themeMusic.volume = 0.05;
            this.themeMusic.loop = true;
        }
        this.themeMusic.play();
    }


};
export const lineClearPlay = function(){
    if (this.audioEnabled) {
        if (!this.linecleareffect) {
            this.linecleareffect = new Audio('./music/line.wav');
            this.linecleareffect.volume = 0.15;
        }
        this.linecleareffect.play();
    }
};
