export const presets = function() {
    this.started = false;
    this.canvas = document.getElementsByTagName('canvas')[0];
    this.canvasContext = this.canvas.getContext('2d');
    this.canvasHeight = this.canvas.height;
    this.canvasWidth = this.canvas.width;
    this.numOfColumns = 10;
    this.numOfRows = 20;
    this.tileHeight = this.canvasHeight / this.numOfRows;
    this.tileWidth = this.canvasWidth / this.numOfColumns;
    this.canvasContext.font = '30px arcade';
    this.canvasContext.fillStyle = 'white';
    this.canvasContext.textAlign = "center";
    this.audioEnabled = true;
    this.matrix = [];
    this.level = 1;
    this.testx = 0;
    this.testy = 0;
    this.activeColorBack = 'white';
    this.lost = false;
    this.activePiece = [];
    this.activeX = 5;
    this.activeY = 0;
    this.sizeOfPiece = 4;
    this.pieceType = 0;
    this.piece = [];
    this.notFalling = false;
    this.scoring = [0, 40, 100, 300, 1200];
    this.score = 0;
    document.cookie = document.cookie || 0;
};

export const startup = function(){
    this.presets();
    document.body.onkeydown = this.KeyHashing;
    this.resetPieceQueue();
    this.putHighScore();
    this.putScore();
    setTimeout(this.pressZ, 0); // wait for font css
};