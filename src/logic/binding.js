import * as draw from "../presentation/draw";
import * as pieces from "./pieces";
import * as render from "../presentation/render";
import * as collision from "./collision";
import * as reset from "./reset";
import * as music from "../presentation/music";
import * as input from "../presentation/input";
import * as save from "./save";
import * as lines from "./lines";
import * as score from "../presentation/score";
import * as presets from "./presets";


export const binding = function () {

    this.presets = presets.presets;
    this.startup = presets.startup;
    this.pieces = pieces.piecesArr;
    this.previewArrays = pieces.previewArrays;
    this.nextArrays = this.previewArrays;
    this.colors = pieces.colors;
    this.dropColors = pieces.dropColors;
    this.clearPreviewAndNext = render.clearPreviewAndNext;
    this.putScore = score.putScore;
    this.putLevel = score.putLevel;
    this.putHighScore = score.putHighScore;
    this.resetPieceQueue = pieces.resetPieceQueue;
    this.drawTile = draw.drawTile;
    this.render = render.render;
    this.renderDrop = render.renderDrop;
    this.renderSavedPiece = render.renderSavedPiece;
    this.renderNextPiece = render.renderNextPiece;
    this.stopFalling = collision.stopFalling;
    this.resetGame = reset.resetGame;
    this.resetIntervals = reset.resetIntervals;
    this.calculateDrop = collision.calculateDrop;
    this.handleSavePiece = save.handleSavePiece;
    this.drawDropTile = draw.drawDropTile;
    this.drawNextTile = draw.drawNextTile;
    this.drawPreviewTile = draw.drawPreviewTile;
    this.randomPiece = pieces.randomPiece;
    this.clear = render.clear;
    this.playMusic = music.playMusic;
    this.lineClearPlay = music.lineClearPlay;
    this.lostScreen = collision.lostScreen;
    this.frame = collision.frame;
    this.rotate = collision.rotate;
    this.collisionCheck = collision.collisionCheck;
    this.KeyHashing = input.KeyHashing;
    this.keyPress = input.keyPress;
    this.deleteLines = lines.deleteLines;
    this.notZero = lines.notZero;
    this.deleteAndMoveLine = lines.deleteAndMoveLine;
    this.pressZ = render.pressZ;

    // bind everything
    for (let key in this) {
        if (typeof this[key] === 'function') {
            this[key] = this[key].bind(this);
        }
    }

    this.startup();



};